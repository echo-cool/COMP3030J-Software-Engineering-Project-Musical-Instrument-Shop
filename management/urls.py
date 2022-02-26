from django.urls import path

from . import views

app_name = 'management'
urlpatterns = [
    path('', views.index, name='index'),
    path('order_management/', views.order_management, name='order_management')
]
