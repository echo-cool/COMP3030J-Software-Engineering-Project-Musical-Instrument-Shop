from django.conf.urls import url
from django.urls import path

from . import views

app_name = 'management'
urlpatterns = [
    path('', views.index, name='index'),
    path('order_management/all/', views.order_management_all, name='order_management_all'),
    path('order_management/unconfirmed/', views.order_management_unconfirmed, name='order_management_unconfirmed'),
    path('order_management/confirmed/', views.order_management_confirmed, name='order_management_confirmed'),
    path('order_management/delivered/', views.order_management_delivered, name='order_management_delivered'),
    path('update_order/<int:order_id>/', views.update_order, name='update_order'),
    path('instrument_management/', views.instrument_management, name='instrument_management')
]
