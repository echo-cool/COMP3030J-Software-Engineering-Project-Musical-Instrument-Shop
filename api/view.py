# -*- coding: utf-8 -*-
"""
@Time ： 2022/3/15 14:14
@Auth ： Wang Yuyang
@File ：view.py
@IDE ：PyCharm
"""
from datetime import datetime, timezone, date

from django.contrib import auth
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User
from django.db.models import Q, Max, Count, Manager
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt

from accounts.utils import send_message_email, send_modify_email
from app import settings
from chat.models import MessageModel
from image_search.models import ImageSearchData
from shop.models import Profile, Wishlist, Cart, Order, OrderItem, Instrument
from PIL import Image
import numpy as np
from image_search.ml.core import distance
from shop.views import memory_cached_db

extractor = None


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
        profiles: Manager = Profile.objects
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
                             'latest_message': MessageModel.objects.get(timestamp=sender_rank[p1]['max'],
                                                                        user=user).body})
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
                             'latest_message': MessageModel.objects.get(timestamp=receiver_rank[p2]['max'],
                                                                        recipient=user).body})
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
                             'latest_message': MessageModel.objects.get(timestamp=receiver_rank[i]['max'],
                                                                        recipient=user).body})
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
                             'latest_message': MessageModel.objects.get(timestamp=sender_rank[i]['max'],
                                                                        user=user).body})
        data = sorted(data, key=lambda x: x['time'], reverse=True)
        if to != -1 and to != request.user.id and messages.filter(Q(recipient_id=to) | Q(user_id=to)).count() == 0:
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
                    cart = Cart(user=request.user, instrument_id=request.POST.get('instrument_id'),
                                count=request.POST.get('count') or 1)
                    cart.save()
                    return JsonResponse({'code': 200}, safe=False, json_dumps_params={'ensure_ascii': False})
                except:
                    return JsonResponse({'code': 300}, safe=False, json_dumps_params={'ensure_ascii': False})
        else:
            return JsonResponse({'code': 400}, safe=False, json_dumps_params={'ensure_ascii': False})


def all_read(request):
    if request.method == 'POST':
        unread_messages = MessageModel.objects.filter(user_id=request.POST.get('sender_id'), recipient=request.user,
                                                      read=False)
        try:
            for message in unread_messages:
                message.read = True
                message.save()
            return JsonResponse({'code': 100}, safe=False, json_dumps_params={'ensure_ascii': False})
        except:
            return JsonResponse({'code': 200}, safe=False, json_dumps_params={'ensure_ascii': False})


def revenue_month(request):
    orders = OrderItem.objects
    total_revenue = []
    chinese_revenue = []
    western_revenue = []

    for i in range(1, 13):
        total_orders_month = orders.filter(order__created_at__month=i)
        chinese_orders = total_orders_month.filter(instrument__chinese=True)
        western_orders = total_orders_month.filter(instrument__chinese=False)
        revenue = 0
        c_revenue = 0
        w_revenue = 0
        for order in total_orders_month:
            revenue += order.quantity * order.instrument.price

        for order in chinese_orders:
            c_revenue += order.quantity * order.instrument.price

        for order in western_orders:
            w_revenue += order.quantity * order.instrument.price

        total_revenue.append(revenue)
        chinese_revenue.append(c_revenue)
        western_revenue.append(w_revenue)

    result = [total_revenue, chinese_revenue, western_revenue]

    return JsonResponse(result, safe=False, json_dumps_params={'ensure_ascii': False})


def order_data(request):
    order_items = OrderItem.objects
    # total_orders = []
    chinese_orders = []
    western_orders = []

    for i in range(1, 13):
        total_orders_month = order_items.filter(order__created_at__month=i)
        chinese_orders_month = total_orders_month.filter(instrument__chinese=True).count()
        western_orders_month = total_orders_month.filter(instrument__chinese=False).count()

        # total_orders.append(total_orders_month)
        chinese_orders.append(chinese_orders_month)
        western_orders.append(western_orders_month)

    result = [western_orders, chinese_orders]

    return JsonResponse(result, safe=False, json_dumps_params={'ensure_ascii': False})


