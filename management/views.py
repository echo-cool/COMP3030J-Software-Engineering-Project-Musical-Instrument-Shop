from django.shortcuts import render


# Create your views here.

# The main page of the management page
from shop.models import Order, Instrument, Category


def index(request):
    return render(request, 'index.html')


# The order management page
def order_management(request):
    orders = Order.objects.order_by("created_at")
    category = Category.objects.all()
    print(category)
    return render(request, 'order_management.html')
