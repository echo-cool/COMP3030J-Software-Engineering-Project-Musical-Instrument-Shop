from django.db.models import DateTimeField
from django.shortcuts import render, get_object_or_404

from management.forms import ReviewForm
from shop.models import Instrument, Order

# Create your views here.
from shop.models import Instrument, Review


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
        review_text = request.POST.get("review", None)
        fileupload = request.POST.get("fileupload", None)
        check_selected = request.POST.get("check", None)
        print("rating: ", rating)
        print("review_text: ", review_text)
        print("fileupload: ", fileupload)
        print("check_selected: ", check_selected)
        new_review = Review(order_id=1, user_id=1, rating=rating,
                            review_text=review_text, fileupload=fileupload,
                            check_selected=check_selected)
        # new_review.save()
        new_review.order_id = 1
        new_review.user_id = 1
        new_review.save()
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
