
var polyfilter_scriptpath = 'http://localhost:8888/ankit/dti/wp-content/themes/dti/js/destinations/';


jQuery(document).ready(function($) {
	
	$(".dti-temp-loader").hide();
	
	$('.drawer').drawer({
		iscroll: {
			// Configuring the iScroll
			// https://github.com/cubiq/iscroll#configuring-the-iscroll
			mouseWheel: true,
			preventDefault: false
		 }
	});
	
	$('.drawer-menu-btn[data-modal="modal-help"]').click(function(){
		console.log('Fire');
		$('.drawer').drawer('close');	
	});
	
	// Back button functionality
   $("#backtotop").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	 }); 
	 
	 // Scroll-triggered functions
	 $(document).scroll(function() {
		var y = $(this).scrollTop();
		
		// Back button reveal
		if (y > 500) {
		  $('#backtotop').fadeIn('slow');
		} else {
		  $('#backtotop').fadeOut('slow');
		}
		
		// Shrink nav
		if (y > 50) {
		  $('.site-header').addClass('nav-shrink');
		} else {
		  $('.site-header').removeClass('nav-shrink');
		}
		
	 });
	 
	 // Owl Carousel on Trip pages
	 if ($('.trip-slider').length) {
		$('.trip-slider').owlCarousel({
			singleItem:true,
			autoPlay: true,
			navigation: true,
			navigationText: false,
			pagination: false,
			transitionStyle : "fade",
			itemsScaleUp: true,
		});
	 }
	 if ($('.accommodations-gallery').length) {
		$('.accommodations-gallery').owlCarousel({
			singleItem:true,
			autoPlay: true,
			pagination: true,
			itemsScaleUp: true,
			navigation: true,
			navigationText: false
		});
	 }
	 
	 
	 // Sticky trip sidebar
	 if ($(".trip-sidebar").length) {
		$(".trip-sidebar").sticky({topSpacing:45});
		
		$('#register-cta').click(function(){
			$('#register-link').tab('show');	
		});
		
		var oldTab = '';
		var activeTab = '';
		// On tab select
		$('a[data-toggle="tab"]').click(function(e){
			// Animate back to top
			
			// Stop/start carousel
			activeTab = 'tab-' + $(e.target).attr('aria-controls');
			if (activeTab == 'tab-about') {
				$('.trip-slider').trigger('owl.play',5000);
			} else {
				$('.trip-slider').trigger('owl.stop');
			}
		});
		$('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
			$("html, body").animate({ scrollTop: 0 }, 'normal');
		});
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			// Change class for the active tab
			// This will animate the carousel height
			oldTab = 'tab-' + $(e.relatedTarget).attr('aria-controls');
			activeTab = 'tab-' + $(e.target).attr('aria-controls');
			$('#main').addClass(activeTab);
			$('#main').removeClass(oldTab);
		 });
		
	 }
	 
	 // If a modal is open, add modal-open class to body
	 $('.md-trigger').click(function(){
			$('body').addClass('modal-open');
	});
	 
	 $('.md-close').click(function(){
			$('body').removeClass('modal-open');
	});


	 if($('table').length) {
        
		  // Qualifications Table & Other Tables for Mobile
			var headertext = [],
		  headers = document.querySelectorAll("table thead td"),
		  tablerows = document.querySelectorAll("table tr"),
		  tablebody = document.querySelector("table tbody");
		  
		  for(var i = 0; i < headers.length; i++) {
			 var current = headers[i];
			 headertext.push(current.textContent.replace(/\r?\n|\r/,""));
		  } 
		  for (var i = 0, row; row = tablebody.rows[i]; i++) {
			 for (var j = 0, col; col = row.cells[j]; j++) {
				col.setAttribute("data-th", headertext[j]);
			 } 
		  }
		  
    }
	 
	 
	 
	 
});

	 
	 