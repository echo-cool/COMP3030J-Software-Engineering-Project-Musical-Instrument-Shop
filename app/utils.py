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
from functools import wraps
from urllib.parse import urlparse

from django.contrib.auth import REDIRECT_FIELD_NAME
from django.shortcuts import resolve_url


def My_user_passes_test(test_func, login_url=None, redirect_field_name=REDIRECT_FIELD_NAME):
    """
    Decorator for views that checks that the user passes the given test,
    redirecting to the log-in page if necessary. The test should be a callable
    that takes the user object and returns True if the user passes.
    """

    def decorator(view_func):
        @wraps(view_func)
        def _wrapped_view(request, *args, **kwargs):
            if test_func(request.user):
                return view_func(request, *args, **kwargs)
            path = request.build_absolute_uri()
            resolved_login_url = resolve_url(login_url)
            # If the login url is the same scheme and net location then just
            # use the path as the "next" url.
            login_scheme, login_netloc = urlparse(resolved_login_url)[:2]
            current_scheme, current_netloc = urlparse(path)[:2]
            if ((not login_scheme or login_scheme == current_scheme) and
                    (not login_netloc or login_netloc == current_netloc)):
                path = request.get_full_path()
            messages.warning(request, "You are not authorized to access this page")
            return redirect(reverse('shop:index'))

        return _wrapped_view

    return decorator


def staff_required(function=None, redirect_field_name=REDIRECT_FIELD_NAME, login_url=None):
    """
    Decorator for views that checks that the user is logged in, redirecting
    to the log-in page if necessary.
    """
    actual_decorator = My_user_passes_test(
        lambda u: u.is_staff,
        login_url="/",
        redirect_field_name=redirect_field_name
    )
    if function:
        return actual_decorator(function)
    return actual_decorator


# def staff_required(fn):
#     def inner(request, *args, **kwargs):
#         if request.user.is_staff:
#             ret = fn(request, *args, *kwargs)
#             return ret
#         else:
#             messages.warning(request, "You are not authorized to access this page")
#             return redirect(reverse('shop:index'))
#
#     return inner
