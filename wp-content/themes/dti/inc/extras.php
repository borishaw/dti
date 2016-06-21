<?php
/**
 * Custom functions that act independently of the theme templates.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package DTI
 */

 // Get the post's slug
 function the_slug() {
    global $post;
	return $post->post_name;
}
 
/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function dti_body_classes( $classes ) {
	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}
	
	// Adds a class for the page slug
	if ( is_page() ) {
		$classes[] = the_slug();
	}

	return $classes;
}
add_filter( 'body_class', 'dti_body_classes' );


// Set the cool header feature!
function dti_cool_header( $manual_title, $manual_image, $manual_description ) {
	
	$output = '';
	
	// Get the variables
	if($manual_image) {
		// check if http is already passed
		if (strpos($manual_image, 'http://') !== false) {
				$feat_image = $manual_image;
		} else {
			$feat_image = get_site_url() . $manual_image;
		}
	} elseif(has_post_thumbnail()) {
		$feat_image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
	}
	if ($manual_description) {
		$description = $manual_description;
	} else {
		$description = get_field( "page_description" );
	}
	
	if ($manual_title) {
		$page_title = $manual_title;
	} else {
		$page_title = get_the_title();
	}
	
	// Set up header output
	if($feat_image) {
		$output .= '<div class="vc_row wpb_row vc_row-fluid vc_row-no-padding ult-vc-hide-row vc_row-has-fill" style="background-image: url('. $feat_image . ');">';
	} else {
		$output .= '<div class="vc_row wpb_row vc_row-fluid vc_row-no-padding ult-vc-hide-row vc_row-has-fill">';
	}
	$output .= '<div class="triangle-seperator"><div class="ult-main-seperator-inner"><svg class="uvc-x-large-triangle" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" preserveAspectRatio="none" viewBox="0 29.9 500 30.1" enable-background="new 0 29.946 500 30.054" xml:space="preserve"><polygon points="0 29.9 0 59.8 500 59.8 500 29.9 375.5 44.8 250 59.8 124.5 44.8 "/></svg></div></div><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner ">';
	if($description) {
		$output .= '<h1 class="entry-title has-description">' . $page_title . '</h1><div class="entry-description">'. $description . '</div>';
	} else {
		$output .= '<h1 class="entry-title">' . $page_title . '</h1>';
	}
	$output .= '</div></div></div>';
	
	echo $output;
}

// Display the trip date
function dti_show_date($startDate, $endDate) {
	// Check if start and end months are the same
	if($startDate->format('F') == $endDate->format('F')) {
		$fullDuration = $startDate->format('M j') . '-' . $endDate->format('j') . ', ' . $endDate->format('Y');
	} else {
		$fullDuration = $startDate->format('M j') . ' - ' . $endDate->format('M j') . ', ' . $endDate->format('Y');
	}
	
	echo $fullDuration;
}
