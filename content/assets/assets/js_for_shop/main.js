// 刷新header中的购物车
// function fetchHeaderCartList() {
//     console.log("刷新header中的购物车, main.js");
//     let fetched_carts = {};
//     let header = $(".header-cart");
//     header.innerHTML = '<ul>';
//     $.ajax({
//         url: "/api/cart",
//         method: "GET",
//         success: function (res) {
//             fetched_carts = res;
//             let total = 0;
//             let reached_cart = [];
//             for (let fetched_cart of fetched_carts) {
//                 //用来确认遍历结束
//                 // 不知道如何通过外键直接获取值，可以省去这些ajax
//                 $.ajax({
//                     url: "/api/instruments/" + fetched_cart.instrument,
//                     method: "GET",
//                     success: function (res) {
//                         fetched_cart.instrument = res;
//                         // console.log(fetched_cart);
//                         // console.log("foreign key search", total, fetched_cart.instrument.price);
//                         total = total + (Number(fetched_cart.instrument.price) * fetched_cart.count);
//                         let header_cart_item =
//                             "   <li>" +
//                             "            <a href=\"/product-detail/" + fetched_cart.instrument.id + "\">" +
//                             "                <figure><img" +
//                             "                    src=\"" + fetched_cart.instrument.image + "\"" +
//                             "                    data-src=\"" + fetched_cart.instrument.image + "\"" +
//                             "                    alt=\"\"" +
//                             "                    width=\"50\" height=\"50\" className=\"lazy\"></figure>" +
//                             "                <strong><span>" + fetched_cart.count + "x " + fetched_cart.instrument.name + "</span>" + fetched_cart.instrument.price + "" +
//                             "                </strong>" +
//                             // "            <i onclick=\"remove_cart_item('{{ cart.id }}')\" class=\"ti-trash\"></i>" +
//                             "            </a>" +
//                             "        </li>";
//                         header.innerHTML = header.innerHTML + header_cart_item;
//                         reached_cart.push(fetched_cart);
//                         if (fetched_carts.length === reached_cart.length) {
//                             header.innerHTML = header.innerHTML + "</ul>";
//                             header.innerHTML = header.innerHTML +
//                                 "<div class=\"total_drop\">" +
//                                 "   <div class=\"clearfix\"><strong>Total</strong><span>$" + total + "</span></div>" +
//                                 "   <a href=\"/cart\" class=\"btn_1 outline\">View Cart</a><a href=\"checkout.html\" class=\"btn_1\">Checkout</a>" +
//                                 "</div>"
//                             ;
//                             header.html(header.innerHTML);
//                         }
//                         // console.log(fetched_carts.indexOf(fetched_cart), fetched_carts.length, reached_cart.length, header.innerHTML);
//                     }
//                 });
//             }
//         }
//     });
//
// }
// function activateWishlist() {
//     $(".add-wishlist-item").click(function () {
//         let instrument_id = this.id;
//         console.log("加入愿望单", instrument_id);
//     });
// }

