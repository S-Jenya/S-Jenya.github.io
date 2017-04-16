$(window).scroll(function() {	
	var st = $(this).scrollTop();

	$(".header_text").css({
		"transform" : "translate(0%, " + st + "%"
	});

	$(".sec_2 img").css({
		"transform" : "translate(0%, " + st/20 + "%"
	});
});

	$(".item").magnificPopup({
		type: 'image', 
		
		// Для пролистывания фотографий
		/*gallery: {
		enabled: true
		}, */

		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}

	});

//Скрипт для галереи 
