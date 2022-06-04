import json
from datetime import datetime, timedelta, time
import os

from django.contrib.auth.models import User
from django.db.models import Q, Max
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

# Create your views here.
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

import blog
import shop
from app.utils import staff_required
from blog.models import Post
from chat.models import MessageModel
from management.forms import OrderForm, InstrumentForm, ReviewForm, PostForm, CartForm, WishlistForm, \
    InstrumentCategoryForm, BlogCategoryForm, OrderItemForm, InstrumentWithIForm, DisabledAreaFrom
from shop.models import Order, Instrument, Profile, Category, Review, Cart, Wishlist, OrderItem, UncompletedOrder, \
    Notification, DisabledArea
from django.contrib.auth.decorators import login_required, permission_required


# @login_required
# def new(request):
#     counts = {
#         'user': User.objects.count(),
#         'instrument': Instrument.objects.count(),
#         'order': Order.objects.count(),
#         'category': Category.objects.count(),
#         'review': Review.objects.count(),
#     }
#     pie_data = {}
#     for category_item in Category.objects.all():
#         pie_data[category_item.name.replace('\n', '').replace('\r', '')] = Instrument.objects.filter(
#             category=category_item.id).count()
#
#     tmp = {}
#     for instrument_item in Instrument.objects.all():
#         tmp[instrument_item] = Order.objects.filter(instrument=instrument_item.id).count()
#     popular_instruments = sorted(tmp.items(), key=lambda x: x[1], reverse=True)[0:5]
#
#     return render(request, 'management/index.html', {
#         'counts': counts,
#         'pie_data': pie_data,
#         'popular_instruments': popular_instruments,
#         'data_length': len(pie_data),
#         'profile': Profile.objects.filter(user=request.user.id).first()
#     })


@login_required
@staff_required
def index_new(request):
    # tmp = {}
    # for instrument_item in Instrument.objects.all():
    #     tmp[instrument_item] = Order.objects.filter(instrument=instrument_item.id).count()
    # popular_instruments = sorted(tmp.items(), key=lambda x: x[1], reverse=True)[0:5]

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    order_items = OrderItem.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    orders = Order.objects.all()
    uncompleted_orders = UncompletedOrder.objects.all()
    instruments = Instrument.objects.all()

    quantities = []
    print("=====================================================")
    quantity_instruments = Instrument.objects.all().order_by('quantity')
    # print(len(quantity_instruments))
    # print(quantity_instruments[0].name)
    while len(quantities) < 12:
        if len(quantity_instruments) < len(quantities):
            break
        else:
            quantities.append(
                {"name": quantity_instruments[len(quantities)].name,
                 "quantity": quantity_instruments[len(quantities)].quantity}
            )
    # print(quantities)

    finished_orders = orders.filter(delivered=True)

    carts = Cart.objects.all()
    blogs = Post.objects.all()
    wishlist = Wishlist.objects.all()

    # weekday order
    orders = OrderItem.objects
    weekday_order = []
    for i in range(1, 8):
        total_orders_month = orders.filter(order__created_at__week_day=i)
        revenue = 0
        for order in total_orders_month:
            revenue += order.quantity
        weekday_order.append(revenue)

    # monthly order change
    before_month = 0
    this_month = 0
    total_orders_month = orders.filter(order__created_at__month=5)

    print(total_orders_month)
    for order in total_orders_month:
        before_month += order.quantity
    total_orders_month_now = orders.filter(order__created_at__month=6)

    print(total_orders_month_now)
    for order in total_orders_month_now:
        this_month += order.quantity
    change = int(this_month) - int(before_month)
    print("========================")
    compare_monthly = [1 if change > 0 else 0, change]
    print(compare_monthly)
    return render(request, 'management_templates/index_new.html', {
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'orders': orders,
        'carts': carts,
        'order_items': order_items,
        "finished_orders": finished_orders,
        'instruments': instruments,
        'blogs': blogs,
        'wishlist': wishlist,
        'uncompleted_orders': uncompleted_orders,
        'users': users,
        'messages': messages,
        "quantities": quantities,
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
        "weekday_order": weekday_order,
        "compare_monthly": compare_monthly,
        # "quantities": {"quantities_name": quantities_name,
        #                "quantities_quantity": quantities_quantity},
    })


