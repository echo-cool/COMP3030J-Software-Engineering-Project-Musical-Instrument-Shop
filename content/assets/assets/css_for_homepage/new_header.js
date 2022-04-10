activateSearch();
activateMiniCart();
activateHeightWhat();

function activateSearch() {
    console.log(" activateSearch()");
    $(".js-search-destop").on("click", function () {
        $(".js-box-search").addClass("active"), $(".bg_search_box").addClass("active"), $("body").addClass("activedestop")
    }), $(".js-drawer-close").on("click", function () {
        $(".js-box-search").removeClass("active"), $(".bg_search_box").removeClass("active"), $("body").removeClass("activedestop")
    }), $(".bg_search_box").on("click", function () {
        $(".js-box-search").removeClass("active"), $(".bg_search_box").removeClass("active"), $("body").removeClass("activedestop")
    })
}

function activateMiniCart() {
    $(".js-call-minicart").on("click", function () {
        $(".js-minicart").addClass("active"), $(".bg-minicart").addClass("active")
    }), $(".close-mini-cart").on("click", function () {
        $(".js-minicart").removeClass("active"), $(".bg-minicart").removeClass("active")
    }), $(".bg-minicart").on("click", function () {
        $(".js-minicart").removeClass("active"), $(".bg-minicart").removeClass("active")
    })
}


function activateHeightWhat() {
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function menudestopscroll2() {
        console.log(" scroll white");
        var $nav = $(".jsheader_sticky");
        console.log("menudestopscroll", $nav)
        $nav.removeClass('menu_scroll_v2');
        $(document).scroll(function () {
            $nav.toggleClass('menu_scroll_v2', $(this).scrollTop() > $nav.height());
            var r = (hexToRgb("#ffffff").r);
            var g = (hexToRgb("#ffffff").g);
            var b = (hexToRgb("#ffffff").b)
            $('.header-v2-h2.menu_scroll_v2').css({'background': 'rgba(' + r + ' ,' + g + ',' + b + ',0.7)'});
            if ($(this).scrollTop() < $nav.height()) {
                $('.header-v2-h2').css({'background': 'none'});
                $nav.removeClass('menu_scroll_v2')
            }
        });
    }

    function menudestopscroll4() {
        console.log("scroll black");
        var $nav = $(".jsheader_sticky");
        console.log("menudestopscroll", $nav)
        $nav.removeClass('menu_scroll_v4');
        $(document).scroll(function () {
            $nav.toggleClass('menu_scroll_v4', $(this).scrollTop() > $nav.height());
            var r = (hexToRgb("#000000").r);
            var g = (hexToRgb("#000000").g);
            var b = (hexToRgb("#000000").b)
            $('.header-v4-h4.menu_scroll_v4').css({'background': 'rgba(' + r + ' ,' + g + ',' + b + ',0.7)'});
            if ($(this).scrollTop() < $nav.height()) {
                $('.header-v4-h4').css({'background': 'none'});
                $nav.removeClass('menu_scroll_v4')
            }
        });
    }


    if ($(".header-v2-h2").length !== 0) {
        menudestopscroll2();
    } else {
        menudestopscroll4();
    }


    var u = $(".js_height_hd").offset(), b = $(".js_height_hd").outerHeight();
    $(".js-full-width").css({
        top: u.top + b - 15,
        position: "fixed",
        left: " 0",
        right: "0",
        width: "100%"
    }), $(window).scroll(function () {
        var _ = $(".js_height_hd").outerHeight();
        $(window).scrollTop() >= _ ? $(".js-full-width").css({top: _ - 15}) : $(".js-full-width").css({top: u.top + _ - 15})
    })
}


function activateBackToTop() {
    var u = $("#back-to-top");
    if (u.length) {
        var b = 100, _ = function () {
            var k = $(window).scrollTop();
            k > b ? u.addClass("show") : u.removeClass("show")
        };
        $(window).on("scroll", function () {
            _()
        }), u.on("click", function (k) {
            k.preventDefault(), $("html,body").animat$({scrollTop: 0}, 700)
        })
    }
}

