// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require skrollr
//= require bootstrap-sprockets
jQuery(document).ready(function() {

	// define variables
	var navOffset, scrollPos = 0;

	// add utility wrapper elements for positioning
	jQuery("nav").wrap('<div class="nav-placeholder"></div>');
	jQuery("nav").wrapInner('<div class="nav-inner"></div>');
	jQuery(".nav-inner").wrapInner('<div class="nav-inner-most"></div>');

	// function to run on page load and window resize
	function stickyUtility() {

		// only update navOffset if it is not currently using fixed position
		if (!jQuery("nav").hasClass("fixed")) {
			navOffset = jQuery("nav").offset().top;
		}

		// apply matching height to nav wrapper div to avoid awkward content jumps
		jQuery(".nav-placeholder").height(jQuery("nav").outerHeight());

	} // end stickyUtility function

	// run on page load
	stickyUtility();

	// run on window resize
	jQuery(window).resize(function() {
		stickyUtility();
	});

	// run on scroll event
	jQuery(window).scroll(function() {

		scrollPos = jQuery(window).scrollTop();

		if (scrollPos >= navOffset) {
			jQuery("nav").addClass("fixed");
		} else {
			jQuery("nav").removeClass("fixed");
		}

	});

});
