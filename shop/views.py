from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'shop_templates/index.html')


def create_order(request):
    return render(request, 'shop_templates/create_order.html')


def confirm(request):
    return render(request, 'shop_templates/confirm.html')