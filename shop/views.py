# Create your views here.
import json
import random

from django.contrib import messages
from django.contrib.auth.models import User
from django.db.models import Max
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse

from management.forms import SearchForm
from shop.forms import UpdateProfileForm
from shop.models import Instrument, InstrumentDetail, Category, Order, Review, Cart, Wishlist
from shop.models import Instrument, InstrumentDetail, Category, Order, Review, Cart
from management.forms import InstrumentForm, SearchForm
from shop.models import Instrument, InstrumentDetail, Category, Order, Review, Profile


def index(request):
    instruments = Instrument.objects.all()
    categories = Category.objects.all()
    index_categories = {
        'left_700_604': {
            'category': Category.objects.get(id=1),
            'count': Instrument.objects.filter(category=1).count()
        },
        "right_bottom_800_343": {
            'category': Category.objects.get(id=2),
            'count': Instrument.objects.filter(category=2).count()
        },
        "right_top1_500_480": {
            'category': Category.objects.get(id=2),
            'count': Instrument.objects.filter(category=2).count()
        },
        "right_top2_500_480": {
            'category': Category.objects.get(id=1),
            'count': Instrument.objects.filter(category=1).count()
        },
    }
    for i in instruments:
        i.percentage = round(i.price * 100 / i.old_price, 2)

    return render(request, 'shop_templates/index.html', {
        "instruments": instruments,
        "categories": categories,
        "index_categories": index_categories
    })


def category_view(request, category_id):
    categories = Category.objects.all()
    category = get_object_or_404(Category, pk=category_id)
    instruments = Instrument.objects.filter(category=category)
    return render(request, 'shop_templates/category/category_view.html', {
        "category": category,
        "instruments": instruments,
        "categories": categories
    })


def product_details(request, product_id):
    categories = Category.objects.all()
    instrument = Instrument.objects.get(id=product_id)
    instrument_details = InstrumentDetail.objects.filter(instrument=instrument).first()
    all_instruments = Instrument.objects.all()
    related = []
    for i in range(5):
        num = random.randint(0, len(all_instruments) - 1)
        related.append(all_instruments[num])
    return render(request, 'shop_templates/product-detail.html', {
        "instrument": instrument,
        "discount": instrument.price * 100 / instrument.old_price,
        "instrument_details": instrument_details,
        "related": related,
        'categories': categories
    })


def leave_review(request, order_id, instrument_id):
    return render(request, 'shop_templates/leave-review.html')


def confirm_submit(request):
    if request.method == "POST":
        rating = request.POST.get("rating-input", None)
        review_text = request.POST.get("review", None)
        fileupload = request.FILES.get("fileupload", None)
        # check_selected = request.POST.get("check", None)
        print("rating: ", rating)
        print("review_text: ", review_text)
        print("fileupload: ", fileupload)
        # print("check_selected: ", check_selected)
        # f = ReviewForm(request.POST, request.FILES)
        # if f.is_valid():
        #     f.save()
        # print(f.errors)
        new_review = Review(order=Order.objects.filter(id=2).first(), user_id=1, rating=rating,
                            review_text=review_text, file_upload=fileupload)
        new_review.save()
    return render(request, 'shop_templates/product-detail.html')


def personal_profile(request):
    user = request.user
    username = user.username
    email = user.email
    prof = Profile.objects.filter(user=user).first()
    print(prof)
    if prof is None:
        prof = Profile()
    phone = prof.phone
    address = prof.address
    form = UpdateProfileForm({
        'username': username,
        'email': email,
        'phone': phone,
        'address': address
    })
    # print(form)
    return render(request, 'shop_templates/personal_profile.html', {
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'form': form
    })


def leave_review2(request):
    print(request)
    return render(request, 'shop_templates/leave-review-2.html')


def model_view(request, product_id):
    instrument = get_object_or_404(Instrument, pk=product_id)
    return render(request, 'shop_templates/product-detail-model.html', {
        "instrument": instrument,
    })


def wishlist(request):
    wishlists = Wishlist.objects.filter(user=1)
    return render(request, 'shop_templates/wishlist.html', {
        "wishlists": wishlists,
    })


def checkout(request):
    # get or post
    # check if user is not logged in
    if not request.user.is_authenticated:
        return redirect('/login')
    else:
        subtotal_all = 0
        carts = Cart.objects.filter(user=request.user)
        for cart in carts:
            subtotal_all += cart.instrument.price * cart.count
        shipping = 7.0
        total = subtotal_all + shipping
        return render(request, 'shop_templates/checkout.html', {
            "carts": Cart.objects.filter(user=request.user),
            "subtotal_all": subtotal_all,
            "shipping": shipping,
            "total": total,
        })


