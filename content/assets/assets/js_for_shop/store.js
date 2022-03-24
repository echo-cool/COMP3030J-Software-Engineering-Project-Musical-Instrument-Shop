function swap(image) {
	"use strict";
    var widthwindow1 = $(window).width();    
    document.getElementById("image").src = image.href;
    if(widthwindow1 >= 1024){
	    $('#image').elevateZoom({
	        zoomType: "inner",
	        cursor: "crosshair",
	        zoomWindowFadeIn: 375,
	        zoomWindowFadeOut: 375
	    });
    };
}; 
function swap1(image) {
    document.getElementById("images-select").src = image.href;
}; 
function slider_owl(slider_id,visible1,visible2,visible3,visible4,visible) {   
    $(slider_id).owlCarousel({
		  navigation : true, // Show next and prev buttons   
	      slideSpeed : 500,
	      singleItem:true,
	      pagination : true,
	      autoplay: visible,
	      margin: 20,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
	      loop:true,
	      responsiveClass:true,
	      responsive:{
	        0:{
	          items:visible1,
	        },

	        480:{
	          items:visible2,
	          
	        },

	        767:{
	          items:visible3,
	        },

	       	1025:{
	          items:visible4,
	        }
	      }
	});   
};
$(document).ready(function() {
	"use strict";
	$(window).on('scroll', function () {
	var scrollTrigger = 200;
    var scrollTop = $(window).scrollTop();
    if (scrollTop > scrollTrigger) {
        $('.header-v1').addClass('labfixed');
    } else {
        $('.header-v1').removeClass('labfixed');
    }
	});
	if ($(".tp-banner").length) {
		$('.ver1 .tp-banner').revolution(
		{
			delay:9000,
			startwidth:1920,
			startheight:980,
			hideThumbs:10,
			fullWidth:"on",
			forceFullWidth:"on",
		});

		$('.ver2 .tp-banner').revolution(
		{
			delay:9000,
			startwidth:1170,
			startheight:600,
			hideThumbs:10,
			fullWidth:"on",
			forceFullWidth:"on",
		});
		
		$('.ver3 .tp-banner').revolution(
		{
			delay:9000,
			startwidth:1920,
			startheight:650,
			hideThumbs:10,
			fullWidth:"on",
			forceFullWidth:"on",
		});
		$('.ver4 .tp-banner').revolution(
		{
			delay:9000,
			startwidth:1920,
			startheight:790,
			hideThumbs:10,
			fullWidth:"on",
			forceFullWidth:"on",
		});
		$('.ver5 .tp-banner').revolution(
		{
			delay:9000,
			startwidth:570,
			startheight:445,
			hideThumbs:10,
			fullWidth:"on",
			forceFullWidth:"on",
		});
		$('.ver6 .tp-banner').revolution(
		{
			delay:9000,
			startwidth:1920,
			startheight:590,
			hideThumbs:10,
			fullWidth:"on",
			forceFullWidth:"on",
		});
		$('.ver7 .tp-banner').revolution(
		{
			delay:9000,
			startwidth:570,
			startheight:385,
			hideThumbs:10,
			fullWidth:"on",
			forceFullWidth:"on",
		});
		$(".tp-leftarrow").html('<i class="fa fa-long-arrow-left"></i>');
		$(".tp-rightarrow").html('<i class="fa fa-long-arrow-right"></i>');
	}
	// if ($(".product-img-box #image-view").length) {
	//     var widthwindow1 = $(window).width();
	//     if(widthwindow1 >= 1024){
	// 	    $('#image').elevateZoom({
	// 	        zoomType: "inner",
	// 	        cursor: "crosshair",
	// 	        zoomWindowFadeIn: 375,
	// 	        zoomWindowFadeOut: 375
	// 	    });
	//     };
	// };
	// Tabs
	$(".tab-content").hide();
	$(".tab-content:first").show().addClass("active"); 
	$("ul.tabs li:first").addClass("active");
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab-content").hide().removeClass("active");
		var activeTab = $(this).attr("rel");
		$("#"+activeTab).fadeIn(400).addClass("active");
	});	

	$(".tab-content1").hide();
	$(".tab-content1:first").show().addClass("active"); 
	$("ul.tabs1 li:first").addClass("active");
	$("ul.tabs1 li").click(function() {
		$("ul.tabs1 li").removeClass("active");
		$(this).addClass("active");
		$(".tab-content1").hide().removeClass("active");
		var activeTab = $(this).attr("rel");
		$("#"+activeTab).fadeIn(400).addClass("active");
	});	
	// End tabs
	$(".products.grid_full .product").each(function(){
		$(this).find(".product-images").wrap('<div class="wrap-product-images"></div>');
		$(this).find(".wrap-product-images").append($(this).find(".add-to-cart"));
		$(this).find(".wrap-product-images").append($(this).find(".action"));
	});
	// Slider products
	var owl = $(".product-tab-content");
	var owl2 = $(".product-tab-content1");
	var owl3 = $("#secondary .sidebar-slider");
	$(window).on("orientationchange load resize",function() {
		owl.css({"width": $(".container").width() +"px"});
		owl2.css({"width": $("#primary").width() +"px"});
		owl3.css({"width": $("#secondary").width() +"px"});
	});
	owl.css({"width": $(".container").width()+"px"});
	owl2.css({"width": $("#primary").width() +"px"});
	owl3.css({"width": $("#secondary").width() +"px"});
	var owl1 = $(".blog-post-inner");
	$(window).on("orientationchange load resize",function() {
		owl1.css({"width": $(".container").width()+"px"});
	});
	owl1.css({"width": $(".container").width() +"px"});

	// Slider
	slider_owl(".product-tab-content",1,2,3,4,false);
	slider_owl(".feature-product-bar .product-tab-content1",1,2,2,3,false);
	slider_owl(".new-product-bar .product-tab-content1",1,2,2,3,false);
	slider_owl(".home-v5-slider .product-tab-content1",1,2,3,4,false);
	slider_owl(".blog-post-inner",1,2,2,3,false);
	slider_owl(".blog-post-inner",1,2,2,3,false);
	slider_owl(".slider-daily .products",1,2,2,2,false);
	slider_owl(".slider-hermes-collection",1,2,2,2,false);
	slider_owl(".wrap-slider-testti",1,2,1,1,2000);
	slider_owl(".wrap-slider.new-arrivals",1,2,1,1,false);
	slider_owl(".wrap-slider.bestseller",1,2,1,1,false);
	slider_owl(".wrap-slider.featured",1,2,1,1,false);
	slider_owl(".slider-brand",2,3,4,6,false);

	// Add Class dropdown-menu
	var menu_top_header3 = $(".header-v3 .menu-top");
	var menu_level1 = $("ul.menu-level-1");
	var mega_menu = $(".mega-menu");
	var mega_menu_home6 = $(".mega-menu.menu-v6");
	var mega_menu_home7 = $(".mega-menu.menu-v7");
	$(window).on("orientationchange load resize",function() {
		var widthwindow = $(window).width();
		if(widthwindow > 1024){
			menu_top_header3.insertAfter($(".header-v3 .search.dropdown"));
			$(".mega-menu .sub-menu").addClass("dropdown-menu");
			$(".header-v3 .menu-top li.level-1 .menu-level2").addClass("dropdown-menu");
			menu_level1.addClass("dropdown-menu");
			mega_menu.insertAfter($(".logo"));
			mega_menu_home6.insertAfter($(".header-top .inner-container .col-md-12"));
			mega_menu_home7.insertAfter($(".header-top"));
		}else{
			
			$(".header-v3 .menu-top li.level-1 .menu-level2").removeClass("dropdown-menu");
			$(".mega-menu .sub-menu").removeClass("dropdown-menu");
			menu_top_header3.insertAfter($(".header-v3 .header-top"));
			menu_level1.removeClass("dropdown-menu");
			mega_menu.insertAfter("#header .header-top");
			mega_menu_home6.insertAfter($(".header-top"));
			mega_menu_home7.insertAfter($(".header-top"));
		}
		$("#googleMap").css({"height": $(".contact-form").innerHeight()+"px"});
	});
	$(window).on("orientationchange load resize",function() {
		var widthwindow = $(window).width();
		if(widthwindow > 767){
			$(".header-only-v4 .search.dropdown").insertBefore($(".header-only-v4 .topbar-right"));
			$(".header-only-v4 .cart.dropdown").insertBefore($(".header-only-v4 .topbar-right"));
		}else{
			$(".header-only-v4 .cart.dropdown").insertBefore($(".header-only-v4 .header-top .logo"));
			$(".header-only-v4 .search.dropdown").insertBefore($(".header-only-v4 .header-top .logo"));
		}
	});
	// click to zoom
	$(".product-img-box .thumb-content li:first-child").addClass("active");
	$(".product-img-box .thumb-content li").click(function () {
		$(".product-img-box .thumb-content li").removeClass("active");
		$(this).addClass("active");
	});


	$('.owl-controls .owl-prev').html('<i class="fa fa-long-arrow-left"></i>');
	$('.owl-controls .owl-next').html('<i class="fa fa-long-arrow-right"></i>');
	$('.slider-product-home6 .owl-controls .owl-prev').html('<i class="fa fa-angle-left"></i>');
	$('.slider-product-home6 .owl-controls .owl-next').html('<i class="fa fa-angle-right"></i>');
	$('.blog-post-container-home6 .owl-controls .owl-prev').html('<i class="fa fa-angle-left"></i>');
	$('.blog-post-container-home6 .owl-controls .owl-next').html('<i class="fa fa-angle-right"></i>');
	$('.brand-container .owl-controls .owl-prev').html('<i class="fa fa-angle-left"></i>');
	$('.brand-container .owl-controls .owl-next').html('<i class="fa fa-angle-right"></i>');
	$('.bottom-home1 .owl-controls .owl-prev').html('<i class="fa fa-angle-left"></i>');
	$('.bottom-home1 .owl-controls .owl-next').html('<i class="fa fa-angle-right"></i>');
	// Click to Hover
	$('.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).fadeIn(200).toggleClass("hover");
	  $(this).toggleClass("active");
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).fadeOut(200).toggleClass("hover");
	  $(this).toggleClass("active");
	});
	
	// Click Icon Menu Mobile
	$(".icon-menu-mobile").click(function(){
		$(".navbar-nav").slideToggle();
		$(this).toggleClass("active");
	});
	$(".header-v3 .icon-menu-mobile").click(function(){
		menu_top_header3.slideToggle();
	});
	$('li:has(ul)').addClass('hassub');
	$('li:has(img)').addClass('images');
	$(".mega-menu ul li a").after('<i class="fa fa-plus"></i>');

	$(".ordering .list").click(function(){
		$(this).toggleClass("active");
		$(".products").addClass("list-item");
		$(".ordering .col").removeClass("active");
		$(".products.grid_full .product").each(function(){
			$(this).append($(this).find(".add-to-cart"));
			$(this).append($(this).find(".action"));
		});
	});
	$(".ordering .col").click(function(){
		$(this).toggleClass("active");
		$(".products").removeClass("list-item");
		$(".ordering .list").removeClass("active");
		$(".products.grid_full .product").each(function(){
			$(this).find(".wrap-product-images").append($(this).find(".add-to-cart"));
			$(this).find(".wrap-product-images").append($(this).find(".action"));
		});
	});

	$("ul.product-categories li.hassub a").after('<i class="fa fa-plus"></i>');
	$("ul li.hassub i").click(function(){
		$(this).next().slideToggle();
		$(this).toggleClass("active");
		$(this).parent().toggleClass("active");
	});
	$("#header .fa-bars").click(function(){
		$(".megamenu-v2").addClass("show-ef");
	});
	
	$(".megamenu-v2 .fa-times").click(function(){
		$(".megamenu-v2").removeClass("show-ef");
	});

	// googleMap
	if ($("#googleMap").length) {

		function initialize() 
            {
                var mapOptions = {
                    zoom: 15,
                    center: new google.maps.LatLng(21.031714,105.7628504),
                    mapTypeControl: true, // Hiển thị mapType
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                    },
                    zoomControl: false,
				  scaleControl: false,
				  scrollwheel: false,
				  disableDoubleClickZoom: true,
                };
                var map = new google.maps.Map(document.getElementById('googleMap'),
                        mapOptions);
            }
 
            google.maps.event.addDomListener(window, 'load', initialize);
	};
	// End google map
	/* event more-views click see big image. */
	if ($('#back-to-top').length) {
		$(window).on('scroll', function () {
	    });
	    $('#back-to-top').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });
	};
});