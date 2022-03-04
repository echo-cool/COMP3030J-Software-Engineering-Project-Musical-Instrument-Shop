from django.urls import path

from . import views

from .views import create_order, confirm

app_name = 'shop'
urlpatterns = [
    path('', views.index, name='index'),
    path('create_order', create_order, name='create_order'),
    path('confirm', confirm, name='confirm'),
    path("model", views.model, name='model'),
]
