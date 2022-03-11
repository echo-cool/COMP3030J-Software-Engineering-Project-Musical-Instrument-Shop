# -*- coding: utf-8 -*-
"""
@Time ： 2022/3/9 17:10
@Auth ： Wang Yuyang
@File ：urls.py
@IDE ：PyCharm
"""

from django.urls import path

from blog.views import index, view

app_name = 'blog'
urlpatterns = [
    path('', index, name='index'),
    path('view/<int:post_id>', view, name='view')
]