def analyze_image(request):
    key = 0
    if request.method == 'POST':
        print(request.FILES)
        res = {}
        image = request.FILES.get("image_file_upload")
        with open("content/media/uploads/tmp/tmp.jpg", 'wb') as f:
            f.write(image.read())
        image = Image.open("content/media/uploads/tmp/tmp.jpg")
        image = image.resize((1000, 1000), Image.ANTIALIAS)
        image.save("content/media/uploads/tmp/tmp.jpg")
        print('preprocess image done')
        # img = cv.imread('content/media/uploads/tmp/tmp.jpg')
        # img = cv.resize(img, (1000, 1000), interpolation=cv.INTER_CUBIC)
        # cv.imwrite('content/media/uploads/tmp/tmp.jpg', img)
        global extractor
        if extractor is None:
            from image_search.ml.core import ResNetFeatureExtractor
            extractor = ResNetFeatureExtractor()
        hist_data = extractor.extract_feature("content/media/uploads/tmp/tmp.jpg")
        print(hist_data)
        all_image_search_data = ImageSearchData.objects.all()
        for item in all_image_search_data:
            item_hist_data = item.data
            item_hist_data = item_hist_data.split(",")
            item_hist_data = [float(x) for x in item_hist_data]
            item_hist_data = np.array(item_hist_data)
            res[item.id] = distance(hist_data, item_hist_data)

        sorted_keys = sorted(res.items(), key=lambda x: x[1])
        print(sorted_keys)
        instruments = []
        for item in sorted_keys:
            instruments.append(Instrument.objects.get(imagesearchdata=item[0]))
        key = memory_cached_db.insert_value(instruments)
    return JsonResponse({"key": key}, safe=False, json_dumps_params={'ensure_ascii': False})


class EditorUploadImage(LoginRequiredMixin, View):

    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def post(self, request, *args, **kwargs):
        import os
        import uuid
        file_data = request.FILES
        keys = list(file_data.keys())
        print(settings.CONTENT_DIR + '/' + 'media/upload/')
        file_path = settings.CONTENT_DIR + '/' + 'media/upload/'
        if os.path.exists(file_path) is False:
            os.mkdir(file_path)
        # 返回数据中需要的data
        data = []
        for key in keys:
            img_dict = {}
            file = file_data.get(f'{key}')
            # 重命名文件名称
            names = list(os.path.splitext(file.name))
            names[0] = ''.join(str(uuid.uuid4()).split('-'))
            file.name = ''.join(names)
            new_path = os.path.join(file_path, file.name)
            # 开始上传
            with open(new_path, 'wb+') as f:
                for chunk in file.chunks():
                    f.write(chunk)
            # 构造返回数据
            img_dict['url'] = f'/media/upload/{file.name}'
            data.append(img_dict)
        context = {"errno": 0, "data": data}
        return JsonResponse(context)


def max_order_priority(request):
    max_priority = Order.objects.all().aggregate(Max("priority"))
    return JsonResponse({"priority": max_priority}, safe=False, json_dumps_params={'ensure_ascii': False})


def search_user(request):
    if request.method == "POST":
        user_information = request.POST.get("search_text")
        if user_information.isdigit():
            user = User.objects.filter(Q(id=user_information) | Q(username=user_information)).first()
        else:
            user = User.objects.filter(username=user_information).first()
        if user:
            if user != request.user:
                return JsonResponse({"code": 100, "id": user.id}, safe=False, json_dumps_params={'ensure_ascii': False})
            else:
                return JsonResponse({"code": 200}, safe=False, json_dumps_params={'ensure_ascii': False})
        else:
            return JsonResponse({"code": 300}, safe=False, json_dumps_params={'ensure_ascii': False})


def send_company_message(request):
    if request.method == "POST":
        try:
            send_message_email(settings.DEFAULT_FROM_EMAIL, request.POST.get("name"), request.POST.get("email"),
                               request.POST.get("subject"), request.POST.get("message"))
            return JsonResponse({"code": 100}, safe=False, json_dumps_params={'ensure_ascii': False})
        except:
            return JsonResponse({"code": 200}, safe=False, json_dumps_params={'ensure_ascii': False})


def send_modify_order(request):
    if request.method == "POST":
        send_modify_email(settings.DEFAULT_FROM_EMAIL, request.POST.get("username"), request.POST.get("order_id"),
                          request.POST.get("modified_item"), request.POST.get("new_value"))
        return JsonResponse({"code": 100}, safe=False, json_dumps_params={'ensure_ascii': False})

