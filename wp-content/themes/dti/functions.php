<?php


/**
 * DTI functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package DTI
 */

if ( ! function_exists( 'dti_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function dti_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on DTI, use a find and replace
	 * to change 'dti' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'dti', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	// Enable support for Post Thumbnails on posts and pages. @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	add_theme_support( 'post-thumbnails' );

	// Register Menus
	register_nav_menus( array(
		'front-home' => esc_html__( 'Front Pages - Home', 'dti' ),
		'front' => esc_html__( 'Front Pages', 'dti' ),
	) );

	// Switch default core markup for search form, comment form, and comments to output valid HTML5.
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );


	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'dti_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif;
add_action( 'after_setup_theme', 'dti_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 * Priority 0 to make it available to lower priority callbacks.
 * @global int $content_width
 */
function dti_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'dti_content_width', 640 );
}
add_action( 'after_setup_theme', 'dti_content_width', 0 );

// Register widget area. @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
//function dti_widgets_init() {
//	register_sidebar( array(
//		'name'          => esc_html__( 'Sidebar', 'dti' ),
//		'id'            => 'sidebar-1',
//		'description'   => '',
//		'before_widget' => '<section id="%1$s" class="widget %2$s">',
//		'after_widget'  => '</section>',
//		'before_title'  => '<h2 class="widget-title">',
//		'after_title'   => '</h2>',
//	) );
//}
//add_action( 'widgets_init', 'dti_widgets_init' );


//Enqueue scripts and styles.
function dti_scripts() {
	wp_enqueue_style( 'dti-style', get_stylesheet_uri() );
	wp_enqueue_script( 'dti-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );
	wp_enqueue_script( 'dti-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );
	wp_enqueue_style( 'dti-googlefonts', '//fonts.googleapis.com/css?family=Reenie+Beanie|Roboto:400,300,700,700italic,400italic');
	wp_enqueue_style( 'dti-fontawesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');
	wp_enqueue_style( 'dti-entypo', '//cdn.jsdelivr.net/font-entypo/0.1/dev/entypo.css');
	wp_enqueue_style( 'dti-simpleline', '//cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.2.4/css/simple-line-icons.min.css');
	wp_enqueue_style( 'dti-drawer-css', '//cdnjs.cloudflare.com/ajax/libs/drawer/3.2.0/css/drawer.min.css');
	wp_enqueue_script( 'dti-iscroll', '//cdnjs.cloudflare.com/ajax/libs/iScroll/5.1.3/iscroll.min.js', array('jquery'), '20160306', true );
	wp_enqueue_script( 'dti-drawer-js', '//cdnjs.cloudflare.com/ajax/libs/drawer/3.2.0/js/drawer.min.js', array('jquery'), '20160306', true );

	if(is_tax() || is_archive() || is_user_logged_in()) {
		wp_enqueue_script( 'dti-classie', get_template_directory_uri() . '/js/destinations/classie.js', array('jquery'), '20160306', true );
		wp_enqueue_script( 'dti-modalEffects', get_template_directory_uri() . '/js/destinations/modalEffects.js', array('jquery'), '20160306', true );
		wp_enqueue_script( 'dti-cssParser', get_template_directory_uri() . '/js/destinations/cssParser.js', array('jquery'), '20160306', true );
	}
	
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
	
	if(is_singular('trip')) {
		wp_enqueue_style( 'dti-bootstrap-style', '//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css');
		wp_enqueue_style( 'dti-owl', '//cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css');
		wp_enqueue_style( 'dti-owl-theme', '//cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css');
		wp_enqueue_style( 'dti-owl-transitions', '//cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.transitions.min.css');
		wp_enqueue_script( 'dti-owl-script', '//cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js', array('jquery'), '20160306', true );
		wp_enqueue_script( 'dti-bootstrap-script', '//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', array('jquery'), '20160306', true );
		wp_enqueue_script( 'dti-sticky', '//cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.3/jquery.sticky.min.js', array('jquery'), '20160306', true );
	}
	
	wp_enqueue_script( 'dti-custom-scripts', get_template_directory_uri() . '/js/scripts.js', array('jquery'), '20160306', true );
	
	
}
add_action( 'wp_enqueue_scripts', 'dti_scripts' );


function dti_preloader_script() {
	
	if( ! is_singular('trip') ) { // don't add preloader to trip pages; it glitches the carousels. Debugging needed
		wp_enqueue_script( 'dti-queryloader', get_template_directory_uri() . '/js/jquery.queryloader2.min.js', array('jquery'), '20160306', false );
		wp_enqueue_script( 'dti-queryloader-init', get_template_directory_uri() . '/js/preloader-init.js', array(), '20160306', false );
	}
}

add_action('wp_enqueue_scripts', 'dti_preloader_script', 1);

// Hide admin bar for users that can't edit posts
add_action('set_current_user', 'csstricks_hide_admin_bar');
function csstricks_hide_admin_bar() {
  if (!current_user_can('edit_posts')) {
    show_admin_bar(false);
  }
}


// Change loginout() button text
add_filter('loginout','loginout_text_change');
function loginout_text_change($text) {
	$login_text_before = 'Log in';
	$login_text_after = 'Client Login';
	
	$logout_text_before = 'Log out';
	$logout_text_after = 'Logout';
	
	$text = str_replace($login_text_before, $login_text_after ,$text);
	$text = str_replace($logout_text_before, $logout_text_after ,$text);
	return $text;
}



// Implement the Custom Header feature.
require get_template_directory() . '/inc/custom-header.php';

// Set up admin screen features
require get_template_directory() . '/inc/admin-functions.php';

// Custom template tags for this theme.
require get_template_directory() . '/inc/template-tags.php';

// Custom functions that act independently of the theme templates.
require get_template_directory() . '/inc/extras.php';

// Customizer additions.
require get_template_directory() . '/inc/customizer.php';

// Load Jetpack compatibility file.
require get_template_directory() . '/inc/jetpack.php';

// Custom user functions (switch homepage, user profile fields, display username, etc)
require get_template_directory() . '/inc/user-functions.php';

// Setting up custom post types
require get_template_directory() . '/inc/custom-post-types.php';

// Form functionality
require get_template_directory() . '/inc/form-setup.php';

