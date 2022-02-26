from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='management_index'),
    path('order_management/', views.order_management, name='management_order_management'),
]
