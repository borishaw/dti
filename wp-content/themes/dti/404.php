<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package DTI
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<section class="error-404 not-found">
				<header class="entry-header">
					<?php dti_cool_header("Oops! That page can't be found"); ?>
				</header><!-- .entry-header -->

				<div class="entry-content">
					
					<div class="vc_row wpb_row vc_row-fluid">
						<div class="wpb_column vc_column_container vc_col-sm-12">
							<div class="vc_column-inner ">
								<div class="wpb_wrapper">
									<p><?php esc_html_e( "You've arrived at a page that doesn't exist. Try one of the links above, or return to home.", "dti" ); ?></p>

									
									<div class=" ubtn-ctn-center">
										<a class="ubtn-link ult-adjust-bottom-margin ubtn-center ubtn-block red-btn" href="<?php echo esc_url( home_url( '/' ) ); ?>">
											<button type="button" id="ubtn-6523" class="ubtn ult-adjust-bottom-margin ult-responsive ubtn-block ubtn-no-hover-bg  none ubtn-sep-icon ubtn-sep-icon-bottom-push  ubtn-center   tooltip-56e6c344baa89 ubtn-block" style="font-weight:normal;border:none;">
												<span class="ubtn-data ubtn-icon">
													<i class="Defaults-plane" style="font-size:32px;"></i>
												</span>
												<span class="ubtn-hover"></span>
												<span class="ubtn-data ubtn-text ">Go To Home</span>
											</button>
										</a>
									</div>
									
								</div>
							</div>
						</div>
					</div>

			</section><!-- .error-404 -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
