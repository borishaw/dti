<?php

// Set up user profiles
function remove_unneeded_profile_fields_css()
{
    echo '<style>tr.user-url-wrap, tr.user-rich-editing-wrap, tr.user-admin-color-wrap, tr.user-comment-shortcuts-wrap, tr.show-admin-bar, tr.user-first-name-wrap, tr.user-last-name-wrap, tr.user-nickname-wrap, tr.user-display-name-wrap, tr.user-description-wrap, tr.user-profile-picture{ display: none; }</style>';
}
add_action( 'admin_head-user-edit.php', 'remove_unneeded_profile_fields_css' );
add_action( 'admin_head-profile.php',   'remove_unneeded_profile_fields_css' );


// Switch homepage for logged-in client accounts
function switch_homepage() {
	if ( is_user_logged_in() && !current_user_can('edit_posts') ) {
		// If logged in with a user that can't edit posts
		$page = get_page_by_path('dashboard');;
		update_option( 'page_on_front', $page->ID );
		update_option( 'show_on_front', 'page' );
  } else {
		// If not logged in, or with an admin/editor account
		$page = get_page_by_path('home-page');;
		update_option( 'page_on_front', $page->ID );
		update_option( 'show_on_front', 'page' );
  }
}
add_action( 'init', 'switch_homepage' );


// Display welcome message
 function welcome_user() {
	$companyName = get_field('company_name', 'user_' . get_current_user_id());
	if ($companyName) {
		$welcomeMessage = 'Welcome, ' . $companyName;
	} else {
		$welcomeMessage = 'Welcome to DTI International';
	}
	$welcomeDiv = '<div class="member-welcome">' . $welcomeMessage . '</div>';
	return $welcomeDiv;
}