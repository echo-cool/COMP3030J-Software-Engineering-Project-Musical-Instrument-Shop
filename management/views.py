from django.contrib.auth.models import User
from django.shortcuts import render

# Create your views here.

from app.utils import login_required
from shop.models import Order, Instrument, Profile


@login_required
def index(request):
    return render(request, 'management_templates/index.html')


@login_required
def order_management_all(request):
    data = []
    orders = Order.objects.all()
    for order_item in orders:
        print(order_item.instrument)

        tmp = {
            'order': order_item,
            'user': User.objects.filter(id=order_item.user.id).first(),
            'instrument': Instrument.objects.filter(id=order_item.instrument.id).first() if order_item.instrument.id is not None else None,
            'profile': Profile.objects.filter(id=order_item.user.profile.id).first() if order_item.user.profile.id is not None else None
        }
        data.append(tmp)
    return render(request, 'management_templates/orderManagement.html', {
        'orders': data,
        'profile': Profile.objects.filter(id=request.user.profile.id).first(),
        'mode': 0
    })


@login_required
def order_management_unconfirmed(request):
    data = []
    orders = Order.objects.filter(shopper_confirmed=False)
    for order_item in orders:
        print(order_item.instrument)

        tmp = {
            'order': order_item,
            'user': User.objects.filter(id=order_item.user.id).first(),
            'instrument': Instrument.objects.filter(id=order_item.instrument.id).first() if order_item.instrument.id is not None else None,
            'profile': Profile.objects.filter(id=order_item.user.profile.id).first() if order_item.user.profile.id is not None else None
        }
        data.append(tmp)
    return render(request, 'management_templates/orderManagement.html', {
        'orders': data,
        'profile': Profile.objects.filter(id=request.user.profile.id).first(),
        'mode': 1
    })


@login_required
def order_management_confirmed(request):
    data = []
    orders = Order.objects.filter(shopper_confirmed=True).filter(delivery_confirmed=False)
    for order_item in orders:
        print(order_item.instrument)

        tmp = {
            'order': order_item,
            'user': User.objects.filter(id=order_item.user.id).first(),
            'instrument': Instrument.objects.filter(id=order_item.instrument.id).first() if order_item.instrument.id is not None else None,
            'profile': Profile.objects.filter(id=order_item.user.profile.id).first() if order_item.user.profile.id is not None else None
        }
        data.append(tmp)
    return render(request, 'management_templates/orderManagement.html', {
        'orders': data,
        'profile': Profile.objects.filter(id=request.user.profile.id).first(),
        'mode': 2
    })


@login_required
def order_management_delivered(request):
    data = []
    orders = Order.objects.filter(delivery_confirmed=True)
    for order_item in orders:
        print(order_item.instrument)

        tmp = {
            'order': order_item,
            'user': User.objects.filter(id=order_item.user.id).first(),
            'instrument': Instrument.objects.filter(id=order_item.instrument.id).first() if order_item.instrument.id is not None else None,
            'profile': Profile.objects.filter(id=order_item.user.profile.id).first() if order_item.user.profile.id is not None else None
        }
        data.append(tmp)
    return render(request, 'management_templates/orderManagement.html', {
        'orders': data,
        'profile': Profile.objects.filter(id=request.user.profile.id).first(),
        'mode': 3
    })
