from django.shortcuts import render, get_object_or_404
from shop.models import Instrument


# Create your views here.
from shop.models import Instrument


def index(request):
    return render(request, 'shop_templates/index2.html')


def product_details(request, product_id):
    instrument = Instrument.objects.get(id=product_id)
    print(instrument.price)
    print(instrument.name)
    return render(request, 'shop_templates/product-detail-2.html')


def model_view(request, product_id):
    instrument = get_object_or_404(Instrument, pk=product_id)
    return render(request, 'shop_templates/3d3.html', {
        "instrument": instrument
    })


def checkout(request):
    return render(request, 'shop_templates/checkout.html')


def confirm(request):
    return render(request, 'shop_templates/confirm.html')


def tes(request):
    return render(request, 'shop_templates/TESLA.html')


def cart(request):
    return render(request, 'shop_templates/cart.html')
