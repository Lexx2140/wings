<?php

use Respect\Validation\Exceptions\ValidationException as vException;
use Respect\Validation\Validator as v;

class WingsValidator
{

    public function validate($data)
    {

        $rules = [
            'email'            => [
                'title'   => __('E-mail', 'bamboo'),
                'field'   => 'user_email',
                'rules'   => v::notEmpty()->email(),
                'message' => __('Please enter a valid email address', 'bamboo')
            ],
            'first_name'       => [
                'title'   => __('First Name', 'bamboo'),
                'field'   => 'first_name',
                'rules'   => v::notEmpty()->length(3, 50),
                'message' => __('Please enter your first name', 'bamboo')
            ],
            'last_name'        => [
                'title'   => __('Last Name', 'bamboo'),
                'field'   => 'last_name',
                'rules'   => v::notEmpty()->length(3, 50),
                'message' => __('Please enter your last name', 'bamboo')
            ],
            'user_pass'        => [
                'title'   => __('Password', 'bamboo'),
                'field'   => 'user_pass',
                'rules'   => v::stringType()
                    ->length(6, 50)
                    // ->regex('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/'),
                // 'message' => __('Please enter a password with at least 6 characters, including lowercase and uppercase letters, numbers, and special characters', 'bamboo')
            ],
            'user_pass_repeat' => [
                'title'   => __('Confirm Password', 'bamboo'),
                'field'   => 'user_pass_repeat',
                'rules'   => v::equals($data['user_pass']),
                'message' => __('Please make sure the password confirmation matches the password', 'bamboo')
            ],
            'user_phone'       => [
                'title'   => __('Phone Number', 'bamboo'),
                'field'   => 'user_phone',
                'rules'   => v::optional(v::phone()->startsWith('+380')->length(9)),
                'message' => __('Please enter a valid phone number starting with +380', 'bamboo')
            ]
        ];

        $validationErrors = [];

        foreach ($rules as $field => $rule) {
            $fieldValue  = isset($data[$rule['field']]) ? $data[$rule['field']] : null;
            $fieldErrors = [];
            foreach ($rule['rules']->getRules() as $validator) {
                try {
                    if (isset($rule['message']) && !empty($rule['message'])) {
                        $validator->setName($rule['message']);
                    }
                    $validator->check($fieldValue);
                } catch (vException $e) {
                    // Set default message if custom is empty
                    if (empty($rule['message'])) {
                        $fieldErrors[] = $e->getMessage();
                    } else {
                        $errorMessage = $rule['message'];
                        // check if error message already exists in array
                        if (!in_array($errorMessage, $fieldErrors)) {
                            $fieldErrors[] = $errorMessage;
                        }
                    }
                }
            }
            if (!empty($fieldErrors)) {
                $validationErrors[$rule['field']] = $fieldErrors;
            }
        }

        if (!empty($validationErrors)) {
            return new WP_Error('validation_error', __('Validation error', 'bamboo'), array(
                'status' => 400,
                'validation_errors' => true,
                'fields' => $validationErrors
            ));
        }
    }
}