(function ($) {
    // fetchHeaderCartList();
    "use strict";

    // Sticky nav
    var $headerStick = $('.Sticky');
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 80) {
            $headerStick.addClass("sticky_element");
        } else {
            $headerStick.removeClass("sticky_element");
        }
    });

    // Menu Categories
    $(window).resize(function () {
        if ($(window).width() >= 768) {
            $('a[href="#"]').on('click', function (e) {
                e.preventDefault();
            });
            $('.categories').addClass('menu');
            $('.menu ul > li').on('mouseover', function (e) {
                $(this).find("ul:first").show();
                $(this).find('> span a').addClass('active');
            }).on('mouseout', function (e) {
                $(this).find("ul:first").hide();
                $(this).find('> span a').removeClass('active');
            });
            $('.menu ul li li').on('mouseover', function (e) {
                if ($(this).has('ul').length) {
                    $(this).parent().addClass('expanded');
                }
                $('.menu ul:first', this).parent().find('> span a').addClass('active');
                $('.menu ul:first', this).show();
            }).on('mouseout', function (e) {
                $(this).parent().removeClass('expanded');
                $('.menu ul:first', this).parent().find('> span a').removeClass('active');
                $('.menu ul:first', this).hide();
            });
        } else {
            $('.categories').removeClass('menu');
        }
    }).resize();

    // Mobile Mmenu
    var $menu = $("#menu").mmenu({
            "extensions": ["pagedim-black"],
            counters: true,
            keyboardNavigation: {
                enable: true,
                enhance: true
            },
            navbar: {
                title: 'MENU'
            },
            offCanvas: {
                pageSelector: "#page"
            },
            navbars: [{position: 'bottom', content: ['<a href="#0">© 2021 Allaia</a>']}]
        },
        {
            // configuration
            clone: true,
            classNames: {
                fixedElements: {
                    fixed: "menu_fixed"
                }
            }
        });

    // Menu
    $('a.open_close').on("click", function () {
        $('.main-menu').toggleClass('show');
        $('.layer').toggleClass('layer-is-visible');
    });
    $('a.show-submenu').on("click", function () {
        $(this).next().toggleClass("show_normal");
    });
    $('a.show-submenu-mega').on("click", function () {
        $(this).next().toggleClass("show_mega");
    });

    $('a.btn_search_mob').on("click", function () {
        $('.search_mob_wp').slideToggle("fast");
    });

    // Carousel product page
    $('.prod_pics').owlCarousel({
        items: 1,
        loop: false,
        margin: 0,
        dots: true,
        lazyLoad: true,
        nav: false
    });

    // Carousel
    $('.products_carousel').owlCarousel({
        center: false,
        items: 2,
        loop: false,
        margin: 10,
        dots: false,
        nav: true,
        lazyLoad: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                nav: false,
                dots: true,
                items: 2
            },
            560: {
                nav: false,
                dots: true,
                items: 3
            },
            768: {
                nav: false,
                dots: true,
                items: 4
            },
            1024: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

    // Carousels
    $('.carousel_centered').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // Carousel brands
    $('#brands').owlCarousel({
        autoplay: true,
        items: 2,
        loop: true,
        margin: 10,
        dots: false,
        nav: false,
        lazyLoad: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 3
            },
            767: {
                items: 4
            },
            1000: {
                items: 6
            },
            1300: {
                items: 8
            }
        }
    });

    // Countdown offers
    $('[data-countdown]').each(function () {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('%DD %H:%M:%S'));
        });
    });

    // Lazy load
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });

    // Jquery select
    $('.custom-select-form select').niceSelect();

    // Product page color select
    $(".color").on('click', function () {
        $(".color").removeClass("active");
        $(this).addClass("active");
    });

    /* Input incrementer*/
    // $(".numbers-row").append('<div class="inc button_inc" style="display: none;">+</div><div style="display: none;" class="dec button_inc">-</div>');
    $(".button_inc").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        let newVal = 0;
        console.log(this, $button.text(), $button.text() === "+")
        if ($button.text().includes('+')) {
            newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 2) {
                newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });


    /* Cart dropdown */
    $('.dropdown-cart, .dropdown-access').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(300);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(300);
    });

    /* Cart Dropdown Hidden From tablet */
    // $(window).bind('load resize', function () {
    //     var width = $(window).width();
    //     if (width <= 768) {
    //         $('a.cart_bt, a.access_link').removeAttr("data-toggle", "dropdown")
    //     } else {
    //         $('a.cart_bt,a.access_link').attr("data-toggle", "dropdown")
    //     }
    // });

    // Opacity mask
    $('.opacity-mask').each(function () {
        $(this).css('background-color', $(this).attr('data-opacity-mask'));
    });

    /* Animation on scroll */
    new WOW().init();

    // Forgot Password
    $("#forgot").on("click", function () {
        $("#forgot_pw").fadeToggle("fast");
    });

    // Top panel on click: add to cart, search header
    var $topPnl = $('.top_panel');
    var $pnlMsk = $('.layer');

    // Product detail add to cart
    $('.btn_add_to_cart a').on('click', function () {
        let instrument_id = this.getAttribute("data_id");
        console.log("Add to cart: ", instrument_id);

        $.ajax({
            url: "/cart/product_add_cart/" + instrument_id,
            method: "GET",
            success: function (res) {
                $topPnl.addClass('show');
                $pnlMsk.addClass('layer-is-visible');
            },
            error: function (res) {
                console.log("Fail to add to cart");
            },
        });
    });

    $('a.search_panel').on('click', function () {
        $topPnl.addClass('show');
        $pnlMsk.addClass('layer-is-visible');
    });

    $('a.btn_close_top_panel').on('click', function () {
        $topPnl.removeClass('show');
        $pnlMsk.removeClass('layer-is-visible');
    });

    //Footer collapse
    var $headingFooter = $('footer h3');
    $(window).resize(function () {
        if ($(window).width() <= 768) {
            $headingFooter.attr("data-bs-toggle", "collapse");
        } else {
            $headingFooter.removeAttr("data-bs-toggle", "collapse");
        }
    }).resize();
    $headingFooter.on("click", function () {
        $(this).toggleClass('opened');
    });

    /* Footer reveal */
    if ($(window).width() >= 1024) {
        $('footer.revealed').footerReveal({
            shadow: false,
            opacity: 0.6,
            zIndex: 1
        });
    }
    ;

    // Scroll to top
    var pxShow = 800; // height on which the button will show
    var scrollSpeed = 500; // how slow / fast you want the button to scroll to top.
    $(window).scroll(function () {
        if ($(window).scrollTop() >= pxShow) {
            $("#toTop").addClass('visible');
        } else {
            $("#toTop").removeClass('visible');
        }
    });
    $('#toTop').on('click', function () {
        $('html, body').animate({scrollTop: 0}, scrollSpeed);
        return false;
    });

    // Tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // Modal Sign In
    $('#sign-in').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
        mainClass: 'my-mfp-zoom-in'
    });

    // Image popups
    $('.magnific-gallery').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            preloader: true,
            gallery: {
                enabled: true
            },
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function () {
                    // just a hack that adds mfp-anim class to markup
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            closeOnContentClick: true,
            midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        });
    });

    // Popup up
    setTimeout(function () {
        $('.popup_wrapper').css({
            "opacity": "1",
            "visibility": "visible"
        });
        $('.popup_close').on("click", function () {
            $(".popup_wrapper").fadeOut(300);
        })
    }, 1500);


})(window.jQuery);