# @login_required
# @staff_required
# def index(request):
#     counts = {
#         'user': User.objects.count(),
#         'instrument': Instrument.objects.count(),
#         'order': Order.objects.count(),
#         'category': Category.objects.count(),
#         'review': Review.objects.count(),
#     }
#     pie_data = {}
#     for category_item in Category.objects.all():
#         pie_data[category_item.name.replace('\n', '').replace('\r', '')] = Instrument.objects.filter(
#             category=category_item.id).count()
#
#     # tmp = {}
#     # for instrument_item in Instrument.objects.all():
#     #     tmp[instrument_item] = Order.objects.filter(instrument=instrument_item.id).count()
#     # popular_instruments = sorted(tmp.items(), key=lambda x: x[1], reverse=True)[0:5]
#
#     return render(request, 'management_templates/../content/templates/shop_templates/back/index.html', {
#         'counts': counts,
#         'pie_data': pie_data,
#         # 'popular_instruments': popular_instruments,
#         'data_length': len(pie_data),
#         'profile': Profile.objects.filter(user=request.user.id).first()
#     })


@login_required
@staff_required
def order_management_all(request):
    search = request.GET.get("search")
    if search is not None:
        orders = Order.objects.filter(Q(user__username__contains=search)).order_by('-priority', '-created_at')
    else:
        orders = Order.objects.all().order_by('-priority', '-created_at')
    for order in orders:
        items = OrderItem.objects.filter(order_id=order.id)
        order.quantity = items.count()
        total_price = 0
        for item in items:
            total_price += item.instrument.price * item.quantity
        order.total_price = total_price

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management_templates/orderManagement.html', {
        'orders': orders,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'messages': messages,
        'mode': 0,
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
    })


@login_required
@staff_required
def order_management_all_new(request):
    data = []
    orders = Order.objects.all()

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    for order_item in orders:
        tmp = {
            'order': order_item,
            'user': User.objects.filter(id=order_item.user.id).first(),
            'instrument': Instrument.objects.filter(
                id=order_item.instrument.id).first(),
            'profile': Profile.objects.filter(
                user=order_item.user.id).first()
        }
        data.append(tmp)
    return render(request, 'management/orderManagement.html', {
        'orders': data,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'messages': messages,
        'mode': 0
    })


@login_required
@staff_required
def order_management_placed(request):
    search = request.GET.get("search")
    if search is not None:
        orders = Order.objects.filter(Q(user__username__contains=search) & Q(accepted=False)).order_by('-priority',
                                                                                                       '-created_at')
    else:
        orders = Order.objects.filter(accepted=False).order_by('-priority', '-created_at')
    for order in orders:
        items = OrderItem.objects.filter(order_id=order.id)
        order.quantity = items.count()
        total_price = 0
        for item in items:
            total_price += item.instrument.price * item.quantity
        order.total_price = total_price

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management_templates/orderManagement.html', {
        'orders': orders,
        'messages': messages,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
        'mode': 1
    })


@login_required
@staff_required
def order_management_accepted(request):
    search = request.GET.get("search")
    if search is not None:
        orders = Order.objects.filter(accepted=True).filter(packed=False).filter(
            Q(user__username__contains=search)).order_by('-priority', '-created_at')
    else:
        orders = Order.objects.filter(accepted=True).filter(packed=False).order_by('-priority', '-created_at')
    for order in orders:
        items = OrderItem.objects.filter(order_id=order.id)
        order.quantity = items.count()
        total_price = 0
        for item in items:
            total_price += item.instrument.price * item.quantity
        order.total_price = total_price

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management_templates/orderManagement.html', {
        'orders': orders,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'messages': messages,
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
        'mode': 2
    })


@login_required
@staff_required
def order_management_packed(request):
    search = request.GET.get("search")
    if search is not None:
        orders = Order.objects.filter(accepted=True).filter(packed=True).filter(shipped=False).filter(
            Q(user__username__contains=search)).order_by('-priority', '-created_at')
    else:
        orders = Order.objects.filter(accepted=True).filter(packed=True).filter(shipped=False).order_by('-priority',
                                                                                                        '-created_at')
    for order in orders:
        items = OrderItem.objects.filter(order_id=order.id)
        order.quantity = items.count()
        total_price = 0
        for item in items:
            total_price += item.instrument.price * item.quantity
        order.total_price = total_price

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management_templates/orderManagement.html', {
        'orders': orders,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'messages': messages,
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
        'mode': 3
    })


