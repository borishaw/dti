<?php
/**
 * The template for displaying destination category pages.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package DTI
 */

get_header();

global $post;
$terms = get_the_terms($post->id, 'destination-category');

$thisID = $terms[0]->term_id;

$img = get_field( "featured_image", "destination-category_" . $thisID );

if( $img ) {
    
    $headerImage = $img;

} else {

    $headerImage = '/wp-content/uploads/2016/03/sw01.jpg';
    
}


?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<header class="entry-header">
					<?php dti_cool_header($terms[0]->name, $headerImage); ?>
			</header><!-- .entry-header -->

	

		<?php
		if ( have_posts() ) :
		
			// Query for destinations under this category
			$args = array(
				'posts_per_page' => -1,
				'orderby' => 'date',
				'post_type' => 'destinations',
				'destination-category' => $terms[0]->name,
				'post_status' => 'publish'
		  );
			$show_destinations = get_posts( $args );
			// print_r($terms);
		?>
		
			<div class="vc_row wpb_row vc_row-fluid destination-group">
				<div class="wpb_column vc_column_container vc_col-sm-12">
					<div class="vc_column-inner ">
						<div class="wpb_wrapper">
							
							<p class="subtext"><?php echo $terms[0]->description; ?></p>
							
							<div class="destination-featured ult-ih-container ult-adjust-bottom-margin">
								<ul class="ult-ih-list ">
							
									<?php
										// Show each destination
										foreach ( $show_destinations as $destination ) {
										$thumb = wp_get_attachment_image_src( get_post_thumbnail_id($destination->ID), 'medium');
										$feat_image = $thumb[0];
										?>
										
										<li class="ult-ih-list-item">
											<a class="md-trigger" data-modal="modal-<?php echo($destination->ID); ?>">
												<div class="ult-ih-item ult-ih-effect6   ult-ih-scale_up   ult-ih-square">
													<div class="ult-ih-image-block">
														<div class="ult-ih-image" style="background-image: url('<?php echo $feat_image ?>');"></div>
														<div class="ult-ih-frontheading"><?php echo $destination-> post_title; ?></div>
													</div>
													<div class="ult-ih-info" style="background-image: url('<?php echo $feat_image ?>');">
														<div class="ult-ih-info-back">
															<div class="ult-ih-content">
																<div class="ult-ih-heading-block">
																	<h3 class="ult-ih-heading ult-responsive"><?php echo $destination-> post_title; ?></h3>
																</div>
																<div class="ult-ih-divider-block">
																	<span class="ult-ih-line"></span>
																</div>
																<div class="ult-ih-description-block">
																	<div class="ult-ih-description ult-responsive">
																		<p><?php the_field('destination_description', $destination -> ID); ?></p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</a>
										</li> <!-- .ult-ih-list-item -->
									
							
									<?php } // end foreach ?>
							
								</ul>
							</div>
							
							
							
							
						</div>
					</div>
				</div>
			</div>
			
			
			
			

		<?php else :

			get_template_part( 'template-parts/content', 'none' );

		endif; ?>
		
			<div class="cta-grey">
				<h2 class="script"><?php echo __('Interested in a Consultation?', 'dti'); ?></h2>
																		
				<div class=" ubtn-ctn-center">
					<a class="ubtn-link ult-adjust-bottom-margin ubtn-center ubtn-block red-btn" href="<?php echo esc_url( home_url( '/' ) . 'get-started' ); ?>">
						<button type="button" id="ubtn-6523" class="ubtn ult-adjust-bottom-margin ult-responsive ubtn-block ubtn-no-hover-bg  none ubtn-sep-icon ubtn-sep-icon-bottom-push  ubtn-center   tooltip-56e6c344baa89 ubtn-block" style="font-weight:normal;border:none;">
							<span class="ubtn-data ubtn-icon">
								<i class="Defaults-plane" style="font-size:32px;color:;"></i>
							</span>
							<span class="ubtn-hover"></span>
							<span class="ubtn-data ubtn-text ">Get Started</span>
						</button>
					</a>
				</div>
				
			</div>

		</main><!-- #main -->
	</div><!-- #primary -->
	
	
	
	<?php
		// Get modals now
		foreach ( $show_destinations as $destination ) {		
		$feat_image = wp_get_attachment_url( get_post_thumbnail_id($destination->ID) );
	?>
		<div class="md-modal md-effect-12" id="modal-<?php echo($destination->ID); ?>" style="background-image: url('<?php echo $feat_image; ?>');">
		
				<div class="md-content">
					<h2><?php echo $destination-> post_title; ?></h2>
							<?php
							$content = nl2br($destination-> post_content, false);
							$content = '<p>' . preg_replace('#(<br>[\r\n]+){2}#', "</p>\n\n<p>", $content) . '</p>';
							echo $content;
							?>
							<i class="icon-cancel md-close"></i>
				</div>

		</div>
		
	
	
	<?php } ?>
	
	<div class="md-overlay"></div><!-- the overlay element -->

<?php
get_footer();
