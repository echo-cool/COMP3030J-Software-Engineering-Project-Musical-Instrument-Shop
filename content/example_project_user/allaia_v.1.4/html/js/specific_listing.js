// Secondary nav sticky
	function sticktothetop() {
		var $positionSticky = $('#stick_here');
		var $elSticky = $('.elemento_stick');
		var window_top = $(window).scrollTop();
		var top = $positionSticky.offset().top;
		if (window_top > top) {
			$elSticky.addClass('sticky');
			$positionSticky.height($elSticky.outerHeight());
		} else {
			$elSticky.removeClass('sticky');
			$positionSticky.height(0);
		}
	}
	jQuery(function ($){
		$(window).scroll(sticktothetop);
		sticktothetop();
	});

// Sticky sidebar
		$('#sidebar_fixed').theiaStickySidebar({
		minWidth: 991,
		updateSidebarHeight: true,
		additionalMarginTop: 90
	});

// Prevent close dropdown filters
	$('.filters_listing_1 .dropdown-menu .filter_type ul').on('click',function(e) {
	    e.stopPropagation();
	});

//Filters version 2 mobile
	$('a.open_filters').on("click", function () {
		$('.filter_col').toggleClass('show');
		$('main').toggleClass('freeze');
		$('.layer').toggleClass('layer-is-visible');
	});

//Filters collapse
    var $headingFilters = $('.filter_type h4 a');
    $headingFilters.on('click', function () {
        $(this).toggleClass('opened');
    })
    $headingFilters.on('click', function () {
        $(this).toggleClass('closed');
    });