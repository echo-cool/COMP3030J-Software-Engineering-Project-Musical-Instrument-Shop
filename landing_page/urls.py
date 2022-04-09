# -*- coding: utf-8 -*-
"""
@Time ： 2022/3/9 17:10
@Auth ： Wang Yuyang
@File ：urls.py
@IDE ：PyCharm
"""

from django.urls import path

from landing_page.views import index

app_name = 'landing_page'
urlpatterns = [
    path('', index, name='index'),
]