@login_required
@staff_required
def order_management_shipped(request):
    search = request.GET.get("search")
    if search is not None:
        orders = Order.objects.filter(accepted=True).filter(packed=True).filter(shipped=True).filter(
            delivered=False).filter(Q(user__username__contains=search)).order_by('-priority', '-created_at')
    else:
        orders = Order.objects.filter(accepted=True).filter(packed=True).filter(shipped=True).filter(
            delivered=False).order_by('-priority', '-created_at')
    for order in orders:
        items = OrderItem.objects.filter(order_id=order.id)
        order.quantity = items.count()
        total_price = 0
        for item in items:
            total_price += item.instrument.price * item.quantity
        order.total_price = total_price

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management_templates/orderManagement.html', {
        'orders': orders,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'messages': messages,
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
        'mode': 4
    })


@login_required
@staff_required
def order_management_delivered(request):
    search = request.GET.get("search")
    if search is not None:
        orders = Order.objects.filter(accepted=True).filter(packed=True).filter(shipped=True).filter(
            delivered=True).filter(Q(user__username__contains=search)).order_by('-priority', '-created_at')
    else:
        orders = Order.objects.filter(accepted=True).filter(packed=True).filter(shipped=True).filter(
            delivered=True).order_by('-priority', '-created_at')
    for order in orders:
        items = OrderItem.objects.filter(order_id=order.id)
        order.quantity = items.count()
        total_price = 0
        for item in items:
            total_price += item.instrument.price * item.quantity
        order.total_price = total_price
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management_templates/orderManagement.html', {
        'orders': orders,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
        'messages': messages,
        'mode': 5
    })


@login_required
@staff_required
def order_item_management(request, order_id):
    search = request.GET.get("search")
    if search is not None:
        order_items = OrderItem.objects.filter(order_id=order_id).filter(instrument__name__contains=search)
    else:
        order_items = OrderItem.objects.filter(order_id=order_id)

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management_templates/orderItemManagement.html', {
        'order_items': order_items,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'messages': messages,
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
    })


def add_order_item(request, order_id):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        f = OrderItemForm(request.POST, request.FILES)
        if f.is_valid():
            order_item = OrderItem(order_id=order_id,
                                   instrument=f.cleaned_data["instrument"],
                                   quantity=f.cleaned_data["quantity"])
            order_item.save()
        else:
            return render(request, 'management_templates/update_order_item.html', {
                'form': f,
                'messages': messages,
                "new_order_notifications": Notification.objects.filter(is_confirm=False),
                "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
                'profile': Profile.objects.filter(user=request.user.id).first(),
            })
        return redirect('management:order_item_management', order_id=order_id)
    else:
        f = OrderItemForm()
        return render(request, 'management_templates/update_order_item.html', {
            'form': f,
            'messages': messages,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
        })


@login_required
@staff_required
def update_order_item(request, order_item_id):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        order_item = OrderItem.objects.get(id=order_item_id)
        f = OrderItemForm(request.POST, request.FILES, instance=order_item)
        print(f.data)
        if f.is_valid():
            f.save()
        return redirect('management:order_item_management', order_id=order_item.order.id)
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        order = OrderItem.objects.get(id=order_item_id)
        f = OrderItemForm(instance=order)
        return render(request, 'management_templates/update_order_item.html', {
            'form': f,
            'messages': messages,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
        })


@login_required
@staff_required
def update_order(request, order_id):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        order = Order.objects.get(id=order_id)
        f = OrderForm(request.POST, request.FILES, instance=order)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:order_management_all'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        order = Order.objects.get(id=order_id)
        f = OrderForm(instance=order)
        return render(request, 'management_templates/update_order.html', {
            'form': f,
            'messages': messages,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
        })


@login_required
@staff_required
def instrument_management_new(request):
    search = request.GET.get("search")
    if search is not None:
        instrument_list = Instrument.objects.filter(Q(name__contains=search) | Q(details__contains=search))
    else:
        instrument_list = Instrument.objects.all()
    paginator = Paginator(instrument_list, 10, 0)
    page = request.GET.get("page")
    try:
        instruments = paginator.page(page)
    except PageNotAnInteger:
        instruments = paginator.page(1)
    except EmptyPage:
        instruments = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management/instrumentManagement.html', {
        'instruments': instruments,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages,
        'messages': messages,
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
    })


