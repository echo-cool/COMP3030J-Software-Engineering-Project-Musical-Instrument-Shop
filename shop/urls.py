from django.shortcuts import redirect
from django.urls import path, reverse

from .views import model_view, index, cart, product_details, model_design, leave_review, \
    product_details_test_model, wishlist, personal_profile, \
    checkout, model_design2, home, image_upload, \
    orders, product_search, product_search_by_category, category_view, personal_profile, \
    about, game, chinese, new_header, chat_ai, shipping_details, checkout_success, forbidden, get_pictures, \
    image_search, model_checkout

app_name = 'shop'
urlpatterns = [
    path('', home, name='index'),
    path('forbidden/', forbidden, name="forbidden"),
    path('home', lambda x: redirect(reverse("shop:index")), name='home'),
    path('shopping', index, name='shopping'),
    path("product_details/<int:product_id>", product_details, name="product_details"),
    path("product_details_test_model/<int:product_id>", product_details_test_model,
         name="product_details_test_model"),
    path("leave_review/<int:instrument_id>", leave_review, name="leave_review"),
    path("personal_profile/", personal_profile, name="personal_profile"),
    path('checkout/', checkout, name='checkout'),
    path('checkout/success/', checkout_success, name='checkout_success'),

    path('shipping_details/<int:uncompletedOrder_id>', shipping_details, name='shipping_details'),
    # path('confirm/', confirm, name='confirm'),
    path("model_view/<int:product_id>", model_view, name='model_view'),
    path('cart/', cart, name='cart'),
    path('model_checkout/', model_checkout, name='model_checkout'),

    # path('cart2/', cart2, name='cart'),
    # path("cart/product_add_cart/<int:instrument_id>", product_add_cart, name='product_add_cart'),
    # path("cart/product_minus_cart/<int:instrument_id>", product_minus_cart, name='product_minus_cart'),
    path("model_design/color", model_design, name='model_design'),
    path("model_design2/<str:model_id>", model_design2, name='model_design2'),
    path("product_search/category/", product_search_by_category, name='search_by_category'),
    path("product_search/", product_search, name='product_search'),
    path("category/<str:category_id>", category_view, name='category_view'),
    path('wishlist/', wishlist, name='wishlist'),
    path('orders/', orders, name='orders'),

    path('about', about, name='about'),
    path('game', game, name='game'),
    path('chinese', chinese, name='chinese'),
    path('new_header', new_header, name='new_header'),
    path('chat_ai', chat_ai, name='chat_ai'),
    path('image_upload', image_upload, name='image_upload'),
    path('data_verification/', get_pictures, name='get_pictures'),
    path('image_search/<str:result_key>', image_search, name='image_search'),
]
