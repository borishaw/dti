<?php
// Custom post types& taxonomies

// Register custom destination & client taxonomies
// hook into the init action and call create_book_taxonomies when it fires
add_action( 'init', 'create_dti_taxonomies', 0 );

function create_dti_taxonomies() {
	// Add new taxonomy, make it hierarchical (like categories)
	$labels = array(
		'name'              => _x( 'Categories', 'taxonomy general name' ),
		'singular_name'     => _x( 'Category', 'taxonomy singular name' ),
		'search_items'      => __( 'Search Destination Categories' ),
		'all_items'         => __( 'All Categories' ),
		'parent_item'       => null,
		'parent_item_colon' => null,
		'edit_item'         => __( 'Edit Category' ),
		'update_item'       => __( 'Update Category' ),
		'add_new_item'      => __( 'Add New Category' ),
		'new_item_name'     => __( 'New Category Name' ),
		'menu_name'         => __( 'Destination Categories' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'sort'					=> true,
		'rewrite'           => array( 'slug' => 'destination-category' ),
	);

	register_taxonomy( 'destination-category', array( 'destinations' ), $args );

}


// Register Custom Post Tyles
add_action( 'init', 'create_post_type' );
function create_post_type() {
	// Full Destination List
  register_post_type( 'destinations',
    array(
      'labels' => array(
        'name' => __( 'Destinations' ),
        'singular_name' => __( 'Destination' ),
        'add_new_item' => __( 'Add New Destination' ),
        'edit_item' => __( 'Edit Destination' ),
        'new_item' => __( 'New Destination' ),
        'view_item' => __( 'View Destination' ),
        'search_items' => __( 'Search Destinations' ),
        'all_items' => __( 'All Destinations' ),
        'not_found' => __( 'No destinations found' ),
        'menu_name' => __( 'Destination List' ),
      ),
		'description' => 'The full list of destinations visible on the front of the website',
      'public' => true,
      'has_archive' => true,
		'menu_position' => 5,
		'menu_icon'   => 'dashicons-palmtree',
		'supports'           => array( 'title', 'editor', 'thumbnail'),
		'rewrite'            => array( 'slug' => 'destinations' ),
    )
  );
  
	// Company Trips
  register_post_type( 'trip',
    array(
      'labels' => array(
        'name' => __( 'Trips' ),
        'singular_name' => __( 'Trip' ),
        'add_new_item' => __( 'Add New Trip' ),
        'edit_item' => __( 'Edit Trip' ),
        'new_item' => __( 'New Trip' ),
        'view_item' => __( 'View Trip' ),
        'search_items' => __( 'Search Trips' ),
        'all_items' => __( 'All Trips' ),
        'not_found' => __( 'No trips found' ),
        'menu_name' => __( 'Trips' ),
      ),
		'description' => 'Created trip packages for current clients',
      'public' => true,
      'has_archive' => true,
		'menu_position' => 5,
		'menu_icon'   => 'dashicons-book-alt',
		'supports'           => array( 'title', 'editor', 'thumbnail'),
		'rewrite'            => array( 'slug' => 'trip' ),
    )
  );
  
}

// set up multi-image plugin for Trip post type
add_filter('images_cpt','dti_trip_images');
	function dti_trip_images(){
		 $cpts = array('page','trip');
		 return $cpts;
	}
 

// highlight active custom post page in nav
add_action('nav_menu_css_class', 'add_current_nav_class', 10, 2 );
 
 function add_current_nav_class($classes, $item) {
	 
	 // Getting the current post details
	 global $post;
	 
	 // Getting the post type of the current post
	 $current_post_type = get_post_type_object(get_post_type($post->ID));
	 $current_post_type_slug = $current_post_type->rewrite[slug];
		 
	 // Getting the URL of the menu item
	 $menu_slug = strtolower(trim($item->url));
	 
	 // If the menu item URL contains the current post types slug add the current-menu-item class
	 if (strpos($menu_slug,$current_post_type_slug) !== false) {
	 
		 $classes[] = 'current-menu-item';
	 
	 }
	 
	 // Return the corrected set of classes to be added to the menu item
	 return $classes;
 
 }

// Client Destinations