from django.contrib.auth.models import User
from django.shortcuts import render

# Create your views here.

from app.utils import login_required
from shop.models import Order, Instrument


@login_required
def index(request):
    return render(request, 'management_templates/index.html')


@login_required
def order_management(request):
    data = []
    orders = Order.objects.all()
    for order_item in orders:
        print(order_item.instrument)
        if order_item.instrument.id is None:
            tmp = {
                'order': order_item,
                'user': User.objects.filter(id=order_item.user.id).first(),
                'instrument': None
            }
        else:
            tmp = {
                'order': order_item,
                'user': User.objects.filter(id=order_item.user.id).first(),
                'instrument': Instrument.objects.filter(id=order_item.instrument.id).first()
            }
        data.append(tmp)
    return render(request, 'management_templates/orderManagement.html', {
        'orders': data,
    })