@login_required
@staff_required
def instrument_management(request):
    search = request.GET.get("search")
    if search is not None:
        instrument_list = Instrument.objects.filter(Q(name__contains=search) | Q(details__contains=search))
    else:
        instrument_list = Instrument.objects.all()
    paginator = Paginator(instrument_list, 10, 0)
    page = request.GET.get("page")
    try:
        instruments = paginator.page(page)
    except PageNotAnInteger:
        instruments = paginator.page(1)
    except EmptyPage:
        instruments = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management_templates/instrumentManagement.html', {
        'instruments': instruments,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages,
        'messages': messages,
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
    })


@login_required
@staff_required
def update_instrument(request, instrument_id):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        instrument = Instrument.objects.get(id=instrument_id)
        f = InstrumentWithIForm(request.POST, request.FILES, instance=instrument)
        print(f.data)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:instrument_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        instrument = Instrument.objects.get(id=instrument_id)
        f = InstrumentWithIForm(instance=instrument)
        return render(request, 'management_templates/update_instrument.html', {
            'form': f,
            'messages': messages,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
        })


@login_required
@staff_required
@method_decorator(csrf_exempt)
def upload_ins(request):
    if request.method == "POST":
        instrument = Instrument.objects.all().last()
        all_images = request.FILES.getlist("input24[]")
        # print("sss", all_images, request.FILES["input24[]"])
        # print(len(all_images))
        for i in range(len(all_images)):
            # instrument.created_at = datetime.utcnow()
            # print(instrument.image, instrument.image1, instrument.image2, instrument.image3, instrument.image4)
            images = all_images[i]
            # print(images)
            if i == 0:
                instrument.image = images
            elif i == 1:
                instrument.image1 = images
            elif i == 2:
                instrument.image2 = images
            elif i == 3:
                instrument.image3 = images
            elif i == 4:
                instrument.image4 = images
            instrument.save()
        # return {'success': 0}
    return HttpResponse(status=204)


@login_required
@staff_required
@method_decorator(csrf_exempt)
def add_instrument(request):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        print(request.FILES)
        print(request.POST)
        f = InstrumentWithIForm(request.POST, request.FILES)
        if f.is_valid():
            instrument = f.save()
            all_images = request.FILES.getlist("input24[]")
            # print("sss", all_images, request.FILES["input24[]"])
            # print(len(all_images))
            for i in range(len(all_images)):
                # instrument.created_at = datetime.utcnow()
                # print(instrument.image, instrument.image1, instrument.image2, instrument.image3, instrument.image4)
                images = all_images[i]
                # print(images)
                if i == 0:
                    instrument.image = images
                elif i == 1:
                    instrument.image1 = images
                elif i == 2:
                    instrument.image2 = images
                elif i == 3:
                    instrument.image3 = images
                elif i == 4:
                    instrument.image4 = images
                instrument.save()
            return redirect(reverse('management:instrument_management'))
        else:
            return render(request, 'management_templates/add_instrument.html', {
                'form': f,
                'messages': messages,
                "new_order_notifications": Notification.objects.filter(is_confirm=False),
                "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
                'profile': Profile.objects.filter(user=request.user.id).first(),
            })
    else:
        f = InstrumentWithIForm()
        return render(request, 'management_templates/add_instrument.html', {
            'form': f,
            'messages': messages,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
        })


@login_required
@staff_required
def instrument_category_management(request):
    search = request.GET.get("search")
    if search is not None:
        category_list = shop.models.Category.objects.filter(Q(name__contains=search) | Q(description__contains=search))
    else:
        category_list = shop.models.Category.objects.all()
    paginator = Paginator(category_list, 10, 0)
    page = request.GET.get("page")
    try:
        categories = paginator.page(page)
    except PageNotAnInteger:
        categories = paginator.page(1)
    except EmptyPage:
        categories = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]

    for category in categories:
        category.quantity = Instrument.objects.filter(category_id=category.id).count()

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management_templates/instrumentCategoryManagement.html', {
        'categories': categories,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages,
        'messages': messages,
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
    })


