(function($){
"use strict"; // Start of use strict
//Window Load
$(window).load(function(){ 
	//Toggle Box Cat
	$("body").on('click',function() {
		$('.list-cat-scrollbar').slideUp();
	});
	$('.box-cat-toggle').on('click',function(event){
		event.stopPropagation();
		event.preventDefault();
		$(this).next().slideToggle();
	});
	//Cat Drop Down
	$('body').on('click',function(){
		$('.content-cat-dropdown').slideUp(500);
	});
	$('.title-cat-dropdown').on('click',function(event){
		event.stopPropagation();
		$(this).next().slideToggle(500);
	}); 
	//Shop The Look
	$('.inner-item-shop-post').each( function() {
		$(this).hoverdir(); 
	});
	//Custom JS
	if($(window).width()<990 ){
		$('body').on('click',function(){
			$('.deals-off-content').slideUp(500);
		});
		$('.deals-title').on('click',function(event){
			event.stopPropagation();
			$(this).next().slideToggle(500);
		});
	}
	//Product Slider
	$('.content-product-slider .wrap-item').owlCarousel({
		items: 1,
		itemsCustom: [ 
		[0, 1], 
		[480, 1], 
		[768, 1], 
		[992, 1], 
		[1200, 1] 
		],
		pagination: false,
		navigation: false,
	});
	$('.prev-new-arrival').on('click', function(e){
		e.preventDefault();
		$('.wrap-item').trigger('owl.prev');
	});
	$('.next-new-arrival').on('click', function(e){
		e.preventDefault();
		$('.wrap-item').trigger('owl.next');
	});
	//Menu Responsive
	if($(window).width()<1025){
		$('body').on('click',function(){
			$('.main-nav>ul').slideUp();
		});
		$('.btn-mobile-menu').on('click',function(event){
			event.preventDefault();
			event.stopPropagation();
			$(this).prev().slideToggle();
		});
		$('.main-nav li.menu-item-has-children>a').on('click',function(event){ 
			event.preventDefault();
			event.stopPropagation();
			$(this).toggleClass('active');
			if($(this).hasClass('active')){
				event.preventDefault();
				$('.sub-menu').fadeOut(400);
				$(this).next().stop(true,true).fadeIn(400);
			}else{
				$('.sub-menu').fadeOut(400);
				$(this).next().stop(true,true).fadeOut(400);
			}
		});
	}
	//Select Order
	$('.open-item').click(function(){
		if($(this).hasClass('closetag')){
			$('.block-tag').animate({
				'height':'108px'  
			}, 500, function(){});
			$(this).addClass('opentag');
			$(this).removeClass('closetag');
		}else{
		$('.block-tag').animate({
			'height':'54px'  
		}, 500, function(){});
			$(this).addClass('closetag');
			$(this).removeClass('opentag');
		}
	})
	$(".selected-limiter").html($('.select-limiter li a.selected').html());
	$(".selected-order").html($('.select-order li a.selected').html()); 
	$('.selected-limiter').click(function(){
		$('.select-limiter').toggleClass('current-item');
	});
	$('.selected-order').click(function(){
		$('.select-order').toggleClass('current-item');
	});
	if($(window).width()>767){
		//Grid Text Box
		var height=$('.banner-grid-left .wrap-grid-adv-box').find('.grid-image-box').height();
		$('.grid-text-box').height(height);
		$('.grid-text-box').hover(function(){
		$('.grid-text-box.active').removeClass('active');},function(){
			$('.grid-text-box').last().addClass('active');
		});
	}
	//Banner Advert
	$('.banner-advert .wrap-item').owlCarousel({
		items: 1,
		itemsCustom: [ 
		[0,1], 
		[480,1], 
		[768,1], 
		[992,1], 
		[1200,1] 
		],
		pagination : true,
		navigation : false,
	});
	//News Scroll
	$('.item-left').last().find('.item-news').addClass('item-last-child');
	$('.item-right').last().find('.item-news').addClass('item-last-child');
	if($('.content-news-scroll').length>0){
		$(".content-news-scroll").mCustomScrollbar({
			scrollButtons:{
				enable:true
			}
		});
	}
	//Banner Slider
	$('.banner-slider .wrap-item').owlCarousel({
		items: 1,
		itemsCustom: [ 
		[0,1], 
		[480,1], 
		[768,1], 
		[992,1], 
		[1200,1] 
		],
		navigation : false,
	});
	//Sidebar brand Slider
	if($('.vertical-slider').length>0){
		$(".four-item .vertical-slider").jCarouselLite({
			vertical: true,
			visible:4,
			btnNext: ".four-item .jcaroul-control-nav .next",
			btnPrev: ".four-item .jcaroul-control-nav .prev",
		});
		$(".five-item .vertical-slider").jCarouselLite({
			vertical: true,
			visible:5,
			btnNext: ".five-item .jcaroul-control-nav .next",
			btnPrev: ".five-item .jcaroul-control-nav .prev",
		});
	}
	//New Arrival Slider
	$('.new-arrival-slider .wrap-item').owlCarousel({
		items: 1,
		itemsCustom: [ 
		[0,1], 
		[480,1], 
		[768,1], 
		[992,1], 
		[1200,1] 
		],
		navigation : false,
	});
	//Product Slider
	$('.single-slider .wrap-item').owlCarousel({
		items: 1,
		itemsCustom: [ 
		[0,1], 
		[480,1], 
		[768,1], 
		[992,1], 
		[1200,1] 
		],
		pagination : false,
		navigation : true,
	});
	//Content Tab Product Category
	$('.content-tab-product-category .wrap-item').owlCarousel({
		items: 3,
		itemsCustom: [ 
		[0,1], 
		[480,1], 
		[768,2], 
		[992,3], 
		[1200,3] 
		],
		pagination : false,
		navigation : true,
	});
	//Content Tab Product Category
	$('.content-tab-product .wrap-item').owlCarousel({
		items: 3,
		itemsCustom: [ 
		[0,1], 
		[480,2], 
		[768,3], 
		[992,4], 
		[1200,5] 
		],
		pagination : false,
		navigation : true,
	});
	//Brand Slider
	$('.list-brand .wrap-item').owlCarousel({
		items: 6,
		itemsCustom: [ 
		[0,2], 
		[480,3], 
		[768,4], 
		[992,5], 
		[1200,6] 
		],
		pagination : false,
		navigation : true,
	});
	//Mega Menu
	$('.mega-menu-list-product .wrap-item').owlCarousel({
		items: 5,
		itemsCustom: [ 
		[0, 2], 
		[480, 3], 
		[768, 4], 
		[992, 5], 
		[1200, 5] 
		],
		pagination: false,
		navigation: false,
	});
	$('.mega-menu-list-product .prev').on('click', function(e){
		e.preventDefault();
		$(this).parent().prev().trigger('owl.prev');
	});
	$('.mega-menu-list-product .next').on('click', function(e){
		e.preventDefault();
		$(this).parent().prev().trigger('owl.next');
	});
	$('.mega-menu-slider-brand .wrap-item').owlCarousel({
		items: 1,
		itemsCustom: [ 
		[0, 1], 
		[480, 1], 
		[768, 1], 
		[992, 1], 
		[1200, 1] 
		],
		pagination: false,
		navigation: false,
	});
	$('.mega-menu-slider-brand .prev').on('click', function(e){
		e.preventDefault();
		$(this).parent().prev().trigger('owl.prev');
	});
	$('.mega-menu-slider-brand .next').on('click', function(e){
		e.preventDefault();
		$(this).parent().prev().trigger('owl.next');
	});
	//Detail
	function init(){ 	
		var number = 5; 
		jQuery(".jCarouselLite").jCarouselLite({
			btnNext: ".more-views .next",
			btnPrev: ".more-views .prev",
			visible: number,
			start: 0,
			circular: true,
			speed: 300,
			vertical: true,
		});  
	}
	if($('.product-essential').length>0){
		init();
		$(".more-views .jCarouselLite .thumb-link").on('click',function(event) {
			event.preventDefault();
			$(".product-image-gallery img").attr("src", $(this).find('img').attr("src"));
		});
	}
	$('#upsell_pro .wrap_item').owlCarousel({
		items: 4,
		itemsCustom: [ 
		[0,1], 
		[480,2], 
		[768,2], 
		[992,3], 
		[1200,4] 
		],
		pagination: false,
		slideSpeed : 800,
		addClassActive: true,  
		afterAction: function (e) {
			if(this.$owlItems.length && this.options.items){
				$('#upsell_pro .navslider').show();
			}else{
				$('#upsell_pro .navslider').hide();
			}
		}            
	});
	$('#upsell_pro .navslider .prev').on('click', function(e){
		e.preventDefault();
		$('#upsell_pro .wrap_item').trigger('owl.prev');
	});
	$('#upsell_pro .navslider .next').on('click', function(e){
		e.preventDefault();
		$('#upsell_pro .wrap_item').trigger('owl.next');
	});
});
})(jQuery); // End of use strict