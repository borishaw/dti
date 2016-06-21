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


get_header();




$tripFeatImg = wp_get_attachment_url( get_post_thumbnail_id() );


?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<header class="entry-header form-header">
					
					<div class="vc_row wpb_row vc_row-fluid vc_row-no-padding ult-vc-hide-row vc_row-has-fill" style="background-image: url('<?php echo $tripFeatImg; ?>');">
						<div class="wpb_column vc_column_container vc_col-sm-12">
							<div class="vc_column-inner ">

								<h1><?php echo (__('Trip Participants ', 'dti') . get_field('location', $tripID)); ?></h1>
	
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