@login_required
@staff_required
def update_instrument_category(request, category_id):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        category = shop.models.Category.objects.get(id=category_id)
        f = InstrumentCategoryForm(request.POST, request.FILES, instance=category)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:instrument_category_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        category = shop.models.Category.objects.get(id=category_id)
        f = InstrumentCategoryForm(instance=category)
        return render(request, 'management_templates/update_instrument_category.html', {
            'form': f,
            'messages': messages,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
        })


@login_required
@staff_required
def add_instrument_category(request):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        f = InstrumentCategoryForm(request.POST, request.FILES)
        if f.is_valid():
            f.save()
        else:
            return render(request, 'management_templates/update_instrument_category.html', {
                'form': f,
                'messages': messages,
                "new_order_notifications": Notification.objects.filter(is_confirm=False),
                "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
                'profile': Profile.objects.filter(user=request.user.id).first(),
            })
        return redirect(reverse('management:instrument_category_management'))
    else:
        f = InstrumentCategoryForm()
        return render(request, 'management_templates/update_instrument_category.html', {
            'form': f,
            'messages': messages,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
        })


@login_required
@staff_required
def add_order(request):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        f = OrderForm(request.POST, request.FILES)
        if f.is_valid():
            f.save()
        else:
            return render(request, 'management_templates/update_order.html', {
                'form': f,
                'messages': messages,
                "new_order_notifications": Notification.objects.filter(is_confirm=False),
                "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
                'profile': Profile.objects.filter(user=request.user.id).first(),
            })
        return redirect(reverse('management:order_management_all'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        f = OrderForm()
        return render(request, 'management_templates/update_order.html', {
            'form': f,
            'messages': messages,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
        })


@login_required
@staff_required
def profile(request):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        profile_item = Profile.objects.filter(user=request.user.id).first()
        profile_item.image = request.FILES.get('photo')
        profile_item.save()
        return redirect(reverse('management:profile'))
    else:
        return render(request, 'management_templates/profile.html', {
            'profile': Profile.objects.filter(user=request.user.id).first(),
            'messages': messages,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            "notifications": Notification.objects.all()
        })


@login_required
@staff_required
def review_management(request):
    search = request.GET.get("search")
    if search is not None:
        review_list = Review.objects.filter(Q(user__username__contains=search) | Q(title__contains=search))
    else:
        review_list = Review.objects.all()
    paginator = Paginator(review_list, 10, 0)
    page = request.GET.get("page")
    try:
        reviews = paginator.page(page)
    except PageNotAnInteger:
        reviews = paginator.page(1)
    except EmptyPage:
        reviews = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management_templates/reviewManagement.html', {
        'reviews': reviews,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages,
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
        'messages': messages
    })


@login_required
@staff_required
def disabled_area_management(request):
    search = request.GET.get("search")
    if search is not None:
        review_list = DisabledArea.objects.filter(Q(area__contains=search))
    else:
        review_list = DisabledArea.objects.all()
    paginator = Paginator(review_list, 10, 0)
    page = request.GET.get("page")
    try:
        reviews = paginator.page(page)
    except PageNotAnInteger:
        reviews = paginator.page(1)
    except EmptyPage:
        reviews = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management_templates/disabledAreaManagement.html', {
        'reviews': reviews,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages,
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
        'messages': messages
    })


@login_required
@staff_required
def update_disabled_area(request, review_id):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        review = DisabledArea.objects.filter(id=review_id).first()
        f = DisabledAreaFrom(request.POST, request.FILES, instance=review)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:disabled_area_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        print(review_id)
        review = DisabledArea.objects.get(id=review_id)
        f = DisabledAreaFrom(instance=review)
        return render(request, 'management_templates/update_disabled_area.html', {
            'form': f,
            'messages': messages,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
        })


@login_required
@staff_required
def add_disabled_area(request):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        f = DisabledAreaFrom(request.POST, request.FILES)
        if f.is_valid():
            f.save()
        else:
            return render(request, 'management_templates/update_disabled_area.html', {
                'form': f,
                'messages': messages,
                "new_order_notifications": Notification.objects.filter(is_confirm=False),
                "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
                'profile': Profile.objects.filter(user=request.user.id).first(),
            })
        return redirect(reverse('management:disabled_area_management'))
    else:
        f = DisabledAreaFrom()
        return render(request, 'management_templates/update_disabled_area.html', {
            'form': f,
            'messages': messages,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
        })



