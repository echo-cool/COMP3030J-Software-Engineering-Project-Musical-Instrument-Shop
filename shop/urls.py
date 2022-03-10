from django.urls import path

from .views import checkout, confirm, model_view, index, cart, product_details, model_design, leave_review, \
    leave_review2, \
    confirm_submit

app_name = 'shop'
urlpatterns = [
    path('', index, name='index2'),
    path("product_details/<int:product_id>", product_details, name="product_details"),
    path("leave_review/<int:order_id>/<int:instrument_id>", leave_review, name="leave_review"),
    path("leave_review2/", leave_review2, name="leave_review2"),
    path("confirm_submit/", confirm_submit, name="confirm_submit"),
    path('checkout/', checkout, name='checkout'),
    path('confirm/', confirm, name='confirm'),
    path("model_view/<int:product_id>", model_view, name='model_view'),
    path('cart/', cart, name='cart'),
    path("model_design/", model_design, name='model_design'),
]
