var changeSlide = 4; // mobile -1, desktop + 1
// Resize and refresh page. slider-two slideBy bug remove
var slide = changeSlide;
if ($(window).width() < 600) {
	var slide = changeSlide;
	slide--;
} else if ($(window).width() > 999) {
	var slide = changeSlide;
	slide++;
} else {
	var slide = changeSlide;
}
$(document).ready(function () {
	$(".main").owlCarousel({
		nav: true,
		items: 1
	});
	$(".thumbs").owlCarousel({
		nav: true,
		margin: 15,
		mouseDrag: false,
		touchDrag: true,
		responsive: {
			0: {
				items: changeSlide - 1,
				slideBy: changeSlide - 1
			},
			600: {
				items: changeSlide,
				slideBy: changeSlide
			},
			1000: {
				items: changeSlide + 1,
				slideBy: changeSlide + 1
			}
		}
	});
	var owl = $(".main");
	owl.owlCarousel();
	owl.on("translated.owl.carousel", function (event) {
		$(".right").removeClass("nonr");
		$(".left").removeClass("nonl");
		if ($(".main .owl-next").is(".disabled")) {
			$(".slider .right").addClass("nonr");
		}
		if ($(".main .owl-prev").is(".disabled")) {
			$(".slider .left").addClass("nonl");
		}
		$(".slider-two .item").removeClass("active");
		var c = $(".slider .owl-item.active").index();
		$(".slider-two .item")
			.eq(c)
			.addClass("active");
		var d = Math.ceil((c + 1) / slide) - 1;
		$(".slider-two .owl-dots .owl-dot")
			.eq(d)
			.trigger("click");
	});
	$(".right").click(function () {
		$(".slider .owl-next").trigger("click");
	});
	$(".left").click(function () {
		$(".slider .owl-prev").trigger("click");
	});
	$(".slider-two .item").click(function () {
		var b = $(".item").index(this);
		$(".slider .owl-dots .owl-dot")
			.eq(b)
			.trigger("click");
		$(".slider-two .item").removeClass("active");
		$(this).addClass("active");
	});
	var owl2 = $(".thumbs");
	owl2.owlCarousel();
	owl2.on("translated.owl.carousel", function (event) {
		$(".right-t").removeClass("nonr-t");
		$(".left-t").removeClass("nonl-t");
		if ($(".two .owl-next").is(".disabled")) {
			$(".slider-two .right-t").addClass("nonr-t");
		}
		if ($(".thumbs .owl-prev").is(".disabled")) {
			$(".slider-two .left-t").addClass("nonl-t");
		}
	});
	$(".right-t").click(function () {
		$(".slider-two .owl-next").trigger("click");
	});
	$(".left-t").click(function () {
		$(".slider-two .owl-prev").trigger("click");
	});
});