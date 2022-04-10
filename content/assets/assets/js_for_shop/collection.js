$("body").delegate('.filter-tag a:not(".clear"), .filter-tag label', 'click', function (e) {
    $(this).toggleClass('active');
    var currentTags = [];

    if (Shopify.queryParams.constraint) {
        currentTags = Shopify.queryParams.constraint.split('+');
    }

    if (!window.filter_mul_choice && !$(this).prev().is(":checked")) {
        var otherTag = $(this).parents('.filter-tag').find("input:checked");
        if (otherTag.length > 0) {
            var tagName = otherTag.val();
            if (tagName) {
                var tagPos = currentTags.indexOf(tagName);
                if (tagPos >= 0) {
                    currentTags.splice(tagPos, 1);
                }
            }
        }
    }

    var tagName = $(this).prev().val();
    if (tagName) {
        var tagPos = currentTags.indexOf(tagName);
        if (tagPos >= 0) {
            currentTags.splice(tagPos, 1);
        } else {
            currentTags.push(tagName);
        }
    }
    if (currentTags.length) {
        Shopify.queryParams.constraint = currentTags.join('+');
    } else {
        delete Shopify.queryParams.constraint;
    }
    collection.filterAjaxClick();
    e.preventDefault();
});

$("body").delegate('.refined-widgets a.clear-all', 'click', function (e) {
    delete Shopify.queryParams.constraint;
    delete Shopify.queryParams.q;
    collection.filterAjaxClick();
    e.preventDefault();
    $('.filter-tag a:not(".clear"), .filter-tag label').removeClass('active');

});

$("body").delegate('.filter-block .clear', 'click', function (e) {
    var currentTags = [];
    var filterTag = $(this).parent().parent();
    if (Shopify.queryParams.constraint) {
        currentTags = Shopify.queryParams.constraint.split('+');
    }
    filterTag.find("input:checked").each(function () {
        var selectedTag = $(this);
        var tagName = selectedTag.val();
        if (tagName) {
            var tagPos = currentTags.indexOf(tagName);
            if (tagPos >= 0) {
                //remove tag
                currentTags.splice(tagPos, 1);
            }
        }
    });
    filterTag.find("a").each(function () {
        $(this).removeClass("active");
    });
    if (currentTags.length) {
        Shopify.queryParams.constraint = currentTags.join('+');
    } else {
        delete Shopify.queryParams.constraint;
    }
    collection.filterAjaxClick();
    e.preventDefault();
});

$(".filter-tag").each(function () {
    var filterTag = $(this);
    if (filterTag.find("input:checked").length > 0) {
        //has active tag
        filterTag.find(".clear").show().click(function (e) {
            var currentTags = [];
            if (Shopify.queryParams.constraint) {
                currentTags = Shopify.queryParams.constraint.split('+');
            }
            filterTag.find("input:checked").each(function () {
                var selectedTag = $(this);
                var tagName = selectedTag.val();
                if (tagName) {
                    var tagPos = currentTags.indexOf(tagName);
                    if (tagPos >= 0) {
                        //remove tag
                        currentTags.splice(tagPos, 1);
                    }
                }
            });
            if (currentTags.length) {
                Shopify.queryParams.constraint = currentTags.join('+');
            } else {
                delete Shopify.queryParams.constraint;
            }
            collection.filterAjaxClick();
            e.preventDefault();
        });
    }
});