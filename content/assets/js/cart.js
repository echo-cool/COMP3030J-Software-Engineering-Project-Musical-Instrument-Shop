// function count_change(id) {
//     let id_for_number = "#quantity-" + id;
//     let id_for_price = "#price-" + id;
//     let id_for_total = "#total-" + id;
//     let total = parseFloat($(id_for_number).val()) * parseFloat($(id_for_price).val())
//     console.log("count total for item", total)
//     $(id_for_total).val(total_round_2(total));
//     fetchHeaderCartList();
// }
//
// // 点加号的时候触发
// function count_change_add(id) {
//     let id_for_number = "#quantity-" + id;
//     let id_for_price = "#price-" + id;
//     let id_for_total = "#total-" + id;
//     let total = (parseFloat($(id_for_number).val()) + 1) * parseFloat($(id_for_price).val())
//     console.log("count total for item", total)
//     $.get("/cart/product_add_cart/" + id,);
//     $(id_for_total).val(total_round_2(total));
//     fetchHeaderCartList();
// }
//
// // 加个小数点，好看
// function total_round_2(raw) {
//     if (raw.toString().includes(".")) {
//         return Math.floor(Number(raw) * 100) / 100
//     } else {
//         return raw + ".0";
//     }
//
// }
//
// // 点减号的时候触发
// function count_change_minus(id) {
//     let id_for_number = "#quantity-" + id;
//     let id_for_price = "#price-" + id;
//     let id_for_total = "#total-" + id;
//     let total = 1;
//     if (parseFloat($(id_for_number).val()) > 1) {
//         $.get("/cart/product_minus_cart/" + id,);
//         total = (parseFloat($(id_for_number).val()) - 1) * parseFloat($(id_for_price).val());
//         $(id_for_total).val(total_round_2(total));
//     } else {
//         total = 1;
//     }
//     console.log("count total for item", total)
//     fetchHeaderCartList();
// }
//
// function remove_cart_item(id) {
//     {
//         let id = this.id;
//     }
//     console.log("delete", id);
//     $.ajax({
//         url: "/api/cart/" + id + "/",
//         method: "DELETE",
//         headers: {
//             'X-CSRFTOKEN': '{{ csrf_token }}'
//         },
//         success: function (res) {
//             let id_for_delete = "#cart-" + id;
//             $(id_for_delete).remove();
//         },
//         error: function (res) {
//             console.log("ji", id, res);
//         }
//     })
//     fetchHeaderCartList();
// }
//
//
// function subtotal(id) {
//     let id_for_number = "#quantity-" + id;
//     let id_for_price = "#price-" + id;
//     let id_for_total = "#total-" + id;
//     $(id_for_total)[0].value = parseFloat($(id_for_number)[0].value) * parseFloat($(id_for_price)[0].value);
// }
//
//
// function total() {
//     $("#total")[0].value = parseFloat($("#subtotal_all")[0].value) + parseFloat($("#shipping")[0].value);
// }
//
