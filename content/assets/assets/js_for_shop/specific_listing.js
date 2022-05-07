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
    activatePriceSearch();
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

function changeURLStatic(cate) {

    let price = getQueryString('price');
    price = price === null ? "" : price;
    let section = getQueryString('section');
    let category = "category=";
    let search_key = getQueryString('search');
    search_key = search_key === null ? "" : search_key;
    section = section === null ? "" : section;

    for (let i = 0; i < cate.length; i++) {
        if (i === 0) {
            category += cate[i];
        } else {
            category += "|" + cate[i];
        }
    }
    history.replaceState(null, null, "?section=" + section + "&search=" + search_key + "&" + category + "&price=" + price);

    $.ajax({
        url: "/product_search/?section=" + section + "&search=" + search_key + "&" + category + "&price=" + price,
        method: "GET",
        success: function (res) {
            $(".collection_prod").html($(res).find('.collection_prod')[0].innerHTML);
            console.log("search ajax refresh");
        }
    });
}


function changeURLStaticPrice(pri) {
    let section = getQueryString('section');
    let category = getQueryString('category');
    let search_key = getQueryString('search');

    let price = 'price=';
    search_key = search_key === null ? "" : search_key;
    category = category === null ? "" : category;
    section = section === null ? "" : section;

    for (let i = 0; i < pri.length; i++) {
        if (i === 0) {
            price += pri[i];
        } else {
            price += "|" + pri[i];
        }
    }

    history.replaceState(null, null, "?section=" + section + "&search=" + search_key + "&category=" + category + "&" + price);

    $.ajax({
        url: "/product_search/?section=" + section + "&search=" + search_key + "&category=" + category + "&" + price,
        method: "GET",
        success: function (res) {
            $(".collection_prod").html($(res).find('.collection_prod')[0].innerHTML);
            $(".dropdown-label").html($(res).find('.dropdown-label')[0].innerHTML);
            console.log("search ajax refresh");
        }
    });
}

function changeURLPage(pa) {
    let page = "page=" + pa;


    let price = getQueryString('price');
    price = price === null ? "" : price;
    let section = getQueryString('section');
    let category = getQueryString('category');
    console.log("category is:", category)
    let search_key = getQueryString('search');
    search_key = search_key === null ? "" : search_key;
    category = category === null ? "" : category;
    section = section === null ? "" : section;
    price = price === null ? "" : price;


    history.replaceState(null, null, "?section=" + section + "&search=" + search_key + "&category=" + category + "&price=" + price + "&" + page);

    $.ajax({
        url: "/product_search/?section=" + section + "&search=" + search_key + "&category=" + category + "&" + page,
        method: "GET",
        success: function (res) {
            $(".collection_prod").html($(res).find('.collection_prod')[0].innerHTML);
            $(".dropdown-label").html($(res).find('.dropdown-label')[0].innerHTML);

            console.log("search ajax refresh");
        }
    });
}

function activateCategorySearch() {
    $(function () {
        console.log('activateCategorySearch');
        let $checkboxes = $(".category-checkbox");
        let categories = $(".category-name");

        // $checkboxes.on("change", function () {
        //     let param = "";
        //     $checkboxes.each(function () {
        //         if (this.checked) {
        //             param += "|" + this.id.split('__')[1];
        //         }
        //     });
        //     param = param.substring(1);
        //     window.location.href = addUrlPara(window.location.href, 'category', param);
        // })


        categories.on("click", function () {
            let ind = $(this).attr("id").replace('category__', "");
            console.log("click", ind);

            if (getQueryString('category')) {
                let checked_list = getQueryString('category').split('|');
                console.log(checked_list, checked_list.indexOf(ind));
                if (checked_list.indexOf(ind) !== -1) {
                    let checked_list_new = [];
                    for (let i = 0; i < checked_list.length; i++) {
                        console.log()
                        if (checked_list[i] !== ind) {
                            checked_list_new.push(checked_list[i]);
                        }
                    }
                    changeURLStatic(checked_list_new);
                } else {
                    checked_list.push(ind);
                    changeURLStatic(checked_list);
                }
            } else {
                changeURLStatic([ind]);
            }


            let param = "";

            if (!$(this).hasClass('active')) {
                $(this).addClass('active')
            } else {
                $(this).removeClass('active')
            }

            if ($(this).prev().is(':checked')) {
                $(this).prev().removeClass("checked");
                $(this).prev().prop("checked", false);
            } else {
                $(this).prev().addClass("checked");
                $(this).prev().prop("checked", true);
            }

            let categories = $(".category-name");
            categories.each(function () {
                let checkbox = $(this).prev();
                // console.log(checkbox.is(':checked'));
                if (checkbox.is(':checked')) {
                    param += "|" + this.id.split('__')[1];
                }
            });
            param = param.substring(1);
            // console.log(param)
            // console.log(categories)

            // window.location.href = addUrlPara(window.location.href, 'category', param);
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
                    } else {
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


function activatePriceSearch() {
    $(function () {
        console.log('activatePriceSearch');
        let $checkboxes = $(".category-checkbox2");
        let categories = $(".category-name2");

        categories.on("click", function () {
            let ind = $(this).attr("id").replace('category2__', "");
            console.log("click", ind);

            if (getQueryString('price')) {
                let checked_list = getQueryString('price').split('|');
                console.log(checked_list, checked_list.indexOf(ind));
                if (checked_list.indexOf(ind) !== -1) {
                    let checked_list_new = [];
                    for (let i = 0; i < checked_list.length; i++) {
                        console.log()
                        if (checked_list[i] !== ind) {
                            checked_list_new.push(checked_list[i]);
                        }
                    }
                    changeURLStaticPrice(checked_list_new);
                } else {
                    checked_list.push(ind);
                    changeURLStaticPrice(checked_list);
                }
            } else {
                changeURLStaticPrice([ind]);
            }


            let param = "";

            if (!$(this).hasClass('active')) {
                $(this).addClass('active')
            } else {
                $(this).removeClass('active')
            }

            if ($(this).prev().is(':checked')) {
                $(this).prev().removeClass("checked");
                $(this).prev().prop("checked", false);
            } else {
                $(this).prev().addClass("checked");
                $(this).prev().prop("checked", true);
            }

            let categories = $(".category-name");
            categories.each(function () {
                let checkbox = $(this).prev();
                // console.log(checkbox.is(':checked'));
                if (checkbox.is(':checked')) {
                    param += "|" + this.id.split('__')[1];
                }
            });
            param = param.substring(1);
            // console.log(param)
            // console.log(categories)

            // window.location.href = addUrlPara(window.location.href, 'category', param);
        })

        if (getQueryString('price')) {
            const checked_list = getQueryString('price').split('|');
            if (checked_list.length > 0) {
                $checkboxes.each(function () {
                    // this.checked = checked_list.includes(this.id.split('__')[1]);
                    if (checked_list.includes(this.id.split('__')[1])) {
                        $(this).attr("checked", true);
                        if (!$(this).next().hasClass('active')) {
                            $(this).next().addClass('active')
                        }
                    } else {
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

