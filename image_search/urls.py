# -*- coding: utf-8 -*-
"""
@Time ： 2022/3/9 17:10
@Auth ： Wang Yuyang
@File ：urls.py
@IDE ：PyCharm
"""

from django.urls import path

from image_search.views import generate_database_index, generate_hist_data, generate_all_hist_data, image_search

app_name = 'image_search'
urlpatterns = [
    path('', image_search, name='index'),
    path('generate_database/', generate_database_index, name='generate_database_index'),
    path('generate_for_item/<int:item_id>/', generate_hist_data, name='generate_hist_data'),
    path('generate_all_hist_data', generate_all_hist_data, name='generate_all_hist_data'),
]
