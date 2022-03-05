from django.urls import path

from .views import checkout, confirm, model_view, index, cart, product_details, tes

app_name = 'shop'
urlpatterns = [
    path('', index, name='index'),
    path("product_details/<int:product_id>", product_details, name="product_details"),
    path('checkout/', checkout, name='checkout'),
    path('confirm/', confirm, name='confirm'),
    path("model_view/<int:product_id>", model_view, name='model_view'),
    path('cart/', cart, name='cart'),
    path("model2/", tes, name='tes'),
]
