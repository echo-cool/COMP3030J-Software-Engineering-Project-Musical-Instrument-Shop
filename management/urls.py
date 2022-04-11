from django.urls import path

from . import views

app_name = 'management'
urlpatterns = [
    path('', views.index, name='index'),
    path('index', views.index_new, name='new_index'),
    path('new', views.new, name='new'),
    path('order_management/all/new', views.order_management_all_new, name='order_management_all_new'),
    path('instrument_management/new', views.instrument_management_new, name='instrument_management_new'),
    path('order_management/all/', views.order_management_all, name='order_management_all'),
    path('order_management/unconfirmed/', views.order_management_unconfirmed, name='order_management_unconfirmed'),
    path('order_management/confirmed/', views.order_management_confirmed, name='order_management_confirmed'),
    path('order_management/delivered/', views.order_management_delivered, name='order_management_delivered'),
    path('update_order/<int:order_id>/', views.update_order, name='update_order'),
    path('instrument_management/', views.instrument_management, name='instrument_management'),
    path('update_instrument/<int:instrument_id>/', views.update_instrument, name='update_instrument'),
    path('add_instrument/', views.add_instrument, name='add_instrument'),
    path('add_order/', views.add_order, name='add_order'),
    path('profile/', views.profile, name='profile'),
    path('review_management/', views.review_management, name='review_management'),
    path('update_review/<int:review_id>/', views.update_review, name='update_review'),
    path('add_review/', views.add_review, name='add_review'),
    path('order_state/<order_id>', views.order_state, name='order_state')
]