@login_required
@staff_required
def update_review(request, review_id):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        review = Review.objects.filter(id=review_id).first()
        f = ReviewForm(request.POST, request.FILES, instance=review)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:review_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        print(review_id)
        review = Review.objects.get(id=review_id)
        f = ReviewForm(instance=review)
        return render(request, 'management_templates/update_review.html', {
            'form': f,
            'messages': messages,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
        })


@login_required
@staff_required
def add_review(request):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        f = ReviewForm(request.POST, request.FILES)
        if f.is_valid():
            f.save()
        else:
            return render(request, 'management_templates/update_review.html', {
                'form': f,
                'messages': messages,
                "new_order_notifications": Notification.objects.filter(is_confirm=False),
                "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
                'profile': Profile.objects.filter(user=request.user.id).first(),
            })
        return redirect(reverse('management:review_management'))
    else:
        f = ReviewForm()
        return render(request, 'management_templates/update_review.html', {
            'form': f,
            'messages': messages,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
        })


@login_required
@staff_required
def order_state(request, order_id):
    order = Order.objects.filter(id=order_id).first()
    f = OrderForm(instance=order)

    date = str(datetime.today().date())
    order_time = str(datetime.today().time()).split(".")[0]

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management_templates/order_state.html', {
        'order': order,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'form': f,
        'users': User.objects.all(),
        # TIME INFORMATION
        'date': date,
        'time': order_time,
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
        'messages': messages
    })


@login_required
@staff_required
def post_management(request):
    search = request.GET.get("search")
    if search is not None:
        post_list = Post.objects.filter(Q(name__contains=search) | Q(details__contains=search))
    else:
        post_list = Post.objects.all()
    paginator = Paginator(post_list, 10, 0)
    page = request.GET.get("page")
    try:
        posts = paginator.page(page)
    except PageNotAnInteger:
        posts = paginator.page(1)
    except EmptyPage:
        posts = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management_templates/postManagement.html', {
        'posts': posts,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages,
        'messages': messages,
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
    })


@login_required
@staff_required
def update_post(request, post_id):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        post = Post.objects.get(id=post_id)
        f = PostForm(request.POST, request.FILES, instance=post)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:post_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        post = Post.objects.get(id=post_id)
        f = PostForm(instance=post)
        return render(request, 'management_templates/update_post.html', {
            'form': f,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
            'messages': messages
        })


@login_required
@staff_required
def add_post(request):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        print(request.FILES)
        f = PostForm(request.POST, request.FILES)
        if f.is_valid():
            f.save()
        else:
            return render(request, 'management_templates/update_post.html', {
                'form': f,
                "new_order_notifications": Notification.objects.filter(is_confirm=False),
                "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
                'profile': Profile.objects.filter(user=request.user.id).first(),
                'messages': messages
            })
        return redirect(reverse('management:post_management'))
    else:
        f = PostForm()
        return render(request, 'management_templates/update_post.html', {
            'form': f,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
            'messages': messages
        })


@login_required
@staff_required
def blog_category_management(request):
    search = request.GET.get("search")
    if search is not None:
        category_list = blog.models.Category.objects.filter(Q(name__contains=search))
    else:
        category_list = blog.models.Category.objects.all()
    paginator = Paginator(category_list, 10, 0)
    page = request.GET.get("page")
    try:
        categories = paginator.page(page)
    except PageNotAnInteger:
        categories = paginator.page(1)
    except EmptyPage:
        categories = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]

    for category in categories:
        category.quantity = Post.objects.filter(category_id=category.id).count()

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management_templates/blogCategoryManagement.html', {
        'categories': categories,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages,
        'messages': messages,
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
    })


@login_required
@staff_required
def update_blog_category(request, category_id):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        category = blog.models.Category.objects.get(id=category_id)
        f = BlogCategoryForm(request.POST, request.FILES, instance=category)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:blog_category_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        category = blog.models.Category.objects.filter(id=category_id).first()
        f = BlogCategoryForm(instance=category)
        return render(request, 'management_templates/update_blog_category.html', {
            'form': f,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
            'messages': messages
        })


