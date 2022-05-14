activateSearch();
activateMiniCart();
activateHeightWhat();

update_total_money();

menumobile();
menutoolbar();

function menumobile() {
    $('.menuleft').on('click', function () {
        $(this).toggleClass('active');
        $('.box_contentmenu').toggleClass('active');
        $('.box_contentmenu_background').toggleClass('active');
        $('body').addClass('activemenu_mobile')
    });
    $('.box_contentmenu_background').on('click', function () {
        $(this).removeClass('active');
        $('.box_contentmenu').removeClass('active');
        $('.menuleft').removeClass('active');
        $('.box_contentmenu_background').removeClass('active');
        $('body').removeClass('activemenu_mobile');
    });
    $('.js-eveland-close').on('click', function () {
        $(this).removeClass('active');
        $('.box_contentmenu').removeClass('active');
        $('.menuleft').removeClass('active');
        $('.box_contentmenu_background').removeClass('active');
        $('body').removeClass('activemenu_mobile');
    });
}

function menutoolbar() {
    $('.btn_bar').on('click', function () {
        $(this).toggleClass('active');
        $('.box_contentmenu').toggleClass('active');
        $('.box_contentmenu_background').toggleClass('active');
    });
    $('.box_contentmenu_background').on('click', function () {
        $(this).removeClass('active');
        $('.box_contentmenu').removeClass('active');
        $('.menuleft').removeClass('active');
        $('.box_contentmenu_background').removeClass('active');
    });
    $('.js-eveland-close').on('click', function () {
        $(this).removeClass('active');
        $('.box_contentmenu').removeClass('active');
        $('.menuleft').removeClass('active');
        $('.box_contentmenu_background').removeClass('active');
    });
};

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
                $('.header-v2-h2').css({'background': 'rgba(255, 255, 255)'});
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


function update_total_money() {
    let cart_items = $(".minicart_item");
    let all_total_money = 0;
    for (let i = 0; i < cart_items.length; i++) {
        let cart_item = cart_items[i];
        let price = cart_item.getAttribute("data-price");
        let quantity = $(cart_item).find("#cart-count").text();
        console.log(price)
        let total_money = price * quantity;
        all_total_money += total_money;
        // {#let total_money_element = document.getElementById("total-" + id);#}
        // {#total_money_element.innerHTML = total_money;#}
    }
    $('#total-price').text("$" + all_total_money)
}
