<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package DTI
 */

if ( !is_user_logged_in() ) {
   auth_redirect();
}
 
 // If the current user isn't the one assigned to this trip, redirect them to the dashboard
 $currentUser = get_current_user_id();
 $tripCompany = get_field('trip_company', false, false);
 if(!($currentUser == $tripCompany)) {
	wp_redirect( home_url() );
	exit;
 }
 
 // Check for open registration and set up registration link
 
 $registrationType = get_field('registration_type');
 
 if($registrationType == 'signup') {
	$formUrl = home_url( '/' ) . 'signup/';
 } elseif ($registrationType == 'register') {
	$formUrl = home_url( '/' ) . 'registration/';
 }

$tripID = get_the_ID();
$tripName = get_field('location', false, false);
$tripType = get_field('trip_type');

$formUrl .= '?id=' . $tripID . '&tripname=' . $tripName . '&type=' . $tripType;
 
get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main tab-about" role="main">

		<?php
		while ( have_posts() ) : the_post();
			$tripImages = get_field('trip_gallery');
			if($tripImages):
		?>
		 
			<div class="trip-slider">
				<?php foreach ( $tripImages as $singleImage ) { ?>			
					<div class="item"><img src="<?php echo $singleImage['url']; ?>"></div>
				<?php } ?>
			</div>
		 
		 <?php endif; ?>
		 
			<div class="trip-content vc_row wpb_row vc_row-fluid">
				<h1 class="trip-title">
					<?php
					echo(get_field('location'));
					if(get_field('country')) {
						echo(', ' . get_field('country'));
					}
					?>
				</h1>
				<div class="wpb_column vc_column_container vc_col-md-4 vc_col-lg-3 col-sidebar">
					<div class="vc_column-inner">
						<div class="wpb_wrapper">
							<div class="trip-sidebar">
								<div class="trip-date">
									<?php
										$startDate = DateTime::createFromFormat('Ymd', get_field('trip_start_date'));
										$endDate = DateTime::createFromFormat('Ymd', get_field('trip_end_date'));
										echo 'Travel Dates: ';
										dti_show_date($startDate, $endDate);
									?>
								</div>
								<ul id="trip-nav" class="sidebar-nav nav nav-pills nav-stacked" role="tablist">
									<li role="presentation" class="active">
										<a data-target="#about" aria-controls="about" role="tab" data-toggle="tab">
											<?php echo __('About Destination', 'dti'); ?>
										</a>
									</li>
									<?php if( get_field('accommodation_check')) { ?>
									<li role="presentation">
										<a data-target="#accommodation" aria-controls="accommodation" role="tab" data-toggle="tab">
											<?php echo __('Accommodations', 'dti'); ?>
										</a>
									</li>
									<?php } ?>
									<li role="presentation">
										<a data-target="#included" aria-controls="included" role="tab" data-toggle="tab">
											<?php echo __("What's Included", 'dti'); ?>
										</a>
									</li>
									<li role="presentation">
										<a data-target="#faq" aria-controls="faq" role="tab" data-toggle="tab">
											<?php echo __('FAQ', 'dti'); ?>
										</a>
									</li>
									<li role="presentation">
										<a id="register-link" data-target="#register" aria-controls="register" role="tab" data-toggle="tab">
											<?php echo __('Register', 'dti'); ?>
										</a>
									</li>
									
								</ul>
								<div class="trip-timer">
									<h5><?php echo __('Days Remaining', 'dti'); ?></h5>
									<?php
									// Timer Setup -> Date format 2016/06/06 00:00:00
									$timerDate  = get_field('trip_start_date', false, false);
									$timerDate = new DateTime($timerDate);
									echo do_shortcode( '[ult_countdown datetime="' . $timerDate->format('Y/m/d') . ' 00:00:00" countdown_opts="smonth,sweek,sday"]' );
									
									// Set deadline for signups/registrations
									if($registrationType == 'signup'):
										$registrationDeadline = get_field('signup_deadline');
										if ($registrationDeadline) {
											echo "<p class='reg-deadline'>Signups end on " . $registrationDeadline . "</p>";
										};
									elseif($registrationType == 'register'):
										$registrationDeadline = get_field('registration_deadline');
										if ($registrationDeadline) {
											echo "<p class='reg-deadline'>Registrations end on " . $registrationDeadline . "</p>";
										};
									endif;
									
									?>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="wpb_column vc_column_container vc_col-md-8 vc_col-lg-9 col-main">
					<div class="vc_column-inner">
						<div class="wpb_wrapper">
							<div class="tab-content">
								<div role="tabpanel" class="tab-pane fade in active" id="about">
									<?php the_content(); ?>
									<div id="register-cta" class="cta-grey">
										<h2 class="script"><?php echo __('Register for your trip to ' . get_field('location'), 'dti'); ?></h2>
																								
										<div class=" ubtn-ctn-center">
											<a class="ubtn-link ult-adjust-bottom-margin ubtn-center ubtn-block red-btn">
												<button type="button" id="ubtn-6523" class="ubtn ult-adjust-bottom-margin ult-responsive ubtn-block ubtn-no-hover-bg  none ubtn-sep-icon ubtn-sep-icon-bottom-push  ubtn-center   tooltip-56e6c344baa89 ubtn-block" style="font-weight:normal;border:none;">
													<span class="ubtn-data ubtn-icon">
														<i class="Defaults-plane" style="font-size:32px;color:;"></i>
													</span>
													<span class="ubtn-hover"></span>
													<span class="ubtn-data ubtn-text "><?php echo __('Register Now', 'dti'); ?></span>
												</button>
											</a>
										</div>
										
									</div>
								</div>
								<?php if( get_field('accommodation_check')) { ?>
								<div role="tabpanel" class="tab-pane fade" id="accommodation">
									<?php
									if( have_rows('accommodations') ):
									
										 while ( have_rows('accommodations') ) : the_row();
										 
											echo('<div class="accommodation-item">');
										 
											$accImages = get_sub_field('acc_gallery');
											if($accImages):
											?>
										 
												<div class="owl-carousel owl-theme accommodations-gallery">
												  <?php foreach( $accImages as $image ): ?>
													  <div class="item">
															<img src="<?php echo $image['url']; ?>" />
													  </div>
												  <?php endforeach; ?>
												 
												</div>
											 
											<?php
											endif;
											echo '<h2>' . get_sub_field('acc_name') . '</h2>';
											
											$accStart = get_sub_field('acc_start_date');
											$accEnd = get_sub_field('acc_end_date');
											if($accStart && $accEnd):
												echo '<h3 class="acc-dates">' . $accStart . ' - ' . $accEnd . '</h3>';
											endif;
											
											the_sub_field('acc_content');
											echo('</div>');
										 endwhile;
									
									else :
									
										 // no rows found
									
									endif;
									
									?>
								</div>
								<?php } ?>
								<div role="tabpanel" class="tab-pane fade" id="included">
									<?php the_field('whats_included'); ?>
								</div>
								<div role="tabpanel" class="tab-pane fade" id="faq">
									<?php the_field('faq'); ?>
								</div>
								<div role="tabpanel" class="tab-pane fade" id="register">
									
									<?php
									
									// Check for current registration type and display relevant fields
									if($registrationType == 'none'):
									
										echo '<div class="no-registration-message">';
										the_field('registration_none_content');
										echo '<img class="alignnone size-full wp-image-376" src="' . esc_url( home_url( '/' ) ) . 'wp-content/uploads/2016/03/bg-grey-02.jpg" alt="bg-grey-02" width="500" height="355" />';
										echo '<div>';
									
									elseif($registrationType == 'signup'):
									
										echo '<h2>' . __('Signing Up', 'dti') . '</h2>';
										the_field('registration_closed_content');
										// form to get to sign-up goes here
										echo '<div class="submit-btn-outer"><a class="submit-btn" href="' . $formUrl . '">Sign Up</a></div>';
									
									elseif($registrationType == 'register'):
									
										if (get_field('registration_full_content')) {
											the_field('registration_full_content');
										}
										
										echo '<h2>' . __('Waiver of Responsibility', 'dti') . '</h2>';
										the_field('waiver_of_responsibility');
										echo FrmFormsController::get_form_shortcode( array( 'id' => 17, 'title' => false, 'description' => false ) );
									
									endif;
									
									?>
								
								</div>
							 </div>
						</div>
					</div>
				</div>
			</div>
		 
		 <?php
		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
