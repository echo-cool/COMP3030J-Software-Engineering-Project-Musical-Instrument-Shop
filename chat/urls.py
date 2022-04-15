# -*- coding: utf-8 -*-
"""
@Time ： 2022/3/9 17:10
@Auth ： Wang Yuyang
@File ：urls.py
@IDE ：PyCharm
"""

from django.urls import path

from chat.views import index, index_new, rasa_chat, ai_chat_test

app_name = 'chat'
urlpatterns = [
    path('', index, name='index'),
    path('new/<int:to>', index_new, name="index_new"),
    path("rasa/", rasa_chat, name="rasa"),
    path("ai_chat_test/",ai_chat_test, name="ai_chat_test"),
]
