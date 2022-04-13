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
    activateCategorySearch();
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
var $headingFilters = $('.filter_type h4 a');
$headingFilters.on('click', function () {
    $(this).toggleClass('opened');
})
$headingFilters.on('click', function () {
    $(this).toggleClass('closed');
});

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}

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
        let categories = $(".category-name");

        // $checkboxes.on("change", function () {
        //     var param = "";
        //     $checkboxes.each(function () {
        //         if (this.checked) {
        //             param += "|" + this.id.split('__')[1];
        //         }
        //     });
        //     param = param.substring(1);
        //     window.location.href = addUrlPara(window.location.href, 'category', param);
        // })

        categories.on("click", function () {

            var param = "";
            // $(this).prev().attr("checked", !$(this).prev().is(':checked'));\
            if ($(this).prev().is(':checked')) {
                $(this).prev().prop("checked", false);
            }
            else {
                $(this).prev().prop("checked", true);
            }
            let categories = $(".category-name");
            categories.each(function () {
                var checkbox = $(this).prev();
                console.log(checkbox.is(':checked'));
                if (checkbox.is(':checked')) {
                    param += "|" + this.id.split('__')[1];
                }
            });
            param = param.substring(1);
            console.log(param)
            console.log(categories)

            window.location.href = addUrlPara(window.location.href, 'category', param);
        })

        if (getQueryString('category')) {
            const checked_list = getQueryString('category').split('|');
            if (checked_list.length > 0) {
                $checkboxes.each(function () {
                    // this.checked = checked_list.includes(this.id.split('__')[1]);
                    if (checked_list.includes(this.id.split('__')[1])) {
                        $(this).attr("checked", true);
                        if (!$(this).next().hasClass('active')) {
                            $(this).next().addClass('active')
                        }
                    }
                    else {
                        $(this).attr("checked", false);
                        if ($(this).next().hasClass('active')) {
                            $(this).next().removeClass('active')
                        }
                    }
                });
            }
        }


    });
}