// jQuery(document).ready(function (e) {
//     jQuery(".engoj_select_color a").each(function () {
//         jQuery(this).on("click", function () {
//             var t = jQuery(this).data("engojvariant-img");
//             return jQuery(this).parents(".engoj_grid_parent").find(".engoj_find_img img").attr({src: t}), !1
//         })
//     })
// });
// var engoAutoComplate = {
//     initProductsRecently: function () {
//         var e = this;
//         if (!jQuery.cooki$("brilliant_products_recently") || jQuery.cooki$("brilliant_products_recently") == null) $(".engoj-recently-wrapper").append('<div class="no-products" style="flex-direction: column;"> <!--?xml version="1.0" encoding="iso-8859-1"?--> <!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewbox="0 0 455 455" style="enable-background:new 0 0 455 455;" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M360.967,130.599c-4.06-0.818-8.018,1.8-8.841,5.86c-0.823,4.06,1.801,8.018,5.86,8.841 c1.147,0.232,2.013,1.286,2.013,2.45v160c0,1.355-1.145,2.5-2.5,2.5H179.676c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5H357.5 c9.649,0,17.5-7.851,17.5-17.5v-160C375,139.46,369.099,132.247,360.967,130.599z"></path> <path d="M274.824,130.25H97.5c-9.649,0-17.5,7.851-17.5,17.5v160c0,8.063,5.48,15.046,13.326,16.982 c0.604,0.149,1.208,0.221,1.803,0.221c3.369,0,6.432-2.287,7.276-5.705c0.992-4.021-1.463-8.086-5.484-9.078 c-0.955-0.235-1.92-1.143-1.92-2.42v-160c0-1.355,1.145-2.5,2.5-2.5h177.324c4.142,0,7.5-3.357,7.5-7.5 S278.966,130.25,274.824,130.25z"></path> <path d="M235.363,170.798c-2.655-0.363-5.3-0.548-7.863-0.548c-31.706,0-57.5,25.794-57.5,57.5c0,2.563,0.185,5.209,0.548,7.863 c0.515,3.759,3.731,6.483,7.421,6.483c0.339,0,0.682-0.023,1.027-0.07c4.104-0.562,6.975-4.345,6.413-8.448 c-0.271-1.982-0.409-3.943-0.409-5.828c0-23.435,19.065-42.5,42.5-42.5c1.884,0,3.845,0.138,5.828,0.409 c4.108,0.564,7.886-2.309,8.448-6.413C242.338,175.143,239.467,171.359,235.363,170.798z"></path> <path d="M219.127,284.636c2.789,0.407,5.605,0.614,8.373,0.614c31.706,0,57.5-25.794,57.5-57.5c0-2.77-0.207-5.587-0.613-8.373 c-0.599-4.099-4.408-6.934-8.505-6.337c-4.099,0.599-6.936,4.406-6.337,8.505c0.303,2.071,0.456,4.158,0.456,6.205 c0,23.435-19.065,42.5-42.5,42.5c-2.044,0-4.132-0.153-6.205-0.456c-4.099-0.6-7.907,2.238-8.505,6.337 S215.028,284.037,219.127,284.636z"></path> <path d="M318.5,203.25c9.098,0,16.5-7.402,16.5-16.5c0-8.318-6.227-15.355-14.484-16.37c-2.293-0.277-4.585,0.509-6.218,2.142 l-10.027,10.027c-1.633,1.632-2.422,3.926-2.141,6.217C303.145,197.023,310.183,203.25,318.5,203.25z"></path> <path d="M117.5,114.75h30c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5h-30c-4.142,0-7.5,3.357-7.5,7.5 S113.358,114.75,117.5,114.75z"></path> <path d="M388.367,66.633C345.397,23.664,288.268,0,227.5,0S109.603,23.664,66.633,66.633C23.664,109.603,0,166.732,0,227.5 s23.664,117.897,66.633,160.867C109.603,431.336,166.732,455,227.5,455s117.897-23.664,160.867-66.633 C431.336,345.397,455,288.268,455,227.5S431.336,109.603,388.367,66.633z M15,227.5C15,110.327,110.327,15,227.5,15 c55.894,0,106.807,21.703,144.783,57.11L72.11,372.283C36.703,334.307,15,283.395,15,227.5z M227.5,440 c-55.894,0-106.807-21.703-144.783-57.11L382.89,82.717C418.297,120.693,440,171.606,440,227.5C440,344.673,344.673,440,227.5,440z "></path> </g> </svg> <div class="title_noprod"> <span> Sorry, there are no products. </span> </div> </div>'); else {
//             $(".engoj-recently-wrapper > .no-products").remov$();
//             for (var t = jQuery.cooki$("brilliant_products_recently").split("|"), v = 0; v < t.length; v++) {
//                 var n = t[v];
//                 e.ajaxProductsRecently(n)
//             }
//             $(".js_prod_recent").slick({
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 dots: !1,
//                 arrows: !0,
//                 infinite: !1,
//                 vertical: !0,
//                 verticalSwiping: !0,
//                 focusOnSelect: !0,
//                 prevArrow: '<button type="button" class="slick-brand-prev fa fa-angle-left"></button>',
//                 nextArrow: '<button type="button" class="slick-brand-next fa fa-angle-down"></button>',
//                 responsive: [{breakpoint: 1200, settings: {}}, {breakpoint: 768, settings: {}}, {
//                     breakpoint: 574,
//                     settings: {slidesToShow: 1}
//                 }]
//             })
//         }
//     }, ajaxProductsRecently: function (e) {
//         var t = "/products/" + e + ".js", v = new Array;
//         jQuery.ajax({
//             type: "GET", dataType: "json", url: t, beforeSend: function () {
//                 jQuery(".js_prod_recent").append('<div class="items d-flex align-items-md-center align-items-start engoj-recently-' + e + '"><svg xml:space="preserve" style="enable-background:new 0 0 50 50;margin-top: -1px;" viewBox="0 0 24 30" height="20px" width="21px" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><rect opacity="0.2" fill="#000" height="8" width="3" y="10" x="0"><animate repeatCount="indefinite" dur="0.6s" begin="0s" values="0.2; 1; .2" attributeType="XML" attributeName="opacity"/><animate repeatCount="indefinite" dur="0.6s" begin="0s" values="10; 20; 10" attributeType="XML" attributeName="height"/><animate repeatCount="indefinite" dur="0.6s" begin="0s" values="10; 5; 10" attributeType="XML" attributeName="y"/></rect><rect opacity="0.2" fill="#000" height="8" width="3" y="10" x="8">      <animate repeatCount="indefinite" dur="0.6s" begin="0.15s" values="0.2; 1; .2" attributeType="XML" attributeName="opacity"/><animate repeatCount="indefinite" dur="0.6s" begin="0.15s" values="10; 20; 10" attributeType="XML" attributeName="height"/><animate repeatCount="indefinite" dur="0.6s" begin="0.15s" values="10; 5; 10" attributeType="XML" attributeName="y"/></rect><rect opacity="0.2" fill="#000" height="8" width="3" y="10" x="16"><animate repeatCount="indefinite" dur="0.6s" begin="0.3s" values="0.2; 1; .2" attributeType="XML" attributeName="opacity"/><animate repeatCount="indefinite" dur="0.6s" begin="0.3s" values="10; 20; 10" attributeType="XML" attributeName="height"/><animate repeatCount="indefinite" dur="0.6s" begin="0.3s" values="10; 5; 10" attributeType="XML" attributeName="y"/></rect></svg></div>')
//             }, success: function (n) {
//                 var s = n.title, i = n.price, c = n.handle, r = n.featured_image,
//                     l = '<div class="img_left"> <a href="/products/' + c + '"> <img src="' + r + '" class="img-responsive" alt="' + s + '"> </a> </div> <div class="info_right position-absolute"> <a class="product-title" href="/products/' + c + '">' + s + '</a> <p class="price-product"><span class="price">' + Shopify.formatMoney(i, window.money_format) + '</span></p> <div class="product-icon-action"> <div class="add-to-cart"> <a href="/products/' + c + '"><span>Buy now</span></a> </div> </div> </div>';
//                 jQuery(".engoj-recently-" + c).html(l)
//             }
//         })
//     }, ajaxProductItems: function (e, t, v) {
//         var n = "/search", s = new Array, i = e.val();
//         jQuery.ajax({
//             type: "GET",
//             data: {q: "*" + i + "*", type: "product", view: "json"},
//             dataType: "json",
//             url: n,
//             beforeSend: function () {
//                 t.show(), v.html('<p class="col-12"><svg xml:space="preserve" style="enable-background:new 0 0 50 50;margin-top: -1px;" viewBox="0 0 24 30" height="20px" width="21px" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><rect opacity="0.2" fill="#000" height="8" width="3" y="10" x="0"><animate repeatCount="indefinite" dur="0.6s" begin="0s" values="0.2; 1; .2" attributeType="XML" attributeName="opacity"/><animate repeatCount="indefinite" dur="0.6s" begin="0s" values="10; 20; 10" attributeType="XML" attributeName="height"/><animate repeatCount="indefinite" dur="0.6s" begin="0s" values="10; 5; 10" attributeType="XML" attributeName="y"/></rect><rect opacity="0.2" fill="#000" height="8" width="3" y="10" x="8">      <animate repeatCount="indefinite" dur="0.6s" begin="0.15s" values="0.2; 1; .2" attributeType="XML" attributeName="opacity"/><animate repeatCount="indefinite" dur="0.6s" begin="0.15s" values="10; 20; 10" attributeType="XML" attributeName="height"/><animate repeatCount="indefinite" dur="0.6s" begin="0.15s" values="10; 5; 10" attributeType="XML" attributeName="y"/></rect><rect opacity="0.2" fill="#000" height="8" width="3" y="10" x="16"><animate repeatCount="indefinite" dur="0.6s" begin="0.3s" values="0.2; 1; .2" attributeType="XML" attributeName="opacity"/><animate repeatCount="indefinite" dur="0.6s" begin="0.3s" values="10; 20; 10" attributeType="XML" attributeName="height"/><animate repeatCount="indefinite" dur="0.6s" begin="0.3s" values="10; 5; 10" attributeType="XML" attributeName="y"/></rect></svg> Loading...</p>')
//             },
//             complete: function () {
//             },
//             success: function (c) {
//                 var r = "";
//                 if (c.length > 0) {
//                     for (var l = 0; l < c.length; l++) {
//                         var a = c[l], p = a.title, g = a.price, f = a.handle, h = a.featured_image,
//                             w = a.compare_at_price ? '<s class="price-old">' + Shopify.formatMoney(a.compare_at_price, window.money_format) + "</s>" : "",
//                             d = a.available ? "" : "<span class='item-sold-out'>Sold out</span> ",
//                             g = a.available ? a.price : a.out_stock_nofication,
//                             m = p.replac$(new RegExp("(" + i + ")", "gi"), '<span class="hightlight">$1</span>'),
//                             o = '<div class="col-lg-4 col-sm-6 col-md-6"><ul class="prod_sidebar"><li class="product_info"><a href="/products/' + f + '"><img style="width: 100% "src="' + h + '" class="img-responsive"/></a><h4 class="title-product"><a href="/products/' + f + '">' + m + '</a></h4><span><p class="price-product mb-0"><span class="price">' + Shopify.formatMoney(g, window.money_format) + "</span>" + w + "</p></span>" + d + "</li></ul></div>";
//                         r = r + o
//                     }
//                     v.html(r), $(".js_productSearchResults .js_search_results li").length && $(".js_productSearchResults").show()
//                 } else v.html('<p class="col-12">No result found for your search.</p>'), $(".js_productSearchResults").show()
//             }
//         })
//     }, ajaxSearch: function (e) {
//         var t, v, n = this, s = e.search_input.length > 0 ? e.search_input : ".js_engo_autocomplate",
//             i = e.result_wrapper.length > 0 ? e.result_wrapper : ".js_productSearchResults",
//             c = e.result_element.length > 0 ? e.result_element : ".js_search_results";
//         jQuery(document).delegat$(s, "keyup", function (r) {
//             var l = jQuery(this).val(), a = jQuery(this), p = jQuery(i), f = p.children(c);
//             t && clearTimeout(t), t = setTimeout(function () {
//                 l.length >= 2 ? n.ajaxProductItems(a, p, f) : f.html('<p class="col-12">You must enter at least 2 characters.</p>')
//             }, 300)
//         })
//     }, init: function (e) {
//         this.ajaxSearch(e)
//     }
// };
// jQuery(document).ready(function (e) {
//     engoAutoComplate.init({
//         search_input: ".js_engo_autocomplate",
//         result_wrapper: ".js_productSearchResults",
//         result_element: ".js_search_results"
//     }), engoAutoComplate.initProductsRecently()
// }), jQuery(document).ready(function (e) {
//     "use strict";
//
//     function t() {
//         $(window).width() < 576 && $(".js_sticy_imgmb").addClass("js_prod_detail"), $(window).resiz$(function () {
//             $(window).width() < 576 && $(".js_sticy_imgmb").addClass("js_prod_detail")
//         }), $(".js_prod_detail").slick({
//             dots: !0,
//             arrows: !0,
//             infinite: !1,
//             speed: 300,
//             autoplay: !1,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             nextArrow: '<button type="button" class="next-slide"><svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="500px" viewBox="0 0 1000 500" xml:space="preserve"> <g id="Forma_1_1_"> <g id="Forma_1"> <path fill-rule="evenodd" clip-rule="evenodd" d="M834.107,232.981L618.365,17.218c-9.3-9.624-24.779-9.624-34.405,0 c-9.299,9.303-9.299,24.778,0,34.059l174.447,174.441H182.759c-13.42,0.021-24.086,10.686-24.086,24.108 c0,13.417,10.666,24.436,24.086,24.436h575.648L583.96,448.375c-9.299,9.63-9.299,25.12,0,34.401 c9.626,9.632,25.128,9.632,34.405,0l215.742-215.742C843.733,257.739,843.733,242.263,834.107,232.981z"/> </g> </g> <g id="Forma_1_copy_1_"> </g> </svg></button>',
//             prevArrow: '<button type="button" class="prev-slide"><svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="500px" viewBox="0 0 1000 500" xml:space="preserve"> <g id="Forma_1_1_"> </g> <g id="Forma_1_copy_1_"> <g id="Forma_1_copy"> <path fill-rule="evenodd" clip-rule="evenodd" d="M811.881,225.728H245.96L417.457,51.275c9.143-9.269,9.143-24.751,0-34.055 c-9.463-9.627-24.679-9.627-33.821,0l-212.1,215.762c-9.462,9.282-9.462,24.765,0,34.054l212.1,215.742 c9.12,9.627,24.358,9.627,33.821,0c9.143-9.276,9.143-24.772,0-34.4L245.96,274.265h565.921c13.192,0,23.68-11.014,23.68-24.434 C835.561,236.411,825.073,225.749,811.881,225.728z"/> </g> </g> </svg></button>'
//         })
//     }
//
//     function v() {
//         $(".js_product_related").slick({
//             dots: !0,
//             arrows: !1,
//             infinite: !1,
//             speed: 300,
//             autoplay: !1,
//             slidesToShow: 4,
//             slidesToScroll: 2,
//             nextArrow: '<button type="button" class="next-slide"><svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="500px" viewBox="0 0 1000 500" xml:space="preserve"> <g id="Forma_1_1_"> <g id="Forma_1"> <path fill-rule="evenodd" clip-rule="evenodd" d="M834.107,232.981L618.365,17.218c-9.3-9.624-24.779-9.624-34.405,0 c-9.299,9.303-9.299,24.778,0,34.059l174.447,174.441H182.759c-13.42,0.021-24.086,10.686-24.086,24.108 c0,13.417,10.666,24.436,24.086,24.436h575.648L583.96,448.375c-9.299,9.63-9.299,25.12,0,34.401 c9.626,9.632,25.128,9.632,34.405,0l215.742-215.742C843.733,257.739,843.733,242.263,834.107,232.981z"/> </g> </g> <g id="Forma_1_copy_1_"> </g> </svg></button>',
//             prevArrow: '<button type="button" class="prev-slide"><svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="500px" viewBox="0 0 1000 500" xml:space="preserve"> <g id="Forma_1_1_"> </g> <g id="Forma_1_copy_1_"> <g id="Forma_1_copy"> <path fill-rule="evenodd" clip-rule="evenodd" d="M811.881,225.728H245.96L417.457,51.275c9.143-9.269,9.143-24.751,0-34.055 c-9.463-9.627-24.679-9.627-33.821,0l-212.1,215.762c-9.462,9.282-9.462,24.765,0,34.054l212.1,215.742 c9.12,9.627,24.358,9.627,33.821,0c9.143-9.276,9.143-24.772,0-34.4L245.96,274.265h565.921c13.192,0,23.68-11.014,23.68-24.434 C835.561,236.411,825.073,225.749,811.881,225.728z"/> </g> </g> </svg></button>',
//             responsive: [{breakpoint: 1024, settings: {slidesToShow: 3}}, {
//                 breakpoint: 600,
//                 settings: {slidesToShow: 2}
//             }, {breakpoint: 480, settings: {slidesToShow: 1, slidesToScroll: 1, dots: !1, arrows: !0}}]
//         })
//     }
//
//     function n() {
//         $(".js_collection").slick({
//             dots: !0,
//             arrows: !1,
//             infinite: !1,
//             speed: 300,
//             autoplay: !1,
//             slidesToShow: 3,
//             slidesToScroll: 2,
//             nextArrow: '<button type="button" class="next-slide"><svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="500px" viewBox="0 0 1000 500" xml:space="preserve"> <g id="Forma_1_1_"> <g id="Forma_1"> <path fill-rule="evenodd" clip-rule="evenodd" d="M834.107,232.981L618.365,17.218c-9.3-9.624-24.779-9.624-34.405,0 c-9.299,9.303-9.299,24.778,0,34.059l174.447,174.441H182.759c-13.42,0.021-24.086,10.686-24.086,24.108 c0,13.417,10.666,24.436,24.086,24.436h575.648L583.96,448.375c-9.299,9.63-9.299,25.12,0,34.401 c9.626,9.632,25.128,9.632,34.405,0l215.742-215.742C843.733,257.739,843.733,242.263,834.107,232.981z"/> </g> </g> <g id="Forma_1_copy_1_"> </g> </svg></button>',
//             prevArrow: '<button type="button" class="prev-slide"><svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="500px" viewBox="0 0 1000 500" xml:space="preserve"> <g id="Forma_1_1_"> </g> <g id="Forma_1_copy_1_"> <g id="Forma_1_copy"> <path fill-rule="evenodd" clip-rule="evenodd" d="M811.881,225.728H245.96L417.457,51.275c9.143-9.269,9.143-24.751,0-34.055 c-9.463-9.627-24.679-9.627-33.821,0l-212.1,215.762c-9.462,9.282-9.462,24.765,0,34.054l212.1,215.742 c9.12,9.627,24.358,9.627,33.821,0c9.143-9.276,9.143-24.772,0-34.4L245.96,274.265h565.921c13.192,0,23.68-11.014,23.68-24.434 C835.561,236.411,825.073,225.749,811.881,225.728z"/> </g> </g> </svg></button>',
//             responsive: [{breakpoint: 1024, settings: {slidesToShow: 3}}, {
//                 breakpoint: 600,
//                 settings: {slidesToShow: 2}
//             }, {breakpoint: 480, settings: {slidesToShow: 1, dots: !1, arrows: !0}}]
//         })
//     }
//
//     function s() {
//         $(".js_prod_main").slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: !1,
//             dot: !1,
//             fade: !1,
//             infinite: !1,
//             asNavFor: ".js_prod_sub"
//         }), $(".js_prod_sub").slick({
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             asNavFor: ".js_prod_main",
//             dots: !1,
//             arrows: !1,
//             infinite: !1,
//             vertical: !0,
//             verticalSwiping: !0,
//             focusOnSelect: !0,
//             responsive: [{breakpoint: 1200, settings: {vertical: !0, infinite: !1}}, {
//                 breakpoint: 768,
//                 settings: {vertical: !0, infinite: !1}
//             }, {breakpoint: 575, settings: {vertical: !1, infinite: !1}}]
//         })
//     }
//
//     function i() {
//         $(".js_prod_main2").slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: !1,
//             dot: !1,
//             fade: !0,
//             infinite: !1,
//             asNavFor: ".js_prod_sub2"
//         }), $(".js_prod_sub2").slick({
//             slidesToShow: 4,
//             slidesToScroll: 1,
//             asNavFor: ".js_prod_main2",
//             dots: !1,
//             arrows: !1,
//             infinite: !1,
//             focusOnSelect: !0,
//             responsive: [{breakpoint: 1200, settings: {infinite: !1}}, {
//                 breakpoint: 768,
//                 settings: {infinite: !1}
//             }, {breakpoint: 575, settings: {infinite: !1}}]
//         })
//     }
//
//     function c() {
//         $(".js_prod_main_bot").slick({slidesToShow: 1, slidesToScroll: 1, arrows: !1, dot: !1, fade: !1, infinite: !1})
//     }
//
//     function r() {
//         $(".btn_size_guide").on("click", function () {
//             $(".content_size_guide").addClass("active"), $(".js_sticky").removeClass("sticky_content"), $(".overlay").addClass("active")
//         }), $(".overlay").on("click", function () {
//             $(".content_size_guide").removeClass("active"), $(".overlay").removeClass("active")
//         }), $(".close_size_guide").on("click", function () {
//             $(".js_sticky").addClass("sticky_content"), $(".content_size_guide").removeClass("active"), $(".overlay").removeClass("active")
//         })
//     }
//
//     function l() {
//         $(window).width() < 1300 && ($(".size_3").addClass("active"), $(".size_4").removeClass("active"), $(".size_5").addClass("d-none")), $(window).width() >= 1300 && ($(".size_3").removeClass("active"), $(".size_4").addClass("active"), $(".size_5").removeClass("d-none")), $(window).width() < 768 && ($(".size_2").addClass("active"), $(".size_4").removeClass("active"), $(".size_5").addClass("d-none"), $(".size_4").addClass("d-none"), $(".size_3").addClass("d-none")), $(window).resiz$(function () {
//             $(window).width() < 1300 && ($(".size_3").addClass("active"), $(".size_4").removeClass("active"), $(".size_5").addClass("d-none")), $(window).width() >= 1300 && ($(".size_3").removeClass("active"), $(".size_4").addClass("active"), $(".size_5").removeClass("d-none")), $(window).width() < 768 && ($(".size_2").addClass("active"), $(".size_4").removeClass("active"), $(".size_5").addClass("d-none"), $(".size_4").addClass("d-none"), $(".size_3").addClass("d-none"))
//         }), $(".size_5").on("click", function () {
//             $(".js_size_prod").removeClass("col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12 col-lg-2dot4 col-md-1 col-md-2 col-md-3 col-md-4 col-md-5 col-md-6 col-md-7 col-md-8 col-md-9 col-md-10 col-md-11 col-md-12"), $(".js_size_prod").addClass("col-lg-2dot4"), $(this).addClass("active"), $(".size_6").removeClass("active"), $(".size_4").removeClass("active"), $(".size_3").removeClass("active")
//         }), $(".size_4").on("click", function () {
//             $(".js_size_prod").removeClass("col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12 col-lg-2dot4 col-md-1 col-md-2 col-md-3 col-md-4 col-md-5 col-md-6 col-md-7 col-md-8 col-md-9 col-md-10 col-md-11 col-md-12"), $(".js_size_prod").addClass("col-md-3"), $(this).addClass("active"), $(".size_5").removeClass("active"), $(".size_6").removeClass("active"), $(".size_3").removeClass("active"), $(".size_2").removeClass("active")
//         }), $(".size_3").on("click", function () {
//             $(".js_size_prod").removeClass("col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12 col-lg-2dot4 col-md-1 col-md-2 col-md-3 col-md-4 col-md-5 col-md-6 col-md-7 col-md-8 col-md-9 col-md-10 col-md-11 col-md-12"), $(".js_size_prod").addClass("col-md-4"), $(this).addClass("active"), $(".size_5").removeClass("active"), $(".size_4").removeClass("active"), $(".size_6").removeClass("active"), $(".size_2").removeClass("active")
//         }), $(".size_2").on("click", function () {
//             $(".js_size_prod").removeClass("col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12 col-lg-2dot4 col-md-1 col-md-2 col-md-3 col-md-4 col-md-5 col-md-6 col-md-7 col-md-8 col-md-9 col-md-10 col-md-11 col-md-12 col-12"), $(".js_size_prod").addClass("col-6"), $(this).addClass("active"), $(".size_3").removeClass("active"), $(".size_4").removeClass("active"), $(".size_1").removeClass("active")
//         })
//     }
//
//     function a() {
//         $(".prod_grid").on("click", function () {
//             $(".product-grid-view").addClass("active"), $(".product-list-view").removeClass("active"), $(this).addClass("active"), $(".prod_list").removeClass("active"), $(".prod_per").removeClass("active")
//         }), $(".prod_list").on("click", function () {
//             $(".product-grid-view").removeClass("active"), $(".product-list-view").addClass("active"), $(this).addClass("active"), $(".prod_grid").removeClass("active"), $(".prod_per").addClass("active")
//         })
//     }
//
//     function p() {
//         $(".js_filter").on("click", function () {
//             $(".filter-to-left").toggleClass("active"), $(".bg-minicart").addClass("active")
//         }), $(".close_filter").on("click", function () {
//             $(".filter-to-left").removeClass("active"), $(".bg-minicart").removeClass("active")
//         }), $(".bg-minicart").on("click", function () {
//             $(".filter-to-left").removeClass("active"), $(".bg-minicart").removeClass("active")
//         })
//     }
//
//
//
//     function h() {
//         $(".js_list_col").slick({
//             dots: !1,
//             arrows: !0,
//             infinite: !1,
//             speed: 300,
//             autoplay: !1,
//             slidesToShow: 5,
//             slidesToScroll: 1,
//             prevArrow: '<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i> </button>',
//             nextArrow: '<button type="button" class="next-slide"> <i class="fa fa-angle-right"></i></button>',
//             responsive: [{breakpoint: 1200, settings: {slidesToShow: 3}}, {
//                 breakpoint: 768,
//                 settings: {slidesToShow: 2}
//             }, {breakpoint: 575, settings: {slidesToShow: 1}}]
//         })
//     }
//
//     function w() {
//         $(".js_ds_collectionv1").slick({
//             dots: !1,
//             arrows: !1,
//             infinite: !1,
//             speed: 300,
//             autoplay: !1,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             responsive: [{breakpoint: 1024, settings: {slidesToShow: 2}}, {
//                 breakpoint: 600,
//                 settings: {slidesToShow: 2}
//             }, {breakpoint: 480, settings: {slidesToShow: 1, dots: !1, arrows: !1}}]
//         })
//     }
//
//     function d() {
//         $(".js_relate_post").slick({
//             dots: !0,
//             arrows: !1,
//             infinite: !1,
//             speed: 300,
//             autoplay: !1,
//             slidesToShow: 3,
//             slidesToScroll: 2,
//             prevArrow: '<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i></button>',
//             nextArrow: '<button type="button" class="next-slide"><i class="fa fa-angle-right"></i></button>',
//             responsive: [{breakpoint: 1024, settings: {slidesToShow: 3}}, {
//                 breakpoint: 600,
//                 settings: {slidesToShow: 2}
//             }, {breakpoint: 480, settings: {slidesToShow: 1, dots: !1, arrows: !0}}]
//         })
//     }
//
//     function g() {
//         $(".js_col_breacrumb").slick({
//             dots: !1,
//             arrows: !0,
//             infinite: !1,
//             speed: 300,
//             autoplay: !1,
//             slidesToShow: 5,
//             slidesToScroll: 2,
//             prevArrow: '<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i></button>',
//             nextArrow: '<button type="button" class="next-slide"><i class="fa fa-angle-right"></i></button>',
//             responsive: [{breakpoint: 1024, settings: {slidesToShow: 4}}, {
//                 breakpoint: 800,
//                 settings: {slidesToShow: 3}
//             }, {breakpoint: 600, settings: {slidesToShow: 2}}]
//         })
//     }
//
//     function m() {
//         $(".js_slide_lookbook").slick({
//             dots: !1,
//             arrows: !1,
//             infinite: !1,
//             speed: 300,
//             autoplay: !1,
//             slidesToShow: 1,
//             slidesToScroll: 1
//         })
//     }
//
//     function o() {
//         $(".js_change_border").on("click", function () {
//             $(".js_change_border").parent().find(".js_change_border").removeClass("active"), $(this).addClass("active")
//         })
//     }
//
//     function u() {
//         $(".js_change_thumbnail").on("click", function () {
//             $(".js_change_thumbnail").parent().find(".js_change_thumbnail").removeClass("active"), $(this).addClass("active")
//         })
//     }
//
//     function b() {
//         $(".js_testimonial").slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: !1,
//             arrows: !0,
//             infinite: !1,
//             prevArrow: '<button type="button" class="slick-brand-prev fa fa-angle-left"></button>',
//             nextArrow: '<button type="button" class="slick-brand-next fa fa-angle-right"></button>'
//         })
//     }
//
//     function _() {
//         $(".js_prod_menu").slick({
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             dots: !1,
//             arrows: !0,
//             infinite: !1,
//             prevArrow: '<button type="button" class="slick-brand-prev fa fa-angle-left"></button>',
//             nextArrow: '<button type="button" class="slick-brand-next fa fa-angle-right"></button>',
//             infinite: !1,
//             vertical: !0,
//             verticalSwiping: !0,
//             focusOnSelect: !0
//         })
//     }
//
//     function k() {
//         $(".slick_product_new-h5").slick({
//             arrows: !0,
//             infinite: !1,
//             dots: !1,
//             speed: 300,
//             slidesToShow: 4,
//             slidesToScroll: 3,
//             autoplay: !0,
//             autoplaySpeed: 2e3,
//             prevArrow: '<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i> </button>',
//             nextArrow: '<button type="button" class="next-slide"> <i class="fa fa-angle-right"></i></button>',
//             responsive: [{
//                 breakpoint: 1200,
//                 settings: {slidesToShow: 3, arrows: !0, infinite: !1, dots: !1}
//             }, {breakpoint: 1024, settings: {slidesToShow: 3, slidesToScroll: 2}}, {
//                 breakpoint: 600,
//                 settings: {slidesToShow: 2, arrows: !0, infinite: !1, dots: !1}
//             }]
//         })
//     }
//
//     function j() {
//         $(".js-draw-filter-btn").on("click", function () {
//             $(this).addClass("js-draw-filter-open"), $(this).removeClass("js-draw-filter-btn"), $(".js-draw-filter").removeClass("draw_filter").addClass("col-lg-3"), $(".js-draw-filter-2").removeClass("col-lg-12").addClass("col-lg-9"), $(".js-draw-filter-open").on("click", function () {
//                 $(this).addClass("js-draw-filter-btn"), $(this).removeClass("js-draw-filter-open"), $(".js-draw-filter").addClass("draw_filter").removeClass("col-lg-3"), $(".js-draw-filter-2").addClass("col-lg-12").removeClass("col-lg-9")
//             }), setTimeout(function () {
//                 j()
//             })
//         })
//     }
//
//     function C() {
//         $(window).scroll(function () {
//             $(this).scrollTop() > 130 ? $(".js-toolbar-icon").addClass("active") : $(".js-toolbar-icon").removeClass("active")
//         })
//     }
//
//     function S() {
//         $(".js_prod_detail_gallery").slick({
//             dots: !0,
//             arrows: !0,
//             infinite: !1,
//             speed: 300,
//             autoplay: !1,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             nextArrow: '<button type="button" class="next-slide"><svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="500px" viewBox="0 0 1000 500" xml:space="preserve"> <g id="Forma_1_1_"> <g id="Forma_1"> <path fill-rule="evenodd" clip-rule="evenodd" d="M834.107,232.981L618.365,17.218c-9.3-9.624-24.779-9.624-34.405,0 c-9.299,9.303-9.299,24.778,0,34.059l174.447,174.441H182.759c-13.42,0.021-24.086,10.686-24.086,24.108 c0,13.417,10.666,24.436,24.086,24.436h575.648L583.96,448.375c-9.299,9.63-9.299,25.12,0,34.401 c9.626,9.632,25.128,9.632,34.405,0l215.742-215.742C843.733,257.739,843.733,242.263,834.107,232.981z"/> </g> </g> <g id="Forma_1_copy_1_"> </g> </svg></button>',
//             prevArrow: '<button type="button" class="prev-slide"><svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="500px" viewBox="0 0 1000 500" xml:space="preserve"> <g id="Forma_1_1_"> </g> <g id="Forma_1_copy_1_"> <g id="Forma_1_copy"> <path fill-rule="evenodd" clip-rule="evenodd" d="M811.881,225.728H245.96L417.457,51.275c9.143-9.269,9.143-24.751,0-34.055 c-9.463-9.627-24.679-9.627-33.821,0l-212.1,215.762c-9.462,9.282-9.462,24.765,0,34.054l212.1,215.742 c9.12,9.627,24.358,9.627,33.821,0c9.143-9.276,9.143-24.772,0-34.4L245.96,274.265h565.921c13.192,0,23.68-11.014,23.68-24.434 C835.561,236.411,825.073,225.749,811.881,225.728z"/> </g> </g> </svg></button>',
//             responsive: [{breakpoint: 900, settings: {slidesToShow: 3, slidesToScroll: 1}}, {
//                 breakpoint: 768,
//                 settings: {slidesToShow: 2, slidesToScroll: 1}
//             }, {breakpoint: 600, settings: {slidesToShow: 1, slidesToScroll: 1}}]
//         })
//     }
//
//     function T() {
//         $(".js-check-click-col").on("click", function () {
//             $(this).toggleClass("active")
//         })
//     }
//
//     function z() {
//         $(".slick_product_5").slick({
//             arrows: !1,
//             infinite: !0,
//             dots: !0,
//             speed: 300,
//             slidesToShow: 4,
//             slidesToScroll: 3,
//             autoplay: !0,
//             autoplaySpeed: 2e3,
//             prevArrow: '<button type="button" class="prev-slide"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
//             nextArrow: '<button type="button" class="next-slide"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
//             responsive: [{breakpoint: 1200, settings: {slidesToShow: 2, slidesToScroll: 1}}, {
//                 breakpoint: 1024,
//                 settings: {slidesToShow: 2, slidesToScroll: 1}
//             }, {breakpoint: 600, settings: {slidesToShow: 2, slidesToScroll: 1, dots: !1, arrows: !0}}]
//         })
//     }
//
//     function A() {
//         $(".js_banner_v1").slick({
//             dots: !1,
//             arrows: !1,
//             infinite: !0,
//             speed: 600,
//             autoplay: !1,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             prevArrow: '<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i></button>',
//             nextArrow: '<button type="button" class="next-slide"><i class="fa fa-angle-right"></i></button>',
//             responsive: [{breakpoint: 768, settings: {slidesToShow: 2, slidesToScroll: 1}}, {
//                 breakpoint: 576,
//                 settings: {slidesToShow: 1, slidesToScroll: 1}
//             }]
//         })
//     }
//
//     function L() {
//         $(".js_section_product").slick({
//             slidesToShow: 4,
//             slidesToScroll: 2,
//             speed: 900,
//             autoplay: !1,
//             autoplaySpeed: 3500,
//             dots: !0,
//             arrows: !1,
//             prevArrow: '<button type="button" class="prev-slide slick-arrow"><i class="fa fa-angle-left"></i> </button>',
//             nextArrow: '<button type="button" class="next-slide slick-arrow"><i class="fa fa-angle-right"></i></button>',
//             responsive: [{breakpoint: 920, settings: {slidesToShow: 3, slidesToScroll: 1}}, {
//                 breakpoint: 768,
//                 settings: {slidesToShow: 2, slidesToScroll: 1, dots: !1, arrows: !0}
//             }]
//         })
//     }
//
//     function M() {
//         $(".bg-mobile-menu").on("click", function () {
//             $("body").removeClass("active"), $(this).removeClass("active"), $(".tab-menu-mobile ul").removeClass("active, .active2"), $(".tab-menu-1").addClass("active")
//         }), $(".js-link-click").each(function () {
//             $(this).on("click", function (x) {
//                 x.preventDefault();
//                 var G = $(this).attr("data-click");
//                 $(this).parents(".active").addClass("active2");
//                 var O = $('[data-open="' + G + '"]');
//                 O.addClass("active")
//             })
//         }), $(".js-header-mobile-menu").each(function () {
//             $(this).on("click", function () {
//                 var x = $(".tab-menu-mobile").find(".active2").eq(-1);
//                 $(this).parent().removeClass("active"), x.removeClass("active2")
//             })
//         })
//     }
//
//     function F() {
//         $(".js-testimonial-v1").slick({
//             autoplay: !1,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             infinite: !0,
//             arrows: !0,
//             prevArrow: '<button class="testimonial-blog-arrow arrow-prev testimonial-prev"><i class="fa fa-angle-left"></i></button>',
//             nextArrow: '<button class="testimonial-blog-arrow arrow-next testimonial-next"><i class="fa fa-angle-right"></i></button>',
//             dots: !1,
//             responsive: [{breakpoint: 768, settings: {slidesToShow: 1, slidesToScroll: 1}}, {
//                 breakpoint: 576,
//                 settings: {slidesToShow: 1, slidesToScroll: 1}
//             }]
//         }), $(".js-blog-testi-v1").slick({
//             autoplay: !1,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             infinite: !0,
//             arrows: !0,
//             prevArrow: '<button class="testimonial-blog-arrow arrow-prev blog-prev"><i class="fa fa-angle-left"></i></button>',
//             nextArrow: '<button class="testimonial-blog-arrow arrow-next blog-next"><i class="fa fa-angle-right"></i></button>',
//             dots: !1
//         })
//     }
//
//     function Q() {
//         $(".js-blog-v1").slick({
//             infinite: !0,
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             dots: !0,
//             arrows: !1,
//             prevArrow: '<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i> </button>',
//             nextArrow: '<button type="button" class="next-slide"> <i class="fa fa-angle-right"></i></button>',
//             responsive: [{
//                 breakpoint: 1500,
//                 settings: {slidesToShow: 3, slidesToScroll: 1, arrow: !1, dots: !1}
//             }, {
//                 breakpoint: 992,
//                 settings: {slidesToShow: 2, slidesToScroll: 1, arrows: !0, dots: !1}
//             }, {breakpoint: 575, settings: {slidesToShow: 1, slidesToScroll: 1, arrows: !0, dots: !1}}]
//         })
//     }
//
//     function N() {
//         $(".js-collection-v1").slick({
//             infinite: !0,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             dots: !0,
//             arrows: !1,
//             autoplay: !1,
//             prevArrow: '<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i> </button>',
//             nextArrow: '<button type="button" class="next-slide"> <i class="fa fa-angle-right"></i></button>',
//             responsive: [{
//                 breakpoint: 1500,
//                 settings: {slidesToShow: 3, slidesToScroll: 1, arrow: !1, dots: !0}
//             }, {
//                 breakpoint: 992,
//                 settings: {slidesToShow: 3, slidesToScroll: 1, arrows: !1, dots: !0}
//             }, {
//                 breakpoint: 768,
//                 settings: {slidesToShow: 2, slidesToScroll: 1, arrows: !1, dots: !0}
//             }, {breakpoint: 575, settings: {slidesToShow: 1, slidesToScroll: 1, arrows: !1, dots: !0, autoplay: !0}}]
//         })
//     }
//
//     function P() {
//         $(".js-collection-v2").slick({
//             infinite: !0,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             dots: !0,
//             arrows: !1,
//             autoplay: !1,
//             prevArrow: '<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i> </button>',
//             nextArrow: '<button type="button" class="next-slide"> <i class="fa fa-angle-right"></i></button>',
//             responsive: [{
//                 breakpoint: 1500,
//                 settings: {slidesToShow: 3, slidesToScroll: 1, arrow: !1, dots: !0}
//             }, {
//                 breakpoint: 992,
//                 settings: {slidesToShow: 3, slidesToScroll: 1, arrows: !1, dots: !0}
//             }, {
//                 breakpoint: 768,
//                 settings: {slidesToShow: 2, slidesToScroll: 1, arrows: !1, dots: !0}
//             }, {breakpoint: 575, settings: {slidesToShow: 1, slidesToScroll: 1, arrows: !1, dots: !0, autoplay: !0}}]
//         })
//     }
//
//     function B() {
//         $(".slick-side-h2").slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             autoplay: !1,
//             autoplaySpeed: 3500,
//             dots: !0,
//             arrows: !0,
//             prevArrow: '<button type="button" class="prev-slide"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
//             nextArrow: '<button type="button" class="next-slide"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
//             fade: !0,
//             responsive: [{breakpoint: 1200, settings: {infinite: !0, dots: !1, arrows: !0}}, {
//                 breakpoint: 1024,
//                 settings: {dots: !0, arrows: !1}
//             }, {breakpoint: 600, settings: {dots: !0, arrows: !1, autoplay: !0}}]
//         })
//     }
//
//     function H() {
//         $(".jsbrand_list_v1").slick({
//             dots: !1,
//             arrows: !1,
//             speed: 300,
//             slidesToShow: 5,
//             slidesToScroll: 1,
//             prevArrow: '<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i></button>',
//             nextArrow: '<button type="button" class="next-slide"><i class="fa fa-angle-right"></i></button>',
//             responsive: [{breakpoint: 1024, settings: {slidesToShow: 3}}, {
//                 breakpoint: 600,
//                 settings: {slidesToShow: 2}
//             }, {breakpoint: 480, settings: {slidesToShow: 2}}]
//         })
//     }
//
//     function X() {
//         $(".js_product_v6").slick({
//             dots: !0,
//             arrows: !1,
//             infinite: !1,
//             speed: 300,
//             autoplay: !0,
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             prevArrow: '<button type="button" class="prev-slide"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"> <g> <g> <path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8 c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712 L143.492,221.863z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></button>',
//             nextArrow: '<button type="button" class="next-slide"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M390.965,241.681l-242.001-236c-7.907-7.711-20.57-7.553-28.282,0.355c-7.712,7.908-7.553,20.57,0.355,28.282L348.353,256 L121.037,477.681c-7.908,7.712-8.067,20.374-0.355,28.282c7.713,7.91,20.375,8.065,28.281,0.355l242.001-236 C394.823,266.555,397,261.391,397,256S394.823,245.445,390.965,241.681z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></button>',
//             responsive: [{breakpoint: 1024, settings: {slidesToShow: 2}}, {
//                 breakpoint: 600,
//                 settings: {slidesToShow: 1}
//             }, {breakpoint: 480, settings: {slidesToShow: 1}}]
//         })
//     }
//
//     function y() {
//         $(".slickjs-services-v1").slick({
//             dots: !1,
//             arrows: !1,
//             infinite: !1,
//             speed: 300,
//             autoplay: !0,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             prevArrow: '<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i></button>',
//             nextArrow: '<button type="button" class="next-slide"><i class="fa fa-angle-right"></i></button>',
//             responsive: [{breakpoint: 1024, settings: {slidesToShow: 2}}, {
//                 breakpoint: 600,
//                 settings: {slidesToShow: 1}
//             }, {breakpoint: 480, settings: {slidesToShow: 1}}]
//         })
//     }
//
//     function D() {
//         $(".js-slide-item4").slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             autoplay: !1,
//             autoplaySpeed: 3500,
//             dots: !0,
//             arrows: !0,
//             prevArrow: '<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i></button>',
//             nextArrow: '<button type="button" class="next-slide"><i class="fa fa-angle-right"></i></button>',
//             fade: !1,
//             responsive: [{breakpoint: 1200, settings: {infinite: !0, dots: !0, arrows: !0}}, {
//                 breakpoint: 1024,
//                 settings: {dots: !0, arrows: !1}
//             }, {breakpoint: 600, settings: {dots: !0, arrows: !1, autoplay: !0}}]
//         })
//     }
//
//     function R() {
//         $(".slick-side-h5").slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             autoplay: !0,
//             autoplaySpeed: 3500,
//             dots: !1,
//             arrows: !0,
//             fade: !0,
//             prevArrow: '<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i> </button>',
//             nextArrow: '<button type="button" class="next-slide"> <i class="fa fa-angle-right"></i></button>',
//             responsive: [{breakpoint: 1199, settings: {infinite: !0, dots: !0, arrows: !1}}, {
//                 breakpoint: 1024,
//                 settings: {dots: !0, arrows: !1}
//             }, {breakpoint: 600, settings: {dots: !0, arrows: !1, autoplay: !0}}]
//         })
//     }
//
//     function I() {
//         $(".js-testimonial-v1-slide").slick({
//             autoplay: !1,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             infinite: !1,
//             arrows: !1,
//             dots: !0,
//             prevArrow: '<button class="testimonial-arrow arrow-prev"><i class="fa fa-angle-left"></i></button>',
//             nextArrow: '<button class="testimonial-arrow arrow-next"><i class="fa fa-angle-right"></i></button>',
//             responsive: [{breakpoint: 900, settings: {slidesToShow: 1, slidesToScroll: 1}}, {
//                 breakpoint: 768,
//                 settings: {slidesToShow: 1, slidesToScroll: 1}
//             }]
//         })
//     }
//
//
//     I(), X(), R(), D(), y(), H(), B(), N(), P(), F(), Q(), M(), y(), L(), A(), z(), T(), S(), C(), j(), k(), _(), b(), u(), t(), h(), v(), s(), r(), c(), l(), a(), p(), n(), f(), w(), d(), g(), i(), m(), o()
// }), jQuery(document).ready(function (e) {
//     $('[data-toggle="tooltip"]').tooltip()
// }), jQuery(document).ready(function (e) {
//     "use strict";
//
//     function t() {
//         $(".close_promo_topbar").on("click", function () {
//             $(".promo_topbar").addClass("active")
//         })
//     }
//
//
//     function n() {
//         $(".js-call-minicart").on("click", function () {
//             $(".js-minicart").addClass("active"), $(".bg-minicart").addClass("active")
//         }), $(".close-mini-cart").on("click", function () {
//             $(".js-minicart").removeClass("active"), $(".bg-minicart").removeClass("active")
//         }), $(".bg-minicart").on("click", function () {
//             $(".js-minicart").removeClass("active"), $(".bg-minicart").removeClass("active")
//         })
//     }
//
//     function s() {
//         $(".js-model_menu").on("click", function () {
//             $(".js-horizon-menu").addClass("active"), $(".js-bg-horizon-menu").addClass("active"), $("body").addClass("cartover")
//         }), $(".js_close-menu-horizon").on("click", function () {
//             $(".js-horizon-menu").removeClass("active"), $(".js-bg-horizon-menu").removeClass("active"), $("body").removeClass("cartover")
//         }), $(".js-bg-horizon-menu").on("click", function () {
//             $(".js-horizon-menu").removeClass("active"), $(".js-bg-horizon-menu").removeClass("active"), $("body").removeClass("cartover")
//         })
//     }
//
//     function i() {
//         $(".js_icon_horizon-menu").on("click", function () {
//             $(this).parents().addClass("active")
//         }), $(".js-back").on("click", function () {
//             $(this).parents().parents().find(".menu-horizon-list").removeClass("active")
//         })
//     }
//
//     function c() {
//         $(".js-call-popup-login").on("click", function () {
//             $(".js-poup-login-destop").addClass("active"), $(".js-bg-login-popup").addClass("active")
//         }), $(".js-eveland-close-login").on("click", function () {
//             $(".js-poup-login-destop").removeClass("active"), $(".js-bg-login-popup").removeClass("active")
//         }), $(".js-bg-login-popup").on("click", function () {
//             $(".js-poup-login-destop").removeClass("active"), $(".js-bg-login-popup").removeClass("active")
//         })
//     }
//
//     function r() {
//         $(".jsCreate_account").on("click", function () {
//             $(".form_register").show(), $(".formlogin").hid$()
//         }), $(".tab_navar_right").on("click", function () {
//             $(".formlogin").show(), $(".form_register").hid$()
//         }), $(".jsBack_login").on("click", function () {
//             $(".formlogin").show(), $(".form_register").hid$()
//         }), $(".jsacount_destop").on("click", function () {
//             $(".formlogin").show(), $(".form_register").hid$()
//         })
//     }
//
//     function l() {
//         $(".jsCreate_account").on("click", function () {
//             $(".form_register-destop").show(), $(".formlogin-destop").hid$()
//         }), $(".js-call-popup-login").on("click", function () {
//             $(".formlogin-destop").show(), $(".form_register-destop").hid$()
//         }), $(".jsBack_login").on("click", function () {
//             $(".formlogin-destop").show(), $(".form_register-destop").hid$()
//         }), $(".jsacount_destop").on("click", function () {
//             $(".formlogin-destop").show(), $(".form_register-destop").hid$()
//         })
//     }
//
//     function a() {
//         var u = $(".jsmenumobile");
//         u.removeClass("menu_mobilescroll"), $(document).scroll(function () {
//             u.toggleClass("menu_mobilescroll", $(this).scrollTop() > u.height())
//         })
//     }
//
//     function p() {
//         $(".menuleft").on("click", function () {
//             $(this).toggleClass("active"), $(".box_contentmenu").toggleClass("active"), $(".box_contentmenu_background").toggleClass("active"), $("body").addClass("activemenu_mobile")
//         }), $(".box_contentmenu_background").on("click", function () {
//             $(this).removeClass("active"), $(".box_contentmenu").removeClass("active"), $(".menuleft").removeClass("active"), $(".box_contentmenu_background").removeClass("active"), $("body").removeClass("activemenu_mobile")
//         }), $(".js-eveland-close").on("click", function () {
//             $(this).removeClass("active"), $(".box_contentmenu").removeClass("active"), $(".menuleft").removeClass("active"), $(".box_contentmenu_background").removeClass("active"), $("body").removeClass("activemenu_mobile")
//         })
//     }
//
//     function f() {
//         $(".btn_bar").on("click", function () {
//             $(this).toggleClass("active"), $(".box_contentmenu").toggleClass("active"), $(".box_contentmenu_background").toggleClass("active")
//         }), $(".box_contentmenu_background").on("click", function () {
//             $(this).removeClass("active"), $(".box_contentmenu").removeClass("active"), $(".menuleft").removeClass("active"), $(".box_contentmenu_background").removeClass("active")
//         }), $(".js-eveland-close").on("click", function () {
//             $(this).removeClass("active"), $(".box_contentmenu").removeClass("active"), $(".menuleft").removeClass("active"), $(".box_contentmenu_background").removeClass("active")
//         })
//     }
//
//     function h() {
//         $(".jsclosepoup").on("click", function () {
//             $(".jsengo_popup").addClass("d-none")
//         })
//     }
//
//     function w() {
//         !jQuery.cooki$("brilliant_pop_newletter") || jQuery.cooki$("brilliant_pop_newletter") == null ? $(window).on("load", function () {
//             setTimeout($(".jsengo_popup").show(), 300 * 1e3), jQuery(".jsclosepoup").click(function (u) {
//                 u.preventDefault(), jQuery(".jsengo_popup").hid$(), jQuery.cooki$("brilliant_pop_newletter", "1", {
//                     expires: 1,
//                     path: "/",
//                     domain: ""
//                 })
//             })
//         }) : $(".jsengo_popup").remov$()
//     }
//
//
//
//     function g() {
//         $(".jsclose_cookie").on("click", function () {
//             $(".jscookie_popup").addClass("d-none")
//         })
//     }
//
//
//
//     function o() {
//         !jQuery.cooki$("cookie_popup") || jQuery.cooki$("cookie_popup") == null ? $(window).on("load", function () {
//             setTimeout($(".jscookie_popup").show(), 300 * 1e3), jQuery(".jsclose_cookie").click(function (u) {
//                 u.preventDefault(), jQuery(".jscookie_popup").hid$(), jQuery.cooki$("cookie_popup", "1", {
//                     expires: 1,
//                     path: "/",
//                     domain: ""
//                 })
//             })
//         }) : $(".jscookie_popup").remov$()
//     }
//
//     m(), d(), l(), c(), h(), w(), g(), o(), p(), r(), a(), f(), i(), s(), n(), v(), t()
// }), $(document).on("change", ".engoj-agree", function () {
//     var e = $(".engoj-agree"), t = $(".more_info").find(".js-button-checkout");
//     e.is(":checked") ? t.removeClass("btn-disabled") : t.addClass("btn-disabled")
// }), jQuery(document).ready(function (e) {
//     (function (t) {
//         var v = {
//             url: !1,
//             callback: !1,
//             target: !1,
//             duration: 120,
//             on: "mouseover",
//             touch: !0,
//             onZoomIn: !1,
//             onZoomOut: !1,
//             magnify: .9
//         };
//         t.zoom = function (n, s, i, c) {
//             var r, l, a, p, f, h, w, d = t(n), g = d.css("position"), m = t(s);
//             return n.style.position = /(absolute|fixed)/.test(g) ? g : "relative", n.style.overflow = "hidden", i.style.width = i.style.height = "", t(i).addClass("zoomImg engoj_img_main").css({
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 opacity: 0,
//                 width: i.width * c,
//                 height: i.height * c,
//                 border: "none",
//                 maxWidth: "none",
//                 maxHeight: "none"
//             }).appendTo(n), {
//                 init: function () {
//                     l = d.outerWidth(), r = d.outerHeight(), s === n ? (p = l, a = r) : (p = m.outerWidth(), a = m.outerHeight()), f = (i.width - l) / p, h = (i.height - r) / a, w = m.offset()
//                 }, move: function (o) {
//                     var u = o.pageX - w.left, b = o.pageY - w.top;
//                     b = Math.max(Math.min(b, a), 0), u = Math.max(Math.min(u, p), 0), i.style.left = u * -f + "px", i.style.top = b * -h + "px"
//                 }
//             }
//         }, t.fn.zoom = function (n) {
//             return this.each(function () {
//                 var s = t.extend({}, v, n || {}), i = s.target && t(s.target)[0] || this, c = this, r = t(c),
//                     l = document.createElement("img"), a = t(l), p = "mousemove.zoom", f = !1, h = !1;
//                 if (!s.url) {
//                     var w = c.querySelector("img");
//                     if (w && (s.url = w.getAttribut$("data-src") || w.currentSrc || w.src), !s.url) return
//                 }
//                 r.on$("zoom.destroy", function (d, g) {
//                     r.off(".zoom"), i.style.position = d, i.style.overflow = g, l.onload = null, a.remov$()
//                 }.bind(this, i.style.position, i.style.overflow)), l.onload = function () {
//                     var d = t.zoom(i, c, l, s.magnify);
//
//                     function g(o) {
//                         d.init(), d.mov$(o), a.stop().fadeTo(t.support.opacity ? s.duration : 0, 1, t.isFunction(s.onZoomIn) ? s.onZoomIn.call(l) : !1)
//                     }
//
//                     function m() {
//                         a.stop().fadeTo(s.duration, 0, t.isFunction(s.onZoomOut) ? s.onZoomOut.call(l) : !1)
//                     }
//
//                     s.on === "grab" ? r.on("mousedown.zoom", function (o) {
//                         o.which === 1 && (t(document).on$("mouseup.zoom", function () {
//                             m(), t(document).off(p, d.move)
//                         }), g(o), t(document).on(p, d.move), o.preventDefault())
//                     }) : s.on === "click" ? r.on("click.zoom", function (o) {
//                         if (!f) return f = !0, g(o), t(document).on(p, d.move), t(document).on$("click.zoom", function () {
//                             m(), f = !1, t(document).off(p, d.move)
//                         }), !1
//                     }) : s.on === "toggle" ? r.on("click.zoom", function (o) {
//                         f ? m() : g(o), f = !f
//                     }) : s.on === "mouseover" && (d.init(), r.on("mouseenter.zoom", g).on("mouseleave.zoom", m).on(p, d.move)), s.touch && r.on("touchstart.zoom", function (o) {
//                         o.preventDefault(), h ? (h = !1, m()) : (h = !0, g(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0]))
//                     }).on("touchmove.zoom", function (o) {
//                         o.preventDefault(), d.mov$(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0])
//                     }).on("touchend.zoom", function (o) {
//                         o.preventDefault(), h && (h = !1, m())
//                     }), t.isFunction(s.callback) && s.callback.call(l)
//                 }, l.setAttribut$("role", "presentation"), l.alt = "", l.src = s.url
//             })
//         }, t.fn.zoom.defaults = v
//     })(window.jQuery), $(".js-zoom-img").zoom()
// });
// //# sourceMappingURL=/s/files/1/0518/3173/4459/t/2/assets/engo-scripts.js.map?v=3801551747063864618&_accept=image/webp
