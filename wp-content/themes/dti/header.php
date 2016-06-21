<?php
date_default_timezone_set('America/Los_Angeles');

/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package DTI
 */



?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php
wp_head();

// Variables
$points = get_field('qualification_points', 'user_' . get_current_user_id());
$args = array(
	'post_type' => 'trip',
	'posts_per_page' => -1,
	'post_status' => 'publish',
	);
$loop = new WP_Query( $args ); // Trip loop
$currentUser = wp_get_current_user();
?>
</head>

<body <?php body_class('drawer drawer--left'); ?>>

<div class="dti-temp-loader"></div>

<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'dti' ); ?></a>

	<header class="site-header" role="banner">
		<div class="wrapper">
			<button type="button" class="drawer-toggle drawer-hamburger">
			  <span class="sr-only">toggle navigation</span>
			  <span class="drawer-hamburger-icon"></span>
			</button>
			<div class="logo">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
					<img src="<?php echo get_template_directory_uri(); ?>/img/brand/logo-white-sm.png" alt="DTI International" />
				</a>
			</div><!-- .logo -->
			<?php
				// Trip page navigation
				if(is_singular('trip') || is_page('registration') || is_page('points') || is_page('signup')): ?>
				
					<nav class="main-navigation" role="navigation">
						<div class="menu-front-menu-home-container">
							<ul id="primary-menu" class="menu">
								<li id="menu-item-dashboard" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11">
									<a href="<?php echo esc_url( home_url( '/' ) . 'dashboard' ); ?>">Dashboard</a>
								</li>
								<?php
									// Cycle through trips to see which ones should be added to nav
									if ($loop->have_posts()) : while ($loop->have_posts()) : $loop->the_post();									
										$tripCompany = get_field('trip_company', false, false);
										if($tripCompany == $currentUser->ID) { ?>
											<li id="menu-item-<?php echo get_the_id(); ?>" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-<?php echo get_the_id(); ?>">
												<a href="<?php echo get_permalink(); ?>">
													<?php the_field('location'); ?>
												</a>
											</li>
										<?php }
									endwhile;
									endif;
									$loop->rewind_posts();

									if($points) { ?>
										<li id="menu-item-points" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11">
											<a href="<?php echo esc_url( home_url( '/' ) . 'points' ); ?>"><?php echo __('Qualification Details', 'dti'); ?></a>
										</li>
									<?php }
								?>
								
							</ul>
						</div>
					</nav>
					
					<!-- Mobile Menu -->
					<nav class="drawer-nav" role="navigation">
						<div class="drawer-inner">
							<div class="drawer-menu-user">
								<i class='icon-user'></i>
								<?php
								echo(welcome_user());
								if(is_user_logged_in()) {
								?>
									<div class="drawer-menu-btn md-trigger" data-modal="modal-help"><?php echo __('Get Help', 'dti'); ?></div>
								<?php } ?>
								<div class="drawer-menu-btn"><?php wp_loginout(); ?></div>
							</div>
							
							<ul id="drawer-menu" class="drawer-menu">
								<li id="menu-item-dashboard" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11">
									<a href="<?php echo esc_url( home_url( '/' ) . 'dashboard' ); ?>">Dashboard</a>
								</li>
								<?php
									 if ($loop->have_posts()) : while ($loop->have_posts()) : $loop->the_post();
										$tripCompany = get_field('trip_company', false, false);
										if($tripCompany == $currentUser->ID) { ?>
											<li id="menu-item-<?php echo get_the_id(); ?>" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-<?php echo get_the_id(); ?>">
												<a href="<?php echo get_permalink(); ?>">
													<?php the_field('location'); ?>
												</a>
											</li>
										<?php }
									endwhile;
									endif;
									
									if($points) { ?>
										<li id="menu-item-points" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11">
											<a href="<?php echo esc_url( home_url( '/' ) . 'points' ); ?>"><?php echo __('Qualification Details', 'dti'); ?></a>
										</li>
									<?php }
								?>
								
							</ul>
						</div>
					</nav>
					
				
				<?php // Dashboard navigation (NULL)
				elseif(the_slug()=='dashboard'): ?>
				
				
				<!-- Mobile Menu -->
				<nav class="drawer-nav" role="navigation">
					<div class="drawer-inner">
						<div class="drawer-menu-user">
							<i class='icon-user'></i>
							<?php
							echo(welcome_user());
							if(is_user_logged_in()) {
							?>
								<div class="drawer-menu-btn md-trigger" data-modal="modal-help"><?php echo __('Get Help', 'dti'); ?></div>
							<?php } ?>
							<div class="drawer-menu-btn"><?php wp_loginout(); ?></div>
						</div>
						
						<ul id="drawer-menu" class="drawer-menu">
							<li id="menu-item-dashboard" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11">
								<a href="<?php echo esc_url( home_url( '/' ) . 'dashboard' ); ?>">Dashboard</a>
							</li>
							<?php
								 if ($loop->have_posts()) : while ($loop->have_posts()) : $loop->the_post();
									$tripCompany = get_field('trip_company', false, false);
									if($tripCompany == $currentUser->ID) { ?>
										<li id="menu-item-<?php echo get_the_id(); ?>" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-<?php echo get_the_id(); ?>">
											<a href="<?php echo get_permalink(); ?>">
												<?php the_field('location'); ?>
											</a>
										</li>
									<?php }
								endwhile;
								endif;
								
								if($points) { ?>
									<li id="menu-item-points" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11">
										<a href="<?php echo esc_url( home_url( '/' ) . 'points' ); ?>"><?php echo __('Qualification Details', 'dti'); ?></a>
									</li>
								<?php }
							?>
							
						</ul>
					</div>
				</nav>
				
			<?php
				// Main navigation
				// If user isn't on the dashboard or trip pages
				else:
			?>
				<nav class="main-navigation" role="navigation">
					<?php
						// If user is on the home page, switch to the menu with the one-page anchor
						if (is_front_page()) {
							wp_nav_menu( array( 'theme_location' => 'front-home', 'menu_id' => 'primary-menu' ) );
						} else {
							wp_nav_menu( array( 'theme_location' => 'front', 'menu_id' => 'primary-menu' ) );
						}
					?>
				</nav>
				
				<!-- Mobile Menu -->
				<nav class="drawer-nav" role="navigation">
					<div class="drawer-inner">
						<div class="drawer-menu-user">
							<i class='icon-user'></i>
							<?php
							echo(welcome_user());
							if(is_user_logged_in()) {
							?>
								<div class="drawer-menu-btn md-trigger" data-modal="modal-help"><?php echo __('Get Help', 'dti'); ?></div>
							<?php } ?>
							<div class="drawer-menu-btn"><?php wp_loginout(); ?></div>
						</div>
						<?php
							if (is_front_page()) {
								wp_nav_menu( array(
									'theme_location' => 'front-home',
									'container' => null,
									'menu_class' => 'drawer-menu',
									'menu_id' => 'drawer-menu',
								) );
							} else {
								wp_nav_menu( array(
									'theme_location' => 'front',
									'container' => null,
									'menu_class' => 'drawer-menu',
									'menu_id' => 'drawer-menu',
								) );
							}
						?>
					</div>
				
				</nav>
			
			<?php endif; ?>
			<div class="member-login">
				<?php if(is_user_logged_in()) {
					echo(welcome_user());
					echo('<i id="faq-icon" class="fa fa-question-circle md-trigger" data-modal="modal-help"></i>');
				} ?>
				<div class="login-btn"><?php wp_loginout(); ?></div>
			</div>
		</div>
		
	</header><!-- .site-header -->

	<main role="main" id="content" class="site-content">
