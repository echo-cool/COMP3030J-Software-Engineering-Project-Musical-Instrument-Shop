from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q
from shop.models import Order, Instrument


def index(request):
    users = User.objects.all()
    orders = Order.objects.all()
    instruments = Instrument.objects.all()
    return render(request, 'echarts/index.html',{
        'users': users,
        'orders': orders,
        'instruments': instruments,
    })
