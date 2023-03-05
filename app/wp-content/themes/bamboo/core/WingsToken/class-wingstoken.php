<?php

class WingsToken
{
    private $secret_key = 'your-secret-key';

    // Function to create a new token
    public function generate($user_id)
    {
        $header = [
            'alg' => 'HS256',
            'typ' => 'JWT'
        ];
        $payload = [
            'sub' => $user_id,
            'iat' => time(),
            'exp' => time() + (60 * 60 * 24) // token will expire in 24 hours
        ];
        $jwt = base64_encode(json_encode($header)) . '.' . base64_encode(json_encode($payload)) . '.' . hash_hmac('sha256', $header['alg'] . '.' . base64_encode(json_encode($payload)), $this->secret_key, true);
        return $jwt;
    }

    // Function to validate a token
    public function validate($token)
    {
        $jwt_parts = explode('.', $token);
        if (count($jwt_parts) !== 3) {
            return false;
        }
        $header          = json_decode(base64_decode($jwt_parts[0]), true);
        $payload         = json_decode(base64_decode($jwt_parts[1]), true);
        $signature       = $jwt_parts[2];
        $check_signature = hash_hmac('sha256', $jwt_parts[0] . '.' . $jwt_parts[1], $this->secret_key, true);
        if (!hash_equals($signature, $check_signature)) {
            return false;
        }
        if (time() > $payload['exp']) {
            return false;
        }
        return $payload['sub'];
    }

    // Function to revoke a token
    public function revoke($token)
    {
        $user_id = $this->validate($token);
        if (!$user_id) {
            return false;
        }
        $new_token = $this->generate($user_id);
        return $new_token;
    }
}
