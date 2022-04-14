# -*- coding: utf-8 -*-
"""
@Time ： 2022/3/15 14:14
@Auth ： Wang Yuyang
@File ：view.py
@IDE ：PyCharm
"""
from datetime import datetime, timezone

from django.contrib import auth
from django.contrib.auth.models import User
from django.db.models import Q, Max, Count
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
    if request.method == "POST":
        messages = MessageModel.objects.filter(Q(recipient=request.user) |
                                               Q(user=request.user))
        users = User.objects
        profiles = Profile.objects
        data = []
        to = request.POST.get("to")
        sender_rank = messages.values("user").annotate(
            max=Max("timestamp"), unread=Count("read", filter=Q(read=False)), latest_message=Max("body")).exclude(
            user=request.user.id).order_by("user")
        print(sender_rank)
        receiver_rank = messages.values("recipient").annotate(
            max=Max("timestamp")).exclude(
            recipient=request.user.id).order_by("recipient")
        print(receiver_rank)
        len_sender = len(sender_rank)
        len_receiver = len(receiver_rank)
        p1, p2 = 0, 0
        while p1 < len_sender and p2 < len_receiver:
            if sender_rank[p1]['user'] == receiver_rank[p2]['recipient']:
                user = users.get(id=sender_rank[p1]['user'])
                profile = profiles.filter(user=user).first()
                if profile:
                    avatar = profile.image.url
                else:
                    avatar = '/static/assets/images/avatars/avatar.png'
                if sender_rank[p1]['max'] > receiver_rank[p2]['max']:
                    latest_time = sender_rank[p1]['max']
                    latest_message = MessageModel.objects.get(timestamp=latest_time, user=user)
                else:
                    latest_time = receiver_rank[p2]['max']
                    latest_message = MessageModel.objects.get(timestamp=latest_time, recipient=user)
                data.append({'id': user.id,
                             'username': user.username,
                             'email': user.email,
                             'image': avatar,
                             'time': latest_time,
                             'unread': sender_rank[p1]['unread'],
                             'latest_message': latest_message.body})
                p1 += 1
                p2 += 1
            elif sender_rank[p1]['user'] < receiver_rank[p2]['recipient']:
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
                             'time': sender_rank[p1]['max'],
                             'unread': sender_rank[p1]['unread'],
                             'latest_message': MessageModel.objects.get(timestamp=sender_rank[p1]['max'], user=user).body})
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
                             'time': receiver_rank[p2]['max'],
                             'unread': 0,
                             'latest_message': MessageModel.objects.get(timestamp=receiver_rank[p2]['max'], recipient=user).body})
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
                             'time': receiver_rank[i]['max'],
                             'unread': 0,
                             'latest_message': MessageModel.objects.get(timestamp=receiver_rank[i]['max'], recipient=user).body})
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
                             'time': sender_rank[i]['max'],
                             'unread': sender_rank[i]['unread'],
                             'latest_message': MessageModel.objects.get(timestamp=sender_rank[i]['max'], user=user).body})
        data = sorted(data, key=lambda x: x['time'], reverse=True)
        if to != -1 and messages.filter(Q(recipient_id=to) | Q(user_id=to)).count() == 0:
            user = users.get(id=to)
            profile = profiles.filter(user=user).first()
            if profile:
                avatar = profile.image.url
            else:
                avatar = '/static/assets/images/avatars/avatar.png'
            data = [{
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'image': avatar,
                'time': "",
                'unread': 0,
                'latest_message': ""
            }] + data
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
             return JsonResponse({'code': 400}, safe=False, json_dumps_params={'ensure_ascii': False})


def add_cart(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            if Cart.objects.filter(user=request.user, instrument_id=request.POST.get('instrument_id')):
                return JsonResponse({'code': 100}, safe=False, json_dumps_params={'ensure_ascii': False})
            else:
                try:
                    cart = Cart(user=request.user, instrument_id=request.POST.get('instrument_id'), count=request.POST.get('count') or 1)
                    cart.save()
                    return JsonResponse({'code': 200}, safe=False, json_dumps_params={'ensure_ascii': False})
                except:
                    return JsonResponse({'code': 300}, safe=False, json_dumps_params={'ensure_ascii': False})
        else:
            return JsonResponse({'code': 400}, safe=False, json_dumps_params={'ensure_ascii': False})


def all_read(request):
    if request.method == 'POST':
        unread_messages = MessageModel.objects.filter(user_id=request.POST.get('sender_id'), recipient=request.user, read=False)
        try:
            for message in unread_messages:
                message.read = True
                message.save()
            return JsonResponse({'code': 100}, safe=False, json_dumps_params={'ensure_ascii': False})
        except:
            return JsonResponse({'code': 200}, safe=False, json_dumps_params={'ensure_ascii': False})

