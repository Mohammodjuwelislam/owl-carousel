(function ($) {
"use strict";

    //  slider-active
	$('.slider-active').owlCarousel({
		loop:true,
		nav:true,
		navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
		dots:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});


    // protfolio-active
	$('.protfolio-active').owlCarousel({
		loop:true,
		nav:true,
		margin:10,
		navText: ['<i class="fa-solid fa-left-long"></i>', '<i class="fa-solid fa-right-long"></i>'],
		dots:true,
		responsive:{
			0:{
				items:3

			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});


	// best-design
	$('.best-slider-active').owlCarousel({
		loop:true,
		nav:false,
		margin:10,
		autoplay:true,
		items:1,
		autoplaySpeed:true,
		responsive:{
			0:{
				items:3

			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});


})(jQuery);