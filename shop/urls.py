from django.urls import path

from .views import checkout, confirm, model, index, cart, product_details

app_name = 'shop'
urlpatterns = [
    path('', index, name='index'),
    path("product_details/<int:product_id>", product_details, name="product_details"),
    path('checkout/', checkout, name='checkout'),
    path('confirm/', confirm, name='confirm'),
    path("model/", model, name='model'),
    path('cart/', cart, name='cart'),
]
