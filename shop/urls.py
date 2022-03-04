from django.urls import path

from . import views

app_name = 'shop'
urlpatterns = [
    path('', views.index, name='index'),
    path("model", views.model, name='model'),
    path("model2", views.tes, name='tes'),
]
