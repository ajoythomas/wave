/**
	Enhenyero Main Java Script
*/

/* Cookie functions */
function createCookie(name,value,days) {

	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name) {

	var nameEQ = name + "=";
	var ca = document.cookie.split(';');

	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function eraseCookie(name) {
	createCookie(name,"",-1);
}

(function($) {

	"use strict";

	/* - Scrolling Navigation */
    $('.position-details a').bind('click', function(event) {

        var $anchor = $(this);
        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 100 }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

	/* ## Style Switcher */
	function swapStyleSheet(sheet) {
		document.getElementById('pagestyle').setAttribute('href', sheet);
	}

	function portfolio_masonry() {
		
		if( $('#itemsWork').length ) {
			/* Portfolio Isotope Filter */
			var $container = $('#itemsWork');
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
				
			$('.cat a').on("click", function() {
				$('.cat .active').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
			
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});
				return false;
			});
		}		
	}

	$('.ddl-switch').on('click', function() {

	    var li = $(this).parent();

	    if ( li.hasClass('dm-active') || li.find('.dm-active').length !== 0 || li.find('.dropdown-menu').is(':visible') ) {
			li.removeClass('dm-active');
			li.children().find('.dm-active').removeClass('dm-active');
			li.children('.dropdown-menu').slideUp();	
	    }
		else {
			li.addClass('dm-active');
			li.children('.dropdown-menu').slideDown();
	    }
	});

	/* Event - Document Ready */
	$(document).ready( function($) {

		/* - Style Switcher */
		if( $(".color-scheme").length ) {

			$(".corner").on("click", function() {
				$('#customizer').toggleClass('s-open');
			});

			var switcher_skins = $('.color-scheme > li > a');
			var switcher_link = $('#enhenyerowp-main-color-css');

			switcher_skins.each(function(i) {
				var color = $(this).attr('data-rel');      
			});  

			switcher_skins.on("click", function(e) {

				var color = $(this).attr('data-rel');
				var skins;

				if (color == "dark-blue") {
					switcher_link.attr('href', templateUrl + "/css/style_dark-blue.css");
					var atrrHref = switcher_link.attr('href');       
				}

				if (color == "green") {
					switcher_link.attr('href', templateUrl + "/css/style_green.css");
					var atrrHref = switcher_link.attr('href');        
				}

				if (color == "blue") {
					switcher_link.attr('href', templateUrl + "/css/style_blue.css");
					var atrrHref = switcher_link.attr('href');        
				}

				if (color == "purple") {
					switcher_link.attr('href', templateUrl + "/css/style_purple.css");
					var atrrHref = switcher_link.attr('href');
				}

				if (color == "yellow") {
					switcher_link.attr('href', templateUrl + "/css/style_yellow.css");
					var atrrHref = switcher_link.attr('href');
				}

				if (color == "red") {
					switcher_link.attr('href', templateUrl + "/css/style_red.css");
					var atrrHref = switcher_link.attr('href');
				}

				if (color == "orange") {
					switcher_link.attr('href', templateUrl + "/css/style_orange.css");
					var atrrHref = switcher_link.attr('href');
				}

				if (color == "light-green") {
					switcher_link.attr('href', templateUrl + "/css/style_light-green.css");
					var atrrHref = switcher_link.attr('href');
				}
			});
		}

		var stickyNavTop = $('#sticky-anchor').offset().top;

		var stickyNav = function() {
			var scrollTop = $(window).scrollTop();

			if ( scrollTop > stickyNavTop ) {
				$('#main-menu').addClass('navbar-fixed-top animated fadeInDown');
			} else {
				$('#main-menu').removeClass('navbar-fixed-top animated fadeInDown'); 
			}
		};
		stickyNav();

		/* Event - Window Scroll */
		$(window).scroll(function() {
			stickyNav();
		});/* Event - Window Scroll /- */

		/* ## Portfolio Initialization */
		setTimeout(function(){
			portfolio_masonry();
		}, 1500);

	}); /* Event - Document Ready */

	/* Event - Window Resize /- */
	$(window).resize(function() {

		/* ## Portfolio Initialization */
		setTimeout(function(){
			portfolio_masonry();
		}, 1500);

	});
	/* Event - Window Resize /- */

	if( $('#portfolio-items').length ) {

		/* Portfolio Carousel */
		var owl = $("#portfolio-items");
		owl.owlCarousel({
			itemsCustom : [
				[0, 1],
				[450, 1],
				[660, 2],
				[700, 3],
				[1200, 4],
				[1600, 4]
			],
			navigation : true,
			navigationText: ["<i class='fa fa-chevron-circle-left'></i>","<i class='fa fa-chevron-circle-right'></i>"],
			pagination: true,
		});
	}

	if( $('#testimonial').length ) {

		/* Testimonial Slider */
		$("#testimonial").owlCarousel({
			navigation : false, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
			autoHeight : true
		});
	}

	if( $('#popup').length ) {
		$('#popup a').nivoLightbox({
			effect: 'slideDown',
			keyboardNav: true
		});
	}

	if( $('.social-share').length ) {

		$('.social-share > li > a', this).bind('click', function(e) {

			e.preventDefault();
			e.stopPropagation();

			var data_action = $(this).attr('data-action');
			var data_title = $(this).attr('data-title');
			var data_url = $(this).attr('data-url');

			if( data_action == 'facebook' ) {		
				window.open('http://www.facebook.com/share.php?u='+encodeURIComponent(data_url)+'&title='+encodeURIComponent(data_title),'sharer','toolbar=0,status=0,width=580,height=325');
			}
			else if( data_action == 'twitter' ) {
				window.open('http://twitter.com/intent/tweet?status='+encodeURIComponent(data_url)+'+'+encodeURIComponent(data_title),'sharer','toolbar=0,status=0,width=580,height=325');
			}
			else if( data_action == 'pinterest' ) {
				window.open('http://pinterest.com/pin/create/button/?url='+encodeURIComponent(data_url)+'&media=http://cdn2.wpbeginner.com/wp-content/uploads/2013/12/siteground-74x74.jpg&description='+encodeURIComponent(data_title),'sharer','toolbar=0,status=0,width=580,height=325');
			}
			else if( data_action == 'google-plus' ) {
				window.open('https://plus.google.com/share?url='+encodeURIComponent(data_url),'sharer','toolbar=0,status=0,width=580,height=325');
			}
			else if( data_action == 'linkedin' ) {
				window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(data_url)+'&title='+encodeURIComponent(data_title)+'&source='+encodeURIComponent(data_url),'sharer','toolbar=0,status=0,width=580,height=325');
			}
			else if( data_action == 'digg' ) {
				window.open('http://digg.com/submit?url='+encodeURIComponent(data_url)+'&amp;title='+encodeURIComponent(data_title),'sharer','toolbar=0,status=0,width=580,height=325');
			}
			else if( data_action == 'reddit' ) {
				window.open('http://www.reddit.com/submit?url='+encodeURIComponent(data_url)+'&amp;title='+encodeURIComponent(data_title),'sharer','toolbar=0,status=0,width=580,height=325');
			}
		});
	}
})(jQuery);