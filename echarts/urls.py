# -*- coding: utf-8 -*-
"""
@Time ： 2022/3/9 17:10
@Auth ： Wang Yuyang
@File ：urls.py
@IDE ：PyCharm
"""

from django.urls import path

from echarts.views import index

app_name = 'echarts'
urlpatterns = [
    path('', index, name='index'),
    path('chart1/', index, name='chart1'),
    path('chart2/', index, name='chart2'),
]
