from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'shop_templates/index2.html')


def model(request):
    return render(request, 'shop_templates/3d3.html')


def create_order(request):
    return render(request, 'shop_templates/create_order.html')


def confirm(request):
    return render(request, 'shop_templates/confirm.html')