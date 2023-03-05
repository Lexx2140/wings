<?php

add_action('rest_api_init', function () {

    register_rest_route('wings/v1', '/user/create', array(
        'methods'  => 'POST',
        'callback' => array(new WingsUser(), 'create')
    ));

    register_rest_route('wings/v1', '/user/login', array(
        'methods'  => 'POST',
        'callback' => array(new WingsUser(), 'login')
    ));

    register_rest_route('wings/v1', '/user/logout', array(
        'methods'  => 'POST',
        'callback' => array(new WingsUser(), 'logout')
    ));
});
