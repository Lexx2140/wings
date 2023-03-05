<?php

// App security
require_once get_template_directory() . '/functions/security.php';

// Load WP tweaks
require_once get_template_directory() . '/functions/tweaks.php';

// Load scripts & css styles
require_once get_template_directory() . '/functions/scripts.php';

// Customize theme
require_once get_template_directory() . '/functions/customize.php';

// Custom post types
require_once get_template_directory() . '/functions/post-types.php';

// Custom images
require_once get_template_directory() . '/functions/images.php';

// REST
require_once get_template_directory() . '/functions/rest-api.php';

// Token
require_once get_template_directory() . '/core/WingsToken/class-wingstoken.php';

// Validation
require_once get_template_directory() . '/core/WingsValidator/class-wingsvalidator.php';

// User
require_once get_template_directory() . '/core/WingsUser/class-wingsuser.php';
