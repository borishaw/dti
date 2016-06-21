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

								<h1><?php echo (__('Register for ', 'dti') . get_field('location', $tripID)); ?></h1>
	
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
									while ( have_posts() ) : the_post();
						
										the_content();

									endwhile; // End of the loop.
									?>
									
									<div class="form-end-contacts">
										<h3>Travel Arrangements By</h3>
										<div class="col">
											DT International, Inc. <br/>
											305 South Brevard Avenue <br/>
											Tampa, FL 33606
										</div>
										<div class="col">
											<br/>
											Phone: (813) 251-3844 <br/>
											Toll Free: (800) 466-8915 
										</div>
									</div>

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
