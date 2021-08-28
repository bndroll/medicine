$(function () {

	/* Smoth Scroll 
	-------------------------------------*/

	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 700);
	});

	/* Burger 
	-------------------------------------*/

	$("#burger").on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#menu").toggleClass("active");
	});

	/* Slider 
	-------------------------------------*/

	$('.slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: 'ease',
		infinite: false,
		waitForAnimate: false,
	});

});
