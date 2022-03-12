# Create your views here.
import json
import random

from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse

from management.forms import InstrumentForm, SearchForm
from shop.models import Instrument, InstrumentDetail, Category, Order, Review


def index(request):
    instruments = Instrument.objects.all()
    categories = Category.objects.all()
    for i in instruments:
        i.percentage = round(i.price * 100 / i.old_price, 2)
    return render(request, 'shop_templates/index2.html', {
        "instruments": instruments,
        "categories": categories
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
    return render(request, 'shop_templates/product-detail-2.html', {
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
        fileupload = request.POST.get("fileupload", None)
        # check_selected = request.POST.get("check", None)
        print("rating: ", rating)
        print("review_text: ", review_text)
        print("fileupload: ", fileupload)
        # print("check_selected: ", check_selected)
        # f = ReviewForm(request.POST, request.FILES)
        # if f.is_valid():
        #     f.save()
        # print(f.errors)
        new_review = Review(order_id=1, user_id=1, rating=rating,
                            review_text=review_text, fileupload=fileupload)
        new_review.save()
    return render(request, 'shop_templates/product-detail-2.html')


def leave_review2(request):
    print(request)
    return render(request, 'shop_templates/leave-review-2.html')


def model_view(request, product_id):
    instrument = get_object_or_404(Instrument, pk=product_id)
    return render(request, 'shop_templates/3d3.html', {
        "instrument": instrument,
    })

#
# def checkout(request):
#     new_item = Item(item_id=0)
#     new_item.save()
#     return render(request, 'shop_templates/checkout.html', {
#         "id": new_item.id,
#     })
#
#
# def confirm(request):
#     new_order = Order(user=request.user, name=request.POST['name'], last_name=request.POST['last_name'],
#                       full_address=request.POST['full_address'], city=request.POST['city'],
#                       postal_code=request.POST['postal_code'], country=request.POST['country'],
#                       telephone=request.POST['telephone'], payment=request.POST['payment'],
#                       shipping=request.POST['shipping'])
#     new_order.save()
#     # b_row = Item.objects.get(id=request.POST['item_id'])
#     # b_row.Order = new_order
#     # b_row.save()
#     Item.objects.filter(id=request.POST['item_id']).update(Order=new_order)
#     return render(request, 'shop_templates/confirm.html')


def model_design(request):
    return render(request, 'shop_templates/model_design.html')


# search instruments by category
def product_search_by_category(request):
    if request.method == "GET":
        category_li = request.GET.get("checked_category", None)
        print(category_li)
        category_list = [ch for ch in category_li]
        print(category_list)
        i = 0
        instruments = []
        while i < len(category_list):
            print(category_list[i] == str(1))
            if category_list[i] == str(1):
                searched_instruments = Instrument.objects.filter(category_id=i + 1)
                for j in searched_instruments:
                    instruments.append(j)
                print(len(instruments))
            i = i + 1
        response = render(request, 'shop_templates/searched_product_list.html', {
            "instruments_searched": instruments,
        })
        return response


# search instruments by keyword
def product_search(request, keyword):
    if request.method == "POST":
        print("pst")
        print("pst")
        print("pst")
        print("pst")
        print("pst")
    else:
        print("show result here", request.POST.get("search_name", None))
        f = SearchForm(initial={'search_name': keyword})
        search_name = keyword
        print(search_name)
        instruments = Instrument.objects.filter(name__contains=search_name)
        # categories = Category.objects.all()
        for i in instruments:
            i.percentage = round(i.price * 100 / i.old_price, 2)
        return render(request, 'shop_templates/listing-row-1-sidebar-left.html', {
            'form': f,
            "instruments": instruments,
        })


# search instruments by keyword
def empty_search(request):
    if request.method == "POST":
        print("redirect from Empty", request.POST.get("search_name", None))
        return redirect('shop:product_search', keyword=request.POST.get("search_name", None))
    else:
        # search homepage, show all instruments
        f = SearchForm()
        instruments = Instrument.objects.all()
        # categories = Category.objects.all()
        for i in instruments:
            i.percentage = round(i.price * 100 / i.old_price, 2)
        return render(request, 'shop_templates/listing-row-1-sidebar-left.html', {
            'form': f,
            "instruments": instruments,
        })


def cart(request):
    return render(request, 'shop_templates/cart.html')
