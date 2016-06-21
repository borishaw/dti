<?php

/**
 * The template for displaying the registration page
 *
 * @package DTI
 */

 // Redirect to login if user isn't logged in
 if ( !is_user_logged_in() ) {
   auth_redirect();
}

 $currentUser = get_current_user_id();
 
 $current_user_object = wp_get_current_user();
 $currentUsername = $current_user_object->user_login;
 
// Get variables from URL Params
if (isset($_GET['id'])) {
    $tripID = $_GET['id'];
	 // Check if this user is set up to access this trip
	 $tripCompany = get_field('trip_company', false, false);
	  if(!($currentUser == $tripCompany)) {
		// RE-ENABLE AFTER DEVELOPMENT
		// wp_redirect( home_url() );
		// exit;
	}
}else{
	// No trip was submitted
    // Fallback behaviour goes here
	wp_redirect( home_url() );
	exit;
}

get_header();




$tripFeatImg = wp_get_attachment_url( get_post_thumbnail_id($tripID) );


?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<header class="entry-header form-header">
					
					<div class="vc_row wpb_row vc_row-fluid vc_row-no-padding ult-vc-hide-row vc_row-has-fill" style="background-image: url('<?php echo $tripFeatImg; ?>');">
						<div class="wpb_column vc_column_container vc_col-sm-12">
							<div class="vc_column-inner ">

								<h1><?php echo (__('Sign Up for ', 'dti') . get_field('location', $tripID)); ?></h1>
	
							</div>
						</div>
					</div>

					
				</header><!-- .entry-header -->
			
				<div class="entry-content">
					
					<div class="vc_row wpb_row vc_row-fluid">
						<div class="wpb_column vc_column_container vc_col-sm-12">
							<div class="vc_column-inner ">
								<div class="wpb_wrapper">
									
									<?php
									
									// Fetch signup message (before form)
									$signupMessageBefore = get_field('signup_form_content_before', $tripID);
									if($signupMessageBefore) {
										echo '<div class="signup-message-before">' . $signupMessageBefore . '</div>';
										
									}
									
									// FORM LOGIC:
									// Check company username against form keys
									$userForm = 'signup-' . $currentUsername;
									
									$formGenericID = get_id_from_key_frm ( 'form', 'signup-generic' );
									$formUserID = get_id_from_key_frm ( 'form', $userForm );
									
									if($formUserID) {
										// if form key 'signup-companyname' exits, display that form
										echo FrmFormsController::show_form($formUserID, $title=false, $description=false);
									} else {
										// if it doesn't exist, use generic signup form
										echo FrmFormsController::show_form($formGenericID, $title=false, $description=false);
									}
									
									
									// Fetch signup message (after form)
									$signupMessageAfter = get_field('signup_form_content_after', $tripID);
									if($signupMessageAfter) {
										echo '<div class="signup-message-after">' . $signupMessageAfter . '</div>';
									}
									
									?>

								</div>
							</div>
						</div>
					</div>
					
					
					
					
				</div><!-- .entry-content -->
			
			
			</article><!-- #post-## -->



		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
