<?php

// Projects
add_action('init', 'create_wings_posts');
add_action('init', 'default_wings_post');

function create_wings_posts()
{
    // Projects
    register_post_type('projects', [
        'labels'        => [
            'name'           => __('Проекти', 'bamboo'),
            'all_items'      => __('Усі проекти', 'bamboo'),
            'name_admin_bar' => __('Проект', 'bamboo'),
            'singular_name'  => __('Проект', 'bamboo'),
            'add_new'        => __('Створити новий', 'bamboo'),
            'add_new_item'   => __('Створити новий проект', 'bamboo')
        ],
        'public'        => true,
        'has_archive'   => false,
        'menu_position' => 4,
        'menu_icon'     => 'dashicons-archive',
        'supports'      => ['title', 'thumbnail', 'excerpt', 'editor']
    ]);

    // Promotions
    register_post_type('promotions', [
        'labels'        => [
            'name'           => __('Акції', 'bamboo'),
            'all_items'      => __('Усі акції', 'bamboo'),
            'name_admin_bar' => __('Акцію', 'bamboo'),
            'singular_name'  => __('Акція', 'bamboo'),
            'add_new'        => __('Створити нову', 'bamboo'),
            'add_new_item'   => __('Створити нову акцію', 'bamboo')
        ],
        'public'        => true,
        'has_archive'   => false,
        'menu_position' => 4,
        'menu_icon'     => 'dashicons-megaphone',
        'supports'      => ['title', 'thumbnail', 'excerpt', 'editor']
    ]);

    // Reports
    register_post_type('reports', [
        'labels'        => [
            'name'           => __('Звіти', 'bamboo'),
            'all_items'      => __('Усі звіти', 'bamboo'),
            'name_admin_bar' => __('Звіти', 'bamboo'),
            'singular_name'  => __('Звіт', 'bamboo'),
            'add_new'        => __('Створити новий', 'bamboo'),
            'add_new_item'   => __('Створити новий звіт', 'bamboo')
        ],
        'public'        => true,
        'has_archive'   => false,
        'menu_position' => 4,
        'menu_icon'     => 'dashicons-analytics',
        'supports'      => ['title', 'thumbnail', 'excerpt', 'editor']
    ]);
}

// News post type as default
function default_wings_post()
{
    $pt = get_post_type_object('post');

    $pt->menu_icon          = 'dashicons-calendar';
    $labels                 = $pt->labels;
    $labels->name           = __('Новини', 'bamboo');
    $labels->singular_name  = __('Новина', 'bamboo');
    $labels->add_new        = __('Додати новину', 'bamboo');
    $labels->add_new_item   = __('Додати новину', 'bamboo');
    $labels->edit_item      = __('Редагувати новину', 'bamboo');
    $labels->new_item       = __('Нова', 'bamboo');
    $labels->all_items      = __('Усі новини', 'bamboo');
    $labels->menu_name      = __('Новини', 'bamboo');
    $labels->name_admin_bar = __('Новину', 'bamboo');
}
