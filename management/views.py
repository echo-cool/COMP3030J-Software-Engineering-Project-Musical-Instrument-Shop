from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect

# Create your views here.
from django.urls import reverse

from management.forms import OrderForm
from shop.models import Order, Instrument, Profile
from django.contrib.auth.decorators import login_required, permission_required


def index(request):
    return render(request, 'management_templates/index.html')


@login_required
def order_management_all(request):
    data = []
    orders = Order.objects.all()
    for order_item in orders:
        tmp = {
            'order': order_item,
            'user': User.objects.filter(id=order_item.user.id).first(),
            'instrument': Instrument.objects.filter(
                id=order_item.instrument.id).first() if order_item.instrument.id is not None else None,
            'profile': Profile.objects.filter(
                id=order_item.user.profile.id).first() if order_item.user.profile.id is not None else None
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
        tmp = {
            'order': order_item,
            'user': User.objects.filter(id=order_item.user.id).first(),
            'instrument': Instrument.objects.filter(
                id=order_item.instrument.id).first() if order_item.instrument.id is not None else None,
            'profile': Profile.objects.filter(
                id=order_item.user.profile.id).first() if order_item.user.profile.id is not None else None
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
        tmp = {
            'order': order_item,
            'user': User.objects.filter(id=order_item.user.id).first(),
            'instrument': Instrument.objects.filter(
                id=order_item.instrument.id).first() if order_item.instrument.id is not None else None,
            'profile': Profile.objects.filter(
                id=order_item.user.profile.id).first() if order_item.user.profile.id is not None else None
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
        tmp = {
            'order': order_item,
            'user': User.objects.filter(id=order_item.user.id).first(),
            'instrument': Instrument.objects.filter(
                id=order_item.instrument.id).first() if order_item.instrument.id is not None else None,
            'profile': Profile.objects.filter(
                id=order_item.user.profile.id).first() if order_item.user.profile.id is not None else None
        }
        data.append(tmp)
    return render(request, 'management_templates/orderManagement.html', {
        'orders': data,
        'profile': Profile.objects.filter(id=request.user.profile.id).first(),
        'mode': 3
    })


@login_required
def update_order(request, order_id):
    if request.method == "POST":
        order = Order.objects.get(id=order_id)
        f = OrderForm(request.POST, instance=order)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:order_management_all'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        order = Order.objects.get(id=order_id)
        f = OrderForm(instance=order)
        return render(request, 'management_templates/update_order.html', {
            'form': f
        })

