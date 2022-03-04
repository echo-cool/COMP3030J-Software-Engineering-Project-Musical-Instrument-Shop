from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

# Create your views here.
from django.urls import reverse

from management.forms import OrderForm, InstrumentForm
from shop.models import Order, Instrument, Profile, Category, Review
from django.contrib.auth.decorators import login_required, permission_required


@login_required
def index(request):
    counts = {
        'user': User.objects.count(),
        'instrument': Instrument.objects.count(),
        'order': Order.objects.count(),
        'category': Category.objects.count(),
        'review': Review.objects.count(),
    }
    pie_data = {}
    for category_item in Category.objects.all():
        pie_data[category_item.name.replace('\n', '').replace('\r', '')] = Instrument.objects.filter(category=category_item.id).count()

    tmp = {}
    for instrument_item in Instrument.objects.all():
        tmp[instrument_item] = Order.objects.filter(instrument=instrument_item.id).count()
    popular_instruments = sorted(tmp.items(), key=lambda x: x[1], reverse=True)[0:5]

    return render(request, 'management_templates/index.html', {
        'counts': counts,
        'pie_data': pie_data,
        'popular_instruments': popular_instruments
    })


@login_required
def order_management_all(request):
    data = []
    orders = Order.objects.all()
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
    return render(request, 'management_templates/orderManagement.html', {
        'orders': data,
        'profile': Profile.objects.filter(user=request.user.id).first(),
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
        'profile': Profile.objects.filter(user=request.user.id).first(),
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
        'profile': Profile.objects.filter(user=request.user.id).first(),
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
        'profile': Profile.objects.filter(user=request.user.id).first(),
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


@login_required
def instrument_management(request):
    instrument_list = Instrument.objects.all()
    paginator = Paginator(instrument_list, 10, 0)
    page = request.GET.get("page")
    try:
        instruments = paginator.page(page)
    except PageNotAnInteger:
        instruments = paginator.page(1)
    except EmptyPage:
        instruments = paginator.page(paginator.num_pages)
    # instruments = Instrument.objects.all()
    return render(request, 'management_templates/instrumentManagement.html', {
        'instruments': instruments,
        'profile': Profile.objects.filter(user=request.user.id).first()
    })


@login_required
def update_instrument(request, instrument_id):
    if request.method == "POST":
        instrument = Instrument.objects.get(id=instrument_id)
        f = InstrumentForm(request.POST, instance=instrument)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:instrument_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        instrument = Instrument.objects.get(id=instrument_id)
        f = InstrumentForm(instance=instrument)
        return render(request, 'management_templates/update_instrument.html', {
            'form': f
        })


@login_required
def add_instrument(request):
    if request.method == "POST":
        f = InstrumentForm(request.POST)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:instrument_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        f = InstrumentForm()
        return render(request, 'management_templates/update_instrument.html', {
            'form': f
        })

