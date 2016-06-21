<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package DTI
 */

 // If a logged-in user, generate help modal
if(is_user_logged_in()): ?>

	<div class="md-modal md-effect-12" id="modal-help">
		
		<div class="md-content">
			<h2>Help</h2>
				<?php
					$helpPost = get_post(271); 
					$helpContent = apply_filters('the_content', $helpPost ->post_content); 
					echo $helpContent;  
					echo FrmFormsController::show_form(12, $key = 'helpcontact', $title=false, $description=false);
				?>
			<i class="icon-cancel md-close"></i>
		</div>
	
	</div>
	
	<div class="md-overlay"></div><!-- the overlay element -->
<?php endif; ?>


	</main><!-- #content -->

	<?php
		// Only include the copyright information on public-facing pages
		if( !( is_singular('trip') || is_page('registration') || is_page('points') || is_page('signup') || is_page('dashboard') ) ) {
	?>
	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<span class="copyright">Copyright &copy;<?php echo date('Y'); ?> DT International Inc.</span> <a href="<?php echo esc_url( __( 'http://www.ankitdesigns.com', 'dti' ) ); ?>"><?php printf( esc_html__( 'Designed &amp; Developed by Ankit Designs', 'dti' ) ); ?></a>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
	<?php } ?>
	
	
	<div id="backtotop">
		<i class="fa fa-angle-up"></i>
	</div> <!-- #backtotop -->
	
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
