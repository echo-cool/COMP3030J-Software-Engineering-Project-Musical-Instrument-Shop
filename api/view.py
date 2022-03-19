# -*- coding: utf-8 -*-
"""
@Time ： 2022/3/15 14:14
@Auth ： Wang Yuyang
@File ：view.py
@IDE ：PyCharm
"""
from django.contrib import auth
from django.shortcuts import render, get_object_or_404, redirect

# Create your views here.
from blog.models import Post, Category, Tag
from django.contrib import messages


def login(request):
    if request.method == 'GET':
        return redirect('shop:index')
    elif request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        #       Use Django's built-in authentication system
        print(username, password)
        user = auth.authenticate(username=username, password=password)
        if user is not None and user.is_active:
            auth.login(request, user)
            messages.add_message(request, messages.INFO, 'Login Successfully!')
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
