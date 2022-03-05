from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'shop_templates/index2.html')


def product_details(request):
    return render(request, 'shop_templates/product-detail-2.html')


def model(request):
    return render(request, 'shop_templates/3d3.html')


def checkout(request):
    return render(request, 'shop_templates/checkout.html')


def confirm(request):
    return render(request, 'shop_templates/confirm.html')


def cart(request):
    return render(request, 'shop_templates/cart.html')
