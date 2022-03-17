
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
