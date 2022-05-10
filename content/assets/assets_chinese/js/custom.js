/*==========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Loader JS
3.Wow Animation JS
4.Banner Slider JS
5.Tour Offer Slider JS
6.Tour Slider JS
7.Testimonial Slider JS
8.Instagram Slider JS
9.Partners Slider JS
10.Tour Gallery Slider JS
11.About Progress Bar JS
12.Responsive Slider JS
13.Counter JS
14.Sticky Header JS
15.Scroll To Top JS
16.Toogle Menu JS
17.DropDown Menu JS
18.Search Bar JS
==========*/


$(document).ready(function ($) {

    // Whole Script Strict Mode Syntax
    "use strict";

    $(window).ready(function () {
        // Loader JS Start
        $('.loader-box').fadeOut();
        // Loader JS End
        $('body').removeClass('fixed');
        // Wow Animation JS Start
        new WOW().init();
        // Wow Animation JS Start
    });

    // Banner Slider JS Start
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        prevArrow: '<button class="slide-arrow prev-arrow"><span>Prev</span></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><span>Next</span></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: false,
                arrows: false,
            }
        }]
    });
    // Banner Slider JS End

    // Tour Offer Slider JS Start
    $('.tour-offer-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><span>Prev</span></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><span>Next</span></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                slidesToShow: 2,
            }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
    // Tour Offer Slider JS End

    // Tour Slider JS Start
    $('.tour-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><span>Prev</span></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><span>Next</span></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow: 2,
            }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
    // Tour Slider JS End

    // Testimonial Slider JS Start
    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false,
            }
        }]
    });
    // Testimonial Slider JS End

    // Instagram Slider JS Start
    $('.instagram-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 3,
            }
        },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 401,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
    // Instagram Slider JS End

    // Partners Slider JS Start
    $('.partners-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 3,
            }
        },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 401,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
    // Partners Slider JS End

    // Tour Gallery Slider JS Start
    $('.tour-gallery-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        prevArrow: '<button class="slide-arrow prev-arrow"><span>Prev</span></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><span>Next</span></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    // Tour Gallery Slider JS End

    // About Progress Bar Start 
    $(window).scroll(function () {
        if ($(".about-progress-bar").length) {
            var oTop = $('.about-progress-bar').offset().top - window.innerHeight;
            if ($(window).scrollTop() > oTop) {
                jQuery(".progress-bar1").animate({width: '80%'}, 1000);
                jQuery(".progress-bar2").animate({width: '95%'}, 1200);
                jQuery(".progress-bar3").animate({width: '67%'}, 1400);
                jQuery(".progress-bar4").animate({width: '87%'}, 1600);
            }
        }
    });
    // About Progress Bar End

    // About Progress Bar Start 
    $(window).scroll(function () {
        if ($(".rb-progress-bar").length) {
            var oTop = $('.rb-progress-bar').offset().top - window.innerHeight;
            if ($(window).scrollTop() > oTop) {
                jQuery(".progress-bar1").animate({width: '100%'}, 1000);
                jQuery(".progress-bar2").animate({width: '100%'}, 1200);
                jQuery(".progress-bar3").animate({width: '100%'}, 1400);
                jQuery(".progress-bar4").animate({width: '100%'}, 1600);
                jQuery(".progress-bar5").animate({width: '100%'}, 1600);
                jQuery(".progress-bar6").animate({width: '100%'}, 1600);
            }
        }
    });
    // About Progress Bar End 

    // Responsive Slider Start  
    jQuery(window).on('load resize', function () {
        var window_size = jQuery(window).width();
        if (window_size <= 991) {
            if (!jQuery('.blog-slider').hasClass('slick-initialized')) {
                jQuery('.blog-slider').slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                            arrows: false,
                        }
                    },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ]
                });
            }
        } else {
            if (jQuery('.blog-slider').hasClass('slick-initialized')) {
                jQuery('.blog-slider').slick('destroy');
            }
        }
    });
    // Responsive Slider End

    // Counter JS Start
    var a = 0;
    $(window).scroll(function () {
        if ($(".main-counter").length) {
            var oTop = $('.main-counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.count').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
                });
                a = 1;
            }
        }
    });
    // Counter JS End

    // Sticky Header JS Start
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 200) {
            $('.site-header').addClass('sticky-header');
        } else {
            $('.site-header').removeClass('sticky-header');
        }
    });
    // Sticky Header JS End

    // Scroll To Top JS Start
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $("#scrollToTop").fadeIn('500');
            $("#scrollToTop").addClass('show');
        } else {
            $("#scrollToTop").fadeOut('500');
            $("#scrollToTop").removeClass('show');
        }
    });
    jQuery('#scrollToTop').on('click', function () {
        jQuery("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
    // Scroll To Top JS End

    // Toogle Menu JS Start
    $(".navigation-btn").on('click', function () {
        $(".main-navigation").toggleClass('toggle-menu');
    });
    $(".main-navigation ul li a:not(.dropdown-items>a)").on('click', function () {
        $(".main-navigation").removeClass('toggle-menu');
    });
    // Toogle MenuJS End

    // DropDown Menu JS Start
    jQuery(".dropdown-items").on('click', function () {
        var cur = jQuery(this).closest(".dropdown-items");
        jQuery(".dropdown-items").not(cur).removeClass("dropdown-open");
        jQuery(this).closest(".dropdown-items").toggleClass("dropdown-open");
    });
    // DropDown Menu JS End

    // Search Bar JS Start
    $(".search-icon").on('click', function () {
        $(".search-icon").parent().toggleClass('search-box-open');
    });
    // Search Bar JS End

});