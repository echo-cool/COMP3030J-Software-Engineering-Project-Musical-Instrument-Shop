activateCategorySearch();

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

jQuery(function ($) {
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
$('.filters_listing_1 .dropdown-menu .filter_type ul').on('click', function (e) {
    e.stopPropagation();
});

//Filters version 2 mobile
$('a.open_filters').on("click", function () {
    $('.filter_col').toggleClass('show');
    $('main').toggleClass('freeze');
    $('.layer').toggleClass('layer-is-visible');
});

//Filters collapse

// post with ajax need csrf-token, use this function to create one
// Reference: https://www.cnblogs.com/2mei/p/9251868.html
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

let csrf_token = getCookie('csrftoken');

function activateCategorySearch() {
    console.log("activate category search");
    $(function () {
        $("#filter_1 input[type='checkbox']").each(function (i, item) {
            console.log("search_list", item);
            item.addEventListener('click', function () {
                let checked_list = [];
                $("#filter_1 input[type='checkbox']").each(function (i, item) {
                    checked_list.push(item.checked ? 1 : 0);
                });
                console.log("search_list", checked_list);
                $.ajax({
                    url: "/product_search/category/",
                    type: "GET",
                    // dataType: "json",
                    // headers: {"X-CSRFToken": csrf_token},
                    data: {
                        "checked_category": checked_list.join(""),
                    },
                    success: function (data) {
                        console.log(data);
                        // console.log(data.status);
                        // console.log(data.message);
                        $(".product-list-ajax").html(data)
                    },
                });
            });
        });
    });
}

// function searched_list() {
//     var $headingFilters = $('.filter_type h4 a');
//     $headingFilters.on('click', function () {
//         $(this).toggleClass('opened');
//     })
//     $headingFilters.on('click', function () {
//         $(this).toggleClass('closed');
//     });
//
// }