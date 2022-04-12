# -*- coding: utf-8 -*-
"""
@Time ： 2022/3/15 14:14
@Auth ： Wang Yuyang
@File ：view.py
@IDE ：PyCharm
"""
from django.contrib import auth
from django.contrib.auth.models import User
from django.db.models import Q, Max
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages

from chat.models import MessageModel
from shop.models import Profile, Wishlist, Cart


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


def rank_user_list(request):
    messages = MessageModel.objects.filter(Q(recipient=request.user) |
                                           Q(user=request.user))
    users = User.objects
    profiles = Profile.objects
    sender_rank = messages.values("user").annotate(max=Max("timestamp")).exclude(user=request.user.id).order_by("user")
    receiver_rank = messages.values("recipient").annotate(max=Max("timestamp")).exclude(
        recipient=request.user.id).order_by("recipient")
    len_sender = len(sender_rank)
    len_receiver = len(receiver_rank)
    data = []
    p1, p2 = 0, 0
    while p1 < len_sender and p2 < len_receiver:
        if sender_rank[p1]['user'] == receiver_rank[p2]['recipient']:
            user = users.get(id=sender_rank[p1]['user'])
            profile = profiles.filter(user=user).first()
            if profile:
                avatar = profile.image.url
            else:
                avatar = '/static/assets/images/avatars/avatar.png'
            data.append({'id': user.id,
                         'username': user.username,
                         'email': user.email,
                         'image': avatar,
                         'time': max(sender_rank[p1]['max'], receiver_rank[p2]['max'])})
            p1 += 1
            p2 += 1
        elif sender_rank[p1]['user'] < receiver_rank[p2]['user']:
            user = users.get(id=sender_rank[p1]['user'])
            profile = profiles.filter(user=user).first()
            if profile:
                avatar = profile.image.url
            else:
                avatar = '/static/assets/images/avatars/avatar.png'
            data.append({'id': user.id,
                         'username': user.username,
                         'email': user.email,
                         'image': avatar,
                         'time': sender_rank[p1]['max']})
            p1 += 1
        else:
            user = users.get(id=receiver_rank[p2]['recipient'])
            profile = profiles.filter(user=user).first()
            if profile:
                avatar = profile.image.url
            else:
                avatar = '/static/assets/images/avatars/avatar.png'
            data.append({'id': user.id,
                         'username': user.username,
                         'email': user.email,
                         'image': avatar,
                         'time': receiver_rank[p2]['max']})
            p2 += 1
    if p1 == len_sender:
        for i in range(p2, len_receiver):
            user = users.get(id=receiver_rank[i]['recipient'])
            profile = profiles.filter(user=user).first()
            if profile:
                avatar = profile.image.url
            else:
                avatar = '/static/assets/images/avatars/avatar.png'
            data.append({'id': user.id,
                         'username': user.username,
                         'email': user.email,
                         'image': avatar,
                         'time': receiver_rank[i]['max']})
    else:
        for i in range(p1, len_sender):
            user = users.get(id=sender_rank[i]['user'])
            profile = profiles.filter(user=user).first()
            if profile:
                avatar = profile.image.url
            else:
                avatar = '/static/assets/images/avatars/avatar.png'
            data.append({'id': user.id,
                         'username': user.username,
                         'email': user.email,
                         'image': avatar,
                         'time': sender_rank[i]['max']})
    data = sorted(data, key=lambda x: x['time'], reverse=True)
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})


def add_wishlist(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            if Wishlist.objects.filter(user=request.user).filter(instrument_id=request.POST.get('instrument_id')):
                return JsonResponse({'code': 100}, safe=False, json_dumps_params={'ensure_ascii': False})
            else:
                try:
                    wishlist = Wishlist(user=request.user, instrument_id=request.POST.get('instrument_id'))
                    wishlist.save()
                    return JsonResponse({'code': 200}, safe=False, json_dumps_params={'ensure_ascii': False})
                except:
                    return JsonResponse({'code': 300}, safe=False, json_dumps_params={'ensure_ascii': False})
        else:
            return redirect('accounts:log_in')


def add_cart(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            if Cart.objects.filter(user=request.user, instrument_id=request.POST.get('instrument_id')):
                return JsonResponse({'code': 100}, safe=False, json_dumps_params={'ensure_ascii': False})
            else:
                try:
                    cart = Cart(user=request.user, instrument_id=request.POST.get('instrument_id'), count=1)
                    cart.save()
                    return JsonResponse({'code': 200}, safe=False, json_dumps_params={'ensure_ascii': False})
                except:
                    return JsonResponse({'code': 300}, safe=False, json_dumps_params={'ensure_ascii': False})
        else:
            return redirect('accounts:log_in')