function count_change(id) {
    let id_for_number = "#quantity-" + id;
    let id_for_price = "#price-" + id;
    let id_for_total = "#total-" + id;
    let total = parseFloat($(id_for_number).val()) * parseFloat($(id_for_price).val())
    console.log("count total for item", total)
    $(id_for_total).val(total);
    fetchHeaderCartList();
}

function count_change_add(id) {
    let id_for_number = "#quantity-" + id;
    let id_for_price = "#price-" + id;
    let id_for_total = "#total-" + id;
    let total = (parseFloat($(id_for_number).val()) + 1) * parseFloat($(id_for_price).val())
    console.log("count total for item", total)
    $.get("/cart/product_add_cart/" + id,);
    $(id_for_total).val(total);
    fetchHeaderCartList();

}

function count_change_minus(id) {
    let id_for_number = "#quantity-" + id;
    let id_for_price = "#price-" + id;
    let id_for_total = "#total-" + id;
    let total = 1;
    if (parseFloat($(id_for_number).val()) > 1) {
        $.get("/cart/product_minus_cart/" + id,);
        total = (parseFloat($(id_for_number).val()) - 1) * parseFloat($(id_for_price).val());
        $(id_for_total).val(parseFloat(String(total)));
    } else {
        total = 1;
    }
    console.log("count total for item", total)
    fetchHeaderCartList();
}

function remove_cart_item(id) {
    {
        let id = this.id;
    }
    console.log("delete", id);
    $.ajax({
        url: "/api/cart/" + id + "/",
        method: "DELETE",
        headers: {
            'X-CSRFTOKEN': '{{ csrf_token }}'
        },
        success: function (res) {
            let id_for_delete = "#cart-" + id;
            $(id_for_delete).remove();
        },
        error: function (res) {
            console.log("ji", id, res);
        }
    })
    fetchHeaderCartList();
}