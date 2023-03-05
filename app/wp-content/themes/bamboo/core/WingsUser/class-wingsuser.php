<?php

class WingsUser
{

    private function get($data)
    {
        // Check if user_login is an email address or a phone number
        if (filter_var($data['user_login'], FILTER_VALIDATE_EMAIL)) {
            $user = get_user_by('email', $data['user_login']);
        } else {
            $user = get_users(array(
                'meta_key'    => 'user_profile_phone',
                'meta_value'  => $data['user_login'],
                'number'      => 1,
                'count_total' => false,
                'fields'      => 'all'
            ));
            $user = reset($user);
        }

        return $user ?? null;
    }

    public function login(WP_REST_Request $request)
    {
        $data = $request->get_params();

        $user = $this->get($data);

        if (!$user) {
            return new WP_Error('login_error', __('Invalid username or password', 'bamboo'));
        }

        $authorized = wp_signon([
            'user_login'    => $user->user_login,
            'user_password' => $data['user_pass'],
            'remember'      => isset($data['remember_me']) && $data['remember_me'] === true
        ], false);

        if (is_wp_error($authorized)) {
            return new WP_Error('login_error', $authorized->get_error_message());
        }

        wp_set_current_user($authorized->ID);
        wp_set_auth_cookie($authorized->ID);

        return array(
            'success'   => true,
            'user_data' => [
                'user_id'           => $authorized->ID,
                'user_display_name' => $authorized->display_name,
                'user_email'        => $authorized->user_email,
                'token'             => $this->generateToken($authorized->ID)
            ]
        );

    }

    public function logout(WP_REST_Request $request)
    {
        $data = $request->get_params();

        $user_id = $data['user_id'] ?? null;

        $user = get_user_by('ID', $user_id);

        return $user->status;
        // $current_user = wp_get_current_user();

        // return $current_user;

        // $user = wp_get_current_user();

        // return $user;

        // if ($user->ID == 0) {
        //     // User is not authenticated, return an error message
        //     return new WP_Error('not_authenticated', __('You are not authenticated.', 'bamboo'), array('status' => 401));
        // } else {
        //     // User is authenticated, log them out
        //     wp_logout();

        //     // Return a success message
        //     return array(
        //         'success' => true,
        //         'message' => __('You have been logged out.', 'bamboo')
        //     );
        // }
    }

    public function create(WP_REST_Request $request)
    {

        $data = $request->get_params();

        $errors = $this->validate($data);

        if ($errors) {
            return $errors;
        }

        $user_data = [
            'user_login'           => $data['user_email'],
            'first_name'           => $data['first_name'],
            'last_name'            => $data['last_name'],
            'user_email'           => $data['user_email'],
            'user_pass'            => $data['user_pass'],
            'meta_input'           => [
                'user_profile_phone' => $data['user_phone']
            ],
            'role'                 => 'subscriber',
            'show_admin_bar_front' => 'false'
        ];

        $user_id = wp_insert_user($user_data);

        if (is_wp_error($user_id)) {
            return new WP_Error('create_user_error', $user_id->get_error_message(), array('status' => 400));
        }

        $response = [
            'success' => true,
            'message' => __('User created successfully!', 'bamboo'),
            'user_id' => $user_id
        ];

        return $response;
    }

    // public function update(WP_REST_Request $request)
    // {
    //     // Change this to $request later
    //     $user_data = [
    //         'user_login'           => $request->get_param('user_email'),
    //         'first_name'           => $request->get_param('first_name'),
    //         'last_name'            => $request->get_param('last_name'),
    //         'user_email'           => $request->get_param('user_email'),
    //         'user_pass'            => $request->get_param('user_pass'),
    //         'user_pass_repeat'     => $request->get_param('user_pass_repeat'),
    //         'user_photo'           => $request->get_file_params(),
    //         'meta_input'           => [
    //             'user_profile_phone' => $request->get_param('user_phone')
    //         ],
    //         'role'                 => 'subscriber',
    //         'show_admin_bar_front' => 'false'
    //     ];
    // }

    // private function updateMeta($user_id, $request)
    // {
    //     // retrieve the uploaded image file
    //     $files = $request->get_file_params();

    //     if (!empty($files)) {

    //         require_once ABSPATH . 'wp-admin/includes/image.php';
    //         require_once ABSPATH . 'wp-admin/includes/file.php';
    //         require_once ABSPATH . 'wp-admin/includes/media.php';

    //         // Upload image and save to ACF field
    //         $uploaded_id = media_handle_sideload($files['user_photo'], $user_id);

    //         if (is_wp_error($uploaded_id)) {
    //             return new WP_Error('upload_error', $uploaded_id->get_error_message(), array('status' => 400));
    //         }

    //         update_field('user_profile_photo', $uploaded_id, 'user_' . $user_id);
    //     }
    // }

    // public function delete(WP_REST_Request $user_id)
    // {
    //     // implementation
    // }

    private function validate($data)
    {
        $validator = new WingsValidator();
        $errors    = $validator->validate($data);

        if ($errors) {
            return $errors;
        }
    }

    private function generateToken($user_id)
    {
        // Create token
        $token = new WingsToken();

        return $token->generate($user_id);
    }

}
