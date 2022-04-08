# -*- coding: utf-8 -*-
"""
@Time ： 2022/3/15 14:14
@Auth ： Wang Yuyang
@File ：view.py
@IDE ：PyCharm
"""
from django.contrib import auth
from django.contrib.auth.models import User
from django.db.models import Q
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages


def login(request):
    if request.method == 'GET':
        return redirect('shop:index')
    elif request.method == 'POST':
        email_or_username = request.POST.get('username')
        password = request.POST.get('password')
        #       Use Django's built-in authentication system
        print(email_or_username, password)
        tmp_user = User.objects.filter(Q(username=email_or_username) | Q(email__iexact=email_or_username)).first()
        if tmp_user is not None:
            user = auth.authenticate(username=tmp_user.username, password=password)
            if user is not None and user.is_active:
                auth.login(request, user)
                messages.add_message(request, messages.INFO, 'Login Successfully!')
                return redirect('shop:index')
            else:
                messages.add_message(request, messages.INFO, 'Login Failed!')
                return redirect('shop:index')
        else:
            messages.add_message(request, messages.INFO, 'Login Failed!')
            return redirect('shop:index')


# def register(request):
#     if request.method == 'GET':
#         return redirect('shop:index')
#     elif request.method == 'POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         email = request.POST.get('email')
#         # Check if we have the same user in the database
#
#


def logout(request):
    auth.logout(request)
    return redirect('shop:index')
