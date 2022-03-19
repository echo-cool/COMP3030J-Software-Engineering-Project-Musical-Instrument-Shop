from django.urls import path

from .views import model_view, index, cart, product_details, model_design, leave_review, \
    leave_review2, \
    confirm_submit, product_search, product_search_by_category, empty_search, category_view, personal_profile

app_name = 'shop'
urlpatterns = [
    path('', index, name='index'),
    path("product_details/<int:product_id>", product_details, name="product_details"),
    path("leave_review/<int:order_id>/<int:instrument_id>", leave_review, name="leave_review"),
    # path("leave_review2/", leave_review2, name="leave_review2"),
    path("confirm_submit/", confirm_submit, name="confirm_submit"),
    path("personal_profile/", personal_profile, name="personal_profile"),
    # path('checkout/', checkout, name='checkout'),
    # path('confirm/', confirm, name='confirm'),
    path("model_view/<int:product_id>", model_view, name='model_view'),
    path('cart/', cart, name='cart'),
    path("model_design/", model_design, name='model_design'),
    path("product_search/category/", product_search_by_category, name='search_by_category'),
    path("product_search/<str:keyword>", product_search, name='product_search'),
    path("product_search/", empty_search, name='empty_search'),
    path("category/<str:category_id>", category_view, name='category_view'),
]
