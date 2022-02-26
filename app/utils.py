# -*- coding: utf-8 -*-
"""
@Time : 2/26/2022 10:53 PM
@Auth : Wang Yuyang
@File : utils.py
@IDE  : PyCharm
"""
from django.shortcuts import redirect
from django.urls import reverse


def login_required(fn):
    def inner(request, *args, **kwargs):
        if request.user.is_authenticated:
            ret = fn(request)
            return ret
        else:
            return redirect(reverse('accounts:log_in'))

    return inner
