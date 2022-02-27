from django.contrib.auth.models import User
from django.shortcuts import render, redirect

# Create your views here.
from django.urls import reverse

from management.forms import OrderForm
from shop.models import Order, Instrument, Profile


def index(request):
    return render(request, 'management_templates/index.html')


def order_management(request):
    data = []
    orders = Order.objects.all()
    for order_item in orders:
        print(order_item.instrument)

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
        'profile': Profile.objects.filter(id=request.user.profile.id).first()
    })


def update_order(request, order_id):
    if request.method == "POST":
        f = OrderForm(request.POST)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:order_management'))
    else:
        order = Order.objects.get(id=order_id)
        f = OrderForm(instance=order)

        return render(request, 'management_templates/update_order.html', {
            'form': f
        })
