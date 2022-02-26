from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'management_templates/index.html')


def order_management(request):
    return render(request, 'management_templates/orderManagement.html')
