import order as order
from django.shortcuts import render

# Create your views here.
from rest_framework.authtoken.admin import User

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
        tmp = {
            'order': order_item,
            'user': User.objects.filter(id=order_item.user.id).first(),
            'instrument': Instrument.objects(id=order_item.instrument.id).first()
        }
        data.append(tmp)
    return render(request, 'management_templates/orderManagement.html', {
        'orders': data,
    })
