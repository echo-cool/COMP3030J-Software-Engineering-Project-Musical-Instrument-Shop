# -*- coding: utf-8 -*-
"""
@Time ： 2022/3/9 17:10
@Auth ： Wang Yuyang
@File ：urls.py
@IDE ：PyCharm
"""

from django.urls import path

from chat.views import index

app_name = 'chat'
urlpatterns = [
    path('', index, name='index'),
]
