from django.shortcuts import render, get_object_or_404
from shop.models import Instrument

# Create your views here.
from shop.models import Instrument


def index(request):
    return render(request, 'shop_templates/index2.html')


def product_details(request, product_id):
    instrument = Instrument.objects.get(id=product_id)
    print(instrument.image)
    return render(request, 'shop_templates/product-detail-2.html', {
        "instrument": instrument,
        "discount": instrument.price * 100 / instrument.old_price
    })


def leave_review(request, order_id, instrument_id):
    return render(request, 'shop_templates/leave-review.html')


def confirm_submit(request):
    if request.method == "POST":
        rating = request.POST.get("rating-input", None)
        title = request.POST.get("title", None)
        review = request.POST.get("review", None)
        fileupload = request.POST.get("fileupload", None)
        check = request.POST.get("check", None)
        print("rating: ", rating)
        print("title: ", title)
        print("review: ", review)
        print("fileupload: ", fileupload)
        print("check: ", check)
    return render(request, 'shop_templates/leave-review-2.html')


def leave_review2(request):
    print(request)
    return render(request, 'shop_templates/leave-review-2.html')


def model_view(request, product_id):
    instrument = get_object_or_404(Instrument, pk=product_id)
    return render(request, 'shop_templates/3d3.html', {
        "instrument": instrument,
    })


def checkout(request):
    return render(request, 'shop_templates/checkout.html')


def confirm(request):
    return render(request, 'shop_templates/confirm.html')


def tes(request):
    return render(request, 'shop_templates/LIPU.html')


def cart(request):
    return render(request, 'shop_templates/cart.html')
