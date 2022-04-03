from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q

from shop.models import Order, Instrument


def getUserActivationRatio(request):
    users = User.objects.all()
    activated = 0
    notActivated = 0
    for user in users:
        if user.is_active:
            activated += 1
        else:
            notActivated += 1
    return {
        'activated': activated,
        'notActivated': notActivated,
        'activatedRatio': (activated / (activated + notActivated)) * 100
    }


def GetOrderDeliveredRatio(request):
    orders = Order.objects.all()
    delivered = 0
    notDelivered = 0
    for order in orders:
        if order.delivery_confirmed:
            delivered += 1
        else:
            notDelivered += 1
    return {
        'delivered': delivered,
        'notDelivered': notDelivered,
        'deliveredRatio': (delivered / (delivered + notDelivered)) * 100
    }


def getTotalTurnOver(request):
    orders = Order.objects.all()
    totalTurnOver = 0
    for order in orders:
        totalTurnOver += order.subtotal
    return totalTurnOver


def getTopThreeInstrument(request):
    orders = Order.objects.all()
    res = {
    }
    for i in orders:
        if i.instrument.name in res:
            res[i.instrument.name] += i.subtotal
        else:
            res[i.instrument.name] = i.subtotal
    sorted_res = sorted(res.items(), key=lambda x: x[1], reverse=True)
    return sorted_res[:3]


def getThreeRecentOrders(request):
    orders = Order.objects.all()
    return orders[:3]


def getThreeRecentOrders2(request):
    orders = Order.objects.all()
    return orders[3:7]


def index(request):
    users = User.objects.all()
    orders = Order.objects.all()
    instruments = Instrument.objects.all()
    # Get user activation status

    return render(request, 'echarts/chart1/index.html', {
        'users': users,
        'orders': orders,
        'instruments': instruments,
        "UserActivationRatio": getUserActivationRatio(request),
        "OrderDeliveredRatio": GetOrderDeliveredRatio(request),
        "TotalTurnOver": getTotalTurnOver(request),
        "TopThreeInstrument": getTopThreeInstrument(request),
        "ThreeRecentOrders": getThreeRecentOrders(request),
        "ThreeRecentOrders2": getThreeRecentOrders2(request)
    })
