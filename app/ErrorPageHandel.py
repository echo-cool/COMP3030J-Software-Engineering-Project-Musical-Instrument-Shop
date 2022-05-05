# -*- coding: utf-8 -*-
"""
@Time ： 2022/5/5 20:33
@Auth ： Wang Yuyang
@File ：ErrorPageHandel.py
@IDE ：PyCharm
"""
# -*- coding: utf-8 -*-
from django.shortcuts import redirect

"""
@Time ： 2022/4/17 14:30
@Auth ： Wang Yuyang
@File ：auth_middleware.py
@IDE ：PyCharm
"""
import time
from django.core.handlers.wsgi import WSGIRequest
from django.http import HttpResponse


class ErrorPageHandelMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request: WSGIRequest):
        response: HttpResponse = self.get_response(request)
        if response.status_code in [200, 302]:
            return response
        else:
            return redirect('shop:index')

        return response
