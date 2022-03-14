from django.urls import path

from .views import model_view, index, cart, product_details, model_design, leave_review, \
    leave_review2, \
    confirm_submit, product_search, product_search_by_category, empty_search, category_view, product_add_cart, \
    product_minus_cart, product_details_test_model, wishlist

app_name = 'shop'
urlpatterns = [
    path('', index, name='index'),
    path("product_details/<int:product_id>", product_details, name="product_details"),
    path("product_details_test_model/<int:product_id>", product_details_test_model,
         name="product_details_test_model"),
    path("leave_review/<int:order_id>/<int:instrument_id>", leave_review, name="leave_review"),
    # path("leave_review2/", leave_review2, name="leave_review2"),
    path("confirm_submit/", confirm_submit, name="confirm_submit"),
    # path('checkout/', checkout, name='checkout'),
    # path('confirm/', confirm, name='confirm'),
    path("model_view/<int:product_id>", model_view, name='model_view'),
    path('cart/', cart, name='cart'),
    path("cart/product_add_cart/<int:instrument_id>", product_add_cart, name='product_add_cart'),
    path("cart/product_minus_cart/<int:instrument_id>", product_minus_cart, name='product_minus_cart'),
    path("model_design/<str:model_id>", model_design, name='model_design'),
    path("product_search/category/", product_search_by_category, name='search_by_category'),
    path("product_search/<str:keyword>", product_search, name='product_search'),
    path("product_search/", empty_search, name='empty_search'),
    path("category/<str:category_id>", category_view, name='category_view'),
]
