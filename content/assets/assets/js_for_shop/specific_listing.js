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

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
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
    $(function () {
        console.log('activateCategorySearch');
        var $checkboxes = $(".category-checkbox");

        $checkboxes.on("change", function () {
            var param = "";
            $checkboxes.each(function () {
                if (this.checked) {
                    param += "|" + this.id.split('__')[1];
                }
            });
            param = param.substring(1);
            window.location.href = addUrlPara(window.location.href, 'category', param);
        })

        if (getQueryString('category')) {
            const checked_list = getQueryString('category').split('|');
            if (checked_list.length > 0) {
                $checkboxes.each(function () {
                    this.checked = checked_list.includes(this.id.split('__')[1]);
                });
            }
        }


    });
}

// function activateCategorySearch() {
//     console.log("activate category search");
//     $(function () {
//         $("#filter_1 input[type='checkbox']").each(function (i, item) {
//             console.log("search_list", item);
//             item.addEventListener('click', function () {
//                 let checked_list = [];
//                 $("#filter_1 input[type='checkbox']").each(function (i, item) {
//                     checked_list.push(item.checked ? 1 : 0);
//                 });
//                 console.log("search_list", checked_list);
//                 $.ajax({
//                     url: "/product_search/category/",
//                     type: "GET",
//                     // dataType: "json",
//                     // headers: {"X-CSRFToken": csrf_token},
//                     data: {
//                         "checked_category": checked_list.join(""),
//                         "search_keyword": getQueryString("search"),
//                     },
//                     success: function (data) {
//                         console.log(data);
//                         // console.log(data.status);
//                         // console.log(data.message);
//                         $(".product-list-ajax").html(data)
//                     },
//                 });
//             });
//         });
//     });
// }
//
// function activateCategoryState() {
//
//     var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};
//     var $checkboxes = $(".category-checkbox");
//
//     $checkboxes.on("change", function () {
//         $checkboxes.each(function () {
//             checkboxValues[this.id] = this.checked;
//         });
//         localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
//         console.log(checkboxValues);
//     });
//
//     $.each(checkboxValues, function (key, value) {
//         $("#" + key).prop('checked', value);
//     });
// }

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