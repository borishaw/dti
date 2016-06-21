<?php

// All the admin features will go here

// Get the client company of a trip
function dti_get_trip_company($post_ID) {
	$thisTripCompanyID = get_field('trip_company', $post_ID, false);
	$thisTripCompany = get_user_by('ID', $thisTripCompanyID);
    return $thisTripCompany->display_name;
}

// Add the Client Company column to the Trip post type main screen
function dti_trip_column_head($defaults) {
    $defaults['trip_company'] = 'Trip Company';
    return $defaults;
}
function dti_trip_column_content($column_name, $post_ID) {
    if ($column_name == 'trip_company') {
        $post_company = dti_get_trip_company($post_ID);
        if ($post_company) {
           echo $post_company;
        }
    }
}

add_filter('manage_trip_posts_columns', 'dti_trip_column_head');
add_action('manage_trip_posts_custom_column', 'dti_trip_column_content', 10, 2);