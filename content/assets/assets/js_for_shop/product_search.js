js_draw_filter();

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
        })
    })
}