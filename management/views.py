from django.shortcuts import render

# Create your views here.
from app.utils import login_required
from shop.models import Order

@login_required
def index(request):
    return render(request, 'management_templates/index.html')


@login_required
def order_management(request):
    user = request.user
    orders = Order.objects.filter(user=user.id)
    return render(request, 'management_templates/orderManagement.html', {
        'orders': orders,
    })
