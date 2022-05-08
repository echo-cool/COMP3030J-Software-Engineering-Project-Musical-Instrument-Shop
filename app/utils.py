# -*- coding: utf-8 -*-
"""
@Time : 2/26/2022 10:53 PM
@Auth : Wang Yuyang
@File : utils.py
@IDE  : PyCharm
"""
from django.contrib import messages
from django.shortcuts import redirect
from django.urls import reverse


def staff_required(fn):
    def inner(request, *args, **kwargs):
        if request.user.is_staff:
            ret = fn(request, *args, *kwargs)
            return ret
        else:
            messages.warning(request, "You are not authorized to access this page")
            return redirect(reverse('shop:index'))

    return inner