def confirm(request):
    # get current max order_id
    if Order.objects.all().count() == 0:
        order_id = 1
    else:
        order_id = Order.objects.all().aggregate(Max('order_id'))['order_id__max'] + 1
    carts = Cart.objects.filter(user=request.user)
    subtotal_all = 0
    for cart in carts:
        instrument = cart.instrument
        quantity = cart.count
        subtotal = quantity * instrument.price
        subtotal_all += subtotal
        new_order = Order(user=request.user, order_id=order_id, instrument=instrument,
                          quantity=quantity, subtotal=subtotal, name=request.POST['name'],
                          last_name=request.POST['last_name'],
                          full_address=request.POST['full_address'], city=request.POST['city'],
                          postal_code=request.POST['postal_code'], country=request.POST['country'],
                          telephone=request.POST['telephone'], payment=request.POST['payment'],
                          shipping=request.POST['shipping'])
        new_order.save()
        cart.delete()
    return render(request, 'shop_templates/confirm.html')


def model_design(request, model_id):
    return render(request, 'shop_templates/model-design.html', {
        "model_id": model_id,
    })


def model_design2(request, model_id):
    return render(request, 'shop_templates/model-design2.html', {
        "model_id": model_id,
    })


# search instruments by category
def product_search_by_category(request):
    if request.method == "GET":
        category_li = request.GET.get("checked_category", None)
        search_text = request.GET.get("search", "")
        category_list = [ch for ch in category_li]
        i = 0
        instruments_by_search_bar = Instrument.objects.filter(name__contains=search_text)
        instruments = []
        while i < len(category_list):
            if category_list[i] == str(1):
                searched_instruments = instruments_by_search_bar.filter(category=i + 1)
                for j in searched_instruments:
                    instruments.append(j)
                print(len(instruments))
            i = i + 1
        response = render(request, 'shop_templates/searched-product-list.html', {
            "instruments_searched": instruments,
        })
        return response


# search instruments by keyword
def product_search(request):
    search_text = request.GET.get("search", "")
    search_category_text = request.GET.get("category", None)
    all_instruments = Instrument.objects.filter(name__contains=search_text)
    if search_category_text:
        search_category_list = search_category_text.split("|")
        search_category = [int(i) for i in search_category_list]
        instruments = all_instruments.filter(category__in=search_category)
    else:
        instruments = all_instruments
    categories = {}
    category_list = Category.objects.all()
    for i in instruments:
        i.percentage = round(i.price * 100 / i.old_price, 2)
    for category in category_list:
        categories[category] = instruments.filter(category=category).count()
    return render(request, 'shop_templates/product-search.html', {
        "instruments": instruments,
        'categories': categories,
    })


# search instruments by keyword
# def empty_search(request):
#     if request.method == "POST":
#         print("redirect from Empty", request.POST.get("search_name", None))
#         return redirect('shop:product_search', keyword=request.POST.get("search_name", None))
#     else:
#         # search homepage, show all instruments
#         f = SearchForm()
#         instruments = Instrument.objects.all()
#         # categories = Category.objects.all()
#         for i in instruments:
#             i.percentage = round(i.price * 100 / i.old_price, 2)
#         return render(request, 'shop_templates/product-search.html', {
#             'form': f,
#             "instruments": instruments,
#         })


def cart(request):
    if request.user.is_authenticated:
        carts = Cart.objects.filter(user=request.user)
        each_cart = {}
        for each_cart in carts:
            each_cart.total_money = each_cart.count * each_cart.instrument.price
        return render(request, 'shop_templates/cart.html', {
            "carts": carts,
        })
    else:
        return redirect('accounts:log_in')


def product_add_cart(request, instrument_id):
    instrument = Instrument.objects.filter(id=instrument_id).first()
    exist_cart = Cart.objects.filter(instrument_id=instrument_id).first()
    if exist_cart:
        exist_cart.count = exist_cart.count + 1
        exist_cart.save()
    else:
        new_cart = Cart(user=request.user, instrument=instrument, count=1, user_id=1)
        new_cart.save()
    return redirect('shop:cart')


def product_minus_cart(request, instrument_id):
    exist_cart = Cart.objects.filter(instrument_id=instrument_id).first()
    if exist_cart.count > 1:
        exist_cart.count = exist_cart.count - 1
        exist_cart.save()
    else:
        exist_cart.delete()
        exist_cart.save()
    return redirect('shop:cart')


def product_details_test_model(request, product_id):
    categories = Category.objects.all()
    instrument = Instrument.objects.get(id=product_id)
    instrument_details = InstrumentDetail.objects.filter(instrument=instrument).first()
    all_instruments = Instrument.objects.all()
    related = []
    for i in range(5):
        num = random.randint(0, len(all_instruments) - 1)
        related.append(all_instruments[num])
    return render(request, 'shop_templates/product-detail-2.html', {
        "instrument": instrument,
        "discount": instrument.price * 100 / instrument.old_price,
        "instrument_details": instrument_details,
        "related": related,
        'categories': categories
    })
