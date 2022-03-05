from django.shortcuts import render


# Create your views here.
from shop.models import Instrument


def index(request):
    return render(request, 'shop_templates/index2.html')


def product_details(request, product_id):
    instrument = Instrument.objects.get(id=product_id)
    print(instrument.price)
    print(instrument.name)
    return render(request, 'shop_templates/product-detail-2.html')


def model(request):
    return render(request, 'shop_templates/3d3.html')


def checkout(request):
    return render(request, 'shop_templates/checkout.html')


def confirm(request):
    return render(request, 'shop_templates/confirm.html')


def tes(request):
    return render(request, 'shop_templates/TESLA.html')


def cart(request):
    return render(request, 'shop_templates/cart.html')
