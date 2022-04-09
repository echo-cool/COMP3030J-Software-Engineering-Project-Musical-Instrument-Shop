js_draw_filter();
activateCol();

function js_draw_filter() {
    console.log("activate filter");

    $('.js-draw-filter-btn').on('click', function () {
        $(this).addClass('js-draw-filter-open');
        $(this).removeClass('js-draw-filter-btn');
        $('.js-draw-filter').removeClass('draw_filter').addClass('col-lg-3');
        $('.js-draw-filter-2').removeClass('col-lg-12').addClass('col-lg-9');

        $('.js-draw-filter-open').on('click', function () {
            console.log("filter open");
            $(this).addClass('js-draw-filter-btn');
            $(this).removeClass('js-draw-filter-open');
            $('.js-draw-filter').addClass('draw_filter').removeClass('col-lg-3');
            $('.js-draw-filter-2').addClass('col-lg-12').removeClass('col-lg-9');
        })
        setTimeout(function () {
            js_draw_filter();
        });
    });
}

function activateCol() {
    console.log("activate  COL");
    let arrays = $(".prod_per>a");
    arrays.click(function () {
        for (let i of arrays) {
            i.className = i.className.replace("active", "");
        }
        console.log(this.getAttribute("class"));
        this.className = this.className + " active";
        removeCol();
        if (this.className.includes("size_2")) {
            $(".js_size_prod").addClass('col-lg-6');
        } else if (this.className.includes("size_3")) {
            $(".js_size_prod").addClass('col-lg-4');
        } else if (this.className.includes("size_4")) {
            $(".js_size_prod").addClass('col-lg-3');
        } else if (this.className.includes("size_5")) {
            $(".js_size_prod").addClass('col-lg-2');
        }
    })


    function removeCol() {
        $(".js_size_prod").removeClass('col-lg-6').removeClass('col-lg-4').removeClass('col-lg-3').removeClass('col-lg-2');
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// jQuery(document).ready(function ($) {
//     setInterval(function () {
//         $('.popup_random_prod').addClass('hide_popup_random_prod');
//     }, 10000)
//     $('.close_popup').on('click', function () {
//         $('.popup_random_prod').addClass('hide_popup_random_prod');
//
//     });
//     setInterval(function () {
//         $('.popup_random_prod').removeClass('hide_popup_random_prod');
//         var dem = 8 - 1;
//         var initial2 = random(0, dem);
//
//         var count2 = initial2;
//         $('.popup_random_prod').find('ul').children().addClass('d-none');
//         $('.popup_random_prod').find('ul').children().eq(count2).removeClass('d-none');
//         var initial = random(1, 60);
//         var count = initial;
//         var x = document.getElementsByClassName("random_minute");
//         x[count2].innerHTML = count;
//
//         var max = $('.js-readname').attr('data-max') - 1;
//         var text = $('.js-readname').children().eq(random(0, max)).text();
//         $('.js-name').text(text);
//
//         var max2 = $('.js-readaddress').attr('data-max') - 1;
//         var text2 = $('.js-readaddress').children().eq(random(0, max2)).text();
//         $('.js-address').text(text2);
//
//     }, 15000)
// })

