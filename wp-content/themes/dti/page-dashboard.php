<?php

/**
 * The template for displaying the client dashboard
 *
 * @package DTI
 */

 // Redirect to login if user isn't logged in
 if ( !is_user_logged_in() ) {
   auth_redirect();
}


get_header();

// Current user
$currentUser = wp_get_current_user();

// Query of trips
$args = array(
			  'post_type' => 'trip',
			  'posts_per_page' => -1,
			  'post_status' => 'publish',
			  );
$loop = new WP_Query( $args );

$userImage = get_field('dashboard_image', 'user_' . get_current_user_id());
if($userImage) {
	$dashboardImage = $userImage['url'];
} else {
	$dashboardImage = get_stylesheet_directory_uri() . '/img/dashboard-default.jpg';
}

?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<header class="entry-header dashboard-header">
					
							<div class="vc_row wpb_row vc_row-fluid vc_row-no-padding ult-vc-hide-row vc_row-has-fill" style="background-image: url('<?php echo($dashboardImage); ?>');">
								<div class="wpb_column vc_column_container vc_col-sm-12">
									<div class="vc_column-inner ">
										<div class="dashboard-box">
											<?php
											$companyLogo = get_field('company_logo', 'user_' . get_current_user_id());
											if( !empty($companyLogo) ):
											?>
												
												<img class="company-logo" src="<?php echo $companyLogo; ?>" />
												
											<?php endif; ?>
											<h2 class="script"><?php echo __('Your Destinations', 'dti'); ?></h2>
											
											<?php $points = get_field('qualification_points', 'user_' . get_current_user_id());
											if($points) { ?>
												<div class="qualification-btn">
													<a href="<?php echo esc_url( home_url( '/' ) . 'points' ); ?>">
														<?php echo __('Qualification Details', 'dti'); ?>
													</a>
												</div>
											<?php } ?>
											
										</div>
	
									</div>
								</div>
							</div>
					
				</header><!-- .entry-header -->
			
				<div class="entry-content">
					
					<div class="vc_row wpb_row vc_row-fluid destination-group">
						<div class="wpb_column vc_column_container vc_col-sm-12">
							<div class="vc_column-inner ">
								<div class="wpb_wrapper">
									
									<div class="destination-featured ult-ih-container ult-adjust-bottom-margin">
										<ul class="ult-ih-list ">
									
										<?php
											while ( $loop->have_posts() ) : $loop->the_post();
											$thumb = wp_get_attachment_image_src( get_post_thumbnail_id(), 'medium');
											$feat_image = $thumb[0];
											
											// check if trip's company matches the current user
											$tripCompany = get_field('trip_company', false, false);
										
											if($tripCompany == $currentUser->ID) { ?>
												
												<li class="ult-ih-list-item dashboard-item">
													<a href="<?php echo get_permalink(); ?>">
														<div class="ult-ih-item ">
															<div class="ult-ih-image-block">
																<div class="ult-ih-image" style="background-image: url('<?php echo $feat_image ?>');">
																	<div class="ult-ih-image-overlay"></div>
																</div>
																<div class="ult-ih-frontheading">
																	<?php echo get_the_title(); ?>
																</div>
																<div class="ult-ih-details">
																	<?php
																		$startDate = DateTime::createFromFormat('Ymd', get_field('trip_start_date'));
																		$endDate = DateTime::createFromFormat('Ymd', get_field('trip_end_date'));
																		dti_show_date($startDate, $endDate);
																	?>
																	
																</div>
															</div>
														</div>
													</a>
												</li> <!-- .ult-ih-list-item -->
												
												
										<?php
											}
										 endwhile;
										 ?>
									
										</ul>
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
get_sidebar();
get_footer();
