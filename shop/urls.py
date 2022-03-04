from django.urls import path

from .views import checkout, confirm, model, index

app_name = 'shop'
urlpatterns = [
    path('', index, name='index'),
    path('checkout', checkout, name='checkout'),
    path('confirm', confirm, name='confirm'),
    path("model", model, name='model'),
]
