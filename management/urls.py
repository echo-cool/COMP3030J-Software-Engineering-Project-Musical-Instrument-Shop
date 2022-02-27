from django.conf.urls import url
from django.urls import path

from . import views

app_name = 'management'
urlpatterns = [
    path('', views.index, name='index'),
    path('order_management/', views.order_management, name='order_management'),
    path('update_order/<int:order_id>/', views.update_order, name='update_order')
]