@login_required
@staff_required
def add_blog_category(request):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        f = BlogCategoryForm(request.POST, request.FILES)
        if f.is_valid():
            f.save()
        else:
            return render(request, 'management_templates/update_blog_category.html', {
                'form': f,
                "new_order_notifications": Notification.objects.filter(is_confirm=False),
                "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
                'profile': Profile.objects.filter(user=request.user.id).first(),
                'messages': messages
            })
        return redirect(reverse('management:blog_category_management'))
    else:
        f = BlogCategoryForm()
        return render(request, 'management_templates/update_blog_category.html', {
            'form': f,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
            'messages': messages
        })


@login_required
@staff_required
def cart_management(request):
    search = request.GET.get("search")
    if search is not None:
        cart_list = Cart.objects.filter(Q(user__username__contains=search) | Q(instrument__name__contains=search))
    else:
        cart_list = Cart.objects.all()
    paginator = Paginator(cart_list, 10, 0)
    page = request.GET.get("page")
    try:
        carts = paginator.page(page)
    except PageNotAnInteger:
        carts = paginator.page(1)
    except EmptyPage:
        carts = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management_templates/cartManagement.html', {
        'carts': carts,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages,
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
        'messages': messages
    })


@login_required
@staff_required
def update_cart(request, cart_id):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        cart = Cart.objects.get(id=cart_id)
        f = CartForm(request.POST, request.FILES, instance=cart)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:cart_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        cart = Cart.objects.get(id=cart_id)
        f = CartForm(instance=cart)
        return render(request, 'management_templates/update_cart.html', {
            'form': f,
            'messages': messages,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
        })


@login_required
@staff_required
def add_cart(request):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        f = CartForm(request.POST, request.FILES)
        if f.is_valid():
            f.save()
        else:
            return render(request, 'management_templates/update_cart.html', {
                'form': f,
                'messages': messages,
                "new_order_notifications": Notification.objects.filter(is_confirm=False),
                "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
                'profile': Profile.objects.filter(user=request.user.id).first(),
            })
        return redirect(reverse('management:cart_management'))
    else:
        f = CartForm()
        return render(request, 'management_templates/update_cart.html', {
            'form': f,
            'messages': messages,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
        })


@login_required
@staff_required
def wishlist_management(request):
    search = request.GET.get("search")
    if search is not None:
        wishlist_list = Wishlist.objects.filter(
            Q(user__username__contains=search) | Q(instrument__name__contains=search))
    else:
        wishlist_list = Wishlist.objects.all()
    paginator = Paginator(wishlist_list, 10, 0)
    page = request.GET.get("page")
    try:
        wishlists = paginator.page(page)
    except PageNotAnInteger:
        wishlists = paginator.page(1)
    except EmptyPage:
        wishlists = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    return render(request, 'management_templates/wishlistManagement.html', {
        'wishlists': wishlists,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages,
        "new_order_notifications": Notification.objects.filter(is_confirm=False),
        "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
        "messages": messages
    })


@login_required
@staff_required
def update_wishlist(request, wishlist_id):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        wishlist = Wishlist.objects.get(id=wishlist_id)
        f = WishlistForm(request.POST, request.FILES, instance=wishlist)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:wishlist_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        wishlist = Wishlist.objects.get(id=wishlist_id)
        f = WishlistForm(instance=wishlist)
        return render(request, 'management_templates/update_wishlist.html', {
            'form': f,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
            'messages': messages
        })


@login_required
@staff_required
def add_wishlist(request):
    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    if request.method == "POST":
        f = WishlistForm(request.POST, request.FILES)
        if f.is_valid():
            f.save()
        else:
            return render(request, 'management_templates/update_wishlist.html', {
                'form': f,
                "new_order_notifications": Notification.objects.filter(is_confirm=False),
                "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
                'profile': Profile.objects.filter(user=request.user.id).first(),
                'messages': messages
            })
        return redirect(reverse('management:wishlist_management'))
    else:
        f = WishlistForm()
        return render(request, 'management_templates/update_wishlist.html', {
            'form': f,
            "new_order_notifications": Notification.objects.filter(is_confirm=False),
            "confirm_order_notifications": Notification.objects.filter(is_confirm=True),
            'profile': Profile.objects.filter(user=request.user.id).first(),
            'messages': messages
        })


@login_required
@staff_required
def view_log(request):
    # check if file exists
    if os.path.isfile("access_log/access_log.log"):
        # read file
        with open("access_log/access_log.log", "r") as f:
            log = f.read()
        return HttpResponse(log, content_type="text/plain")
    return HttpResponse("LOG FILE NOT FOUND")
