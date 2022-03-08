from django.shortcuts import render, get_object_or_404
from shop.models import Instrument

# Create your views here.
from shop.models import Instrument, Order


def index(request):
    return render(request, 'shop_templates/index2.html')


def product_details(request, product_id):
    instrument = Instrument.objects.get(id=product_id)
    print(instrument.image)
    return render(request, 'shop_templates/product-detail-2.html', {
        "instrument": instrument,
        "discount": instrument.price * 100 / instrument.old_price
    })


def model_view(request, product_id):
    instrument = get_object_or_404(Instrument, pk=product_id)
    return render(request, 'shop_templates/3d3.html', {
        "instrument": instrument,
    })


def checkout(request):
    return render(request, 'shop_templates/checkout.html')


def confirm(request):
    a_row = Order(user=request.user, name=request.POST['name'], last_name=request.POST['last_name'],
                  full_address=request.POST['full_address'], city=request.POST['city'],
                  postal_code=request.POST['postal_code'], country=request.POST['country'],
                  telephone=request.POST['telephone'], payment=request.POST['payment'],
                  shipping=request.POST['shipping'])
    a_row.save()
    return render(request, 'shop_templates/confirm.html')


def tes(request):
    return render(request, 'shop_templates/LIPU.html')


def cart(request):
    return render(request, 'shop_templates/cart.html')
