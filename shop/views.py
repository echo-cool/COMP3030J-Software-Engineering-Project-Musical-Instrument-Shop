# Create your views here
# iframe
import time

from django.views.decorators.clickjacking import xframe_options_exempt
import json
import random
from datetime import timedelta, datetime

import django
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.db.models import Max, Count, Sum
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse

import blog
from management.forms import SearchForm
from shop.forms import UpdateProfileForm, ReviewForm, CheckoutForm
from shop.models import Instrument, InstrumentDetail, Category, Order, Review, Cart, Wishlist, UncompletedOrderItem, \
    OrderItem
from shop.models import Instrument, InstrumentDetail, Category, Order, Review, Cart, UncompletedOrder
from blog.models import Post
from management.forms import InstrumentForm, SearchForm
from shop.models import Instrument, InstrumentDetail, Category, Order, Review, Profile


def new_header(request):
    return render(request, 'layouts/default/shopper_base2.html', {
        "back": 0
    })


def index(request):
    # order by count
    order_items = OrderItem.objects.all()
    order_rank = order_items.values('instrument').annotate(count=Sum('quantity'), name=Sum('quantity')).order_by('-count')[
                 :5]
    order_rank = list(order_rank)
    for i in order_rank:
        i['name'] = Instrument.objects.filter(id=i['instrument']).first().name
    # order_rank = order_rank.annotate(name=Instrument.objects.filter(id=order_rank.values('instrument')).values('name'))
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
        "index_categories": index_categories,
        "order_rank": order_rank,
    })


@xframe_options_exempt
def chat_ai(request):
    return render(request, 'layouts/default/chat_ai.html', {
        "home": 1,
    })


def home(request):
    instruments = Instrument.objects.all()

    instruments = instruments.order_by("-object_gltf")

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

    chinese_instruments = []
    western_instruments = []
    for i in instruments:
        print("==========", i.chinese, str(i.chinese) == "True")
        if str(i.chinese) == "True":
            chinese_instruments.append(i)
        else:
            western_instruments.append(i)

    step = 4
    chinese_instruments = [chinese_instruments[i:i + step] for i in range(0, len(chinese_instruments), step)]
    western_instruments = [western_instruments[i:i + step] for i in range(0, len(western_instruments), step)]

    carts = Cart.objects.filter(user_id=request.user.id)
    blogs = Post.objects.order_by("created_on")
    if blogs.count() > 8:
        blogs = blogs[:8]
    return render(request, 'shop_templates/homepage.html', {
        "home": 1,
        "chinese_instruments": chinese_instruments,
        "western_instruments": western_instruments,
        # "chinese_number": range(len(chinese_instruments) % 4),
        # "western_number": range(len(western_instruments) % 4),
        "instruments": instruments,
        "categories": categories,
        "index_categories": index_categories,
        "blogs": blogs,
        "two": range(2),
        "three": range(3),
        "four": range(4),
        "six": range(6),
        "eight": range(8),
        "ten": range(10),
        'carts': carts,
        "design_models": [{"name": "guitar", "style": 1,
                           "url": "/static/assets/img_for_shop/img_for_model_design/model_design_guitar1"},
                          {"name": "guitar", "style": 2,
                           "url": "/static/assets/img_for_shop/img_for_model_design/model_design_guitar2"},
                          {"name": "guitar", "style": 3,
                           "url": "/static/assets/img_for_shop/img_for_model_design/model_design_guitar3"},
                          {"name": "piano", "style": 1,
                           "url": "/static/assets/img_for_shop/img_for_model_design/model_design_piano1"},
                          {"name": "piano", "style": 2,
                           "url": "/static/assets/img_for_shop/img_for_model_design/model_design_piano2"},
                          {"name": "piano", "style": 3,
                           "url": "/static/assets/img_for_shop/img_for_model_design/model_design_piano3"}, ],
    })


def about(request):
    carts = Cart.objects.filter(user_id=request.user.id)
    return render(request, 'shop_templates/company-profile.html',
                  {
                      'carts': carts
                  })


def game(request):
    return render(request, 'shop_templates/game.html')


def chinese(request):
    blogs = Post.objects.order_by("created_on")
    if blogs.count() > 8:
        blogs = blogs[:3]

    carts = Cart.objects.filter(user_id=request.user.id)
    return render(request, 'shop_templates/chinese.html',
                  {
                      'blogs': blogs,
                      'carts': carts
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
    if request.method == "POST":
        if request.user.is_authenticated:
            quantity = int(request.POST.get('quantity', 0))
            instrument = Instrument.objects.filter(id=product_id).first()
            exist_cart = Cart.objects.filter(instrument_id=product_id).first()
            if exist_cart:
                exist_cart.count = exist_cart.count + quantity
                exist_cart.save()
            else:
                new_cart = Cart(user=request.user, instrument=instrument, count=quantity, user_id=request.user.id)
                new_cart.save()
            messages.success(request, "Add Successfully")
            return redirect('shop:product_details', product_id=product_id)
        else:
            return redirect('accounts:log_in')
    else:
        categories = Category.objects.all()
        instrument = Instrument.objects.get(id=product_id)
        instrument_details = InstrumentDetail.objects.filter(instrument=instrument).first()
        all_instruments = Instrument.objects.all()

        # add price / old_price for hint
        instrument.percentage = round(instrument.price * 100 / instrument.old_price, 2)

    related = []
    # Get 4 random reviews
    reviews = Review.objects.all()
    review = []
    carts = Cart.objects.filter(user_id=request.user.id)
    for i in range(4):
        if len(reviews) > 0:
            num = random.randint(0, len(reviews) - 1)
            reviews[num].review_icon_iter = range(int(reviews[num].rating))
            reviews[num].review_icon_iter2 = range(5 - int(reviews[num].rating))
            review.append(reviews[num])

    for i in range(5):
        num = random.randint(0, len(all_instruments) - 1)
        related.append(all_instruments[num])
    if str(instrument.object_gltf).replace(" ", "") != "":
        model_url = str(instrument.object_gltf)
    else:
        model_url = "none"
    print("=============" + model_url + "=========", model_url == "")
    if len(reviews) > 0:
        return render(request, 'shop_templates/product-detail.html', {
            "model_url": model_url,
            "instrument": instrument,
            "discount": instrument.price * 100 / instrument.old_price,
            "instrument_details": instrument_details,
            "related": related,
            'categories': categories,
            "review_left": [review[0], review[1]],
            "review_right": [review[2], review[3]],
            "carts": carts
        })
    else:
        return render(request, 'shop_templates/product-detail.html', {
            "model_url": model_url,
            "instrument": instrument,
            "discount": instrument.price * 100 / instrument.old_price,
            "instrument_details": instrument_details,
            "related": related,
            'categories': categories,
            "carts": carts
        })


@login_required
def leave_review(request, instrument_id):
    form = ReviewForm()
    carts = Cart.objects.filter(user_id=request.user.id)
    if request.method == "POST":
        form = ReviewForm(request.POST)
        if form.is_valid():
            user = request.user
            instrument = Instrument.objects.get(id=instrument_id)
            title = form.cleaned_data['title']
            content = form.cleaned_data['content']
            rating = form.cleaned_data['rating']
            review = Review(
                user=user,
                instrument=instrument,
                title=title,
                content=content,
                rating=rating
            )
            review.save()
            messages.success(request, "Review submitted successfully")
            return redirect(reverse('shop:product_details', args=[instrument_id]))
    return render(request, 'shop_templates/leave-review.html', {
        "instrument": Instrument.objects.get(id=instrument_id),
        "form": form,
        "carts": carts
    })


@login_required
def personal_profile(request):
    if request.method == "POST":
        profile_item = Profile.objects.filter(user=request.user.id).first()
        profile_item.image = request.FILES.get('photo')
        profile_item.save()
        return redirect(reverse('shop:personal_profile'))
    # print(form)
    orders = Order.objects.order_by('-created_at')[:5]
    for order in orders:
        order.quantity = OrderItem.objects.filter(order_id=order.id).count()
    carts = Cart.objects.filter(user_id=request.user.id)
    return render(request, 'shop_templates/personal_profile.html', {
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'orders': orders,
        'carts': carts
    })


@login_required
def leave_review2(request):
    print(request)
    return render(request, 'shop_templates/leave-review-2.html')


def model_view(request, product_id):
    instrument = get_object_or_404(Instrument, pk=product_id)
    return render(request, 'shop_templates/product-detail-model.html', {
        "instrument": instrument,
    })


@login_required
def wishlist(request):
    wishlists = Wishlist.objects.filter(user=request.user)
    carts = Cart.objects.filter(user=request.user)
    return render(request, 'shop_templates/wishlist.html', {
        "wishlists": wishlists,
        "carts": carts
    })


@login_required
def checkout(request):
    # get or post
    if request.method == "POST":
        checkout_form = CheckoutForm(request.POST)
        if checkout_form.is_valid():
            country = request.POST['country']
            state = request.POST['state']
            user = request.user
            first_name = checkout_form.cleaned_data['First_Name']
            last_name = checkout_form.cleaned_data['Last_Name']
            address = checkout_form.cleaned_data['Address']
            apartment = checkout_form.cleaned_data['Apartment']
            city = checkout_form.cleaned_data['City']
            zip_Code = checkout_form.cleaned_data['Zip_Code']
            uncompletedOrder = UncompletedOrder(
                user=user,
                country=country,
                state=state,
                first_name=first_name,
                last_name=last_name,
                address=address,
                apartment=apartment,
                city=city,
                zip_Code=zip_Code
            )
            uncompletedOrder.save()
            for item in Cart.objects.filter(user=request.user).all():
                uncompletedOrderItem = UncompletedOrderItem(
                    uncompleted_order=uncompletedOrder,
                    instrument=item.instrument,
                    quantity=item.count
                )
                uncompletedOrderItem.save()
                item.delete()
            return redirect(reverse('shop:shipping_details', kwargs={
                'uncompletedOrder_id': uncompletedOrder.id
            }))
    # check if user is not logged in
    if not request.user.is_authenticated:
        return redirect('/login')
    else:
        checkout_form = CheckoutForm()
        user: User = request.user
        profile: Profile = Profile.objects.filter(user=user).first()
        subtotal = 0
        cart_items = Cart.objects.filter(user=request.user)
        for item in cart_items:
            subtotal += item.instrument.price * item.count

        return render(request, 'shop_templates/checkout/checkout.html', {
            "cart_items": cart_items,
            "subtotal": subtotal,
            'user': user,
            'profile': profile,
            'form': checkout_form
        })


def shipping_details(request, uncompletedOrder_id):
    carts = Cart.objects.filter(user=request.user)
    user = request.user
    uncompletedOrder = UncompletedOrder.objects.get(id=uncompletedOrder_id)
    order_items = uncompletedOrder.items.all()
    shipping_price = 20.44
    subtotal = 0
    if request.method == "POST":
        print(request.POST)
        time.sleep(1)  # 假装在处理提交的数据
        order = Order(
            user=user,
            country=uncompletedOrder.country,
            state=uncompletedOrder.state,
            first_name=uncompletedOrder.first_name,
            last_name=uncompletedOrder.last_name,
            address=uncompletedOrder.address,
            apartment=uncompletedOrder.apartment,
            city=uncompletedOrder.city,
            zip_Code=uncompletedOrder.zip_Code
        )
        order.save()
        for item in order_items:
            orderItem = OrderItem(
                instrument=item.instrument,
                quantity=item.quantity,
                order=order
            )
            orderItem.save()
            item.delete()
        messages.success(request, "Order successfully submitted!")
        return redirect(reverse('shop:checkout_success'))

    for item in order_items:
        subtotal += item.instrument.price * item.quantity
    total = subtotal + shipping_price
    return render(request, 'shop_templates/checkout/shipping.htm', {
        "uncompletedOrder": uncompletedOrder,
        "order_items": order_items,
        "user": user,
        "shipping_price": shipping_price,
        "subtotal": subtotal,
        "total": total,
    })


def checkout_success(request):
    return render(request, 'shop_templates/checkout/success.html')


#
# @login_required
# def confirm(request):
#     # get current max order_id
#     if Order.objects.all().count() == 0:
#         order_id = 1
#     else:
#         order_id = Order.objects.all().aggregate(Max('order_id'))['order_id__max'] + 1
#     carts = Cart.objects.filter(user=request.user)
#     subtotal_all = 0
#     for cart in carts:
#         instrument = cart.instrument
#         quantity = cart.count
#         subtotal = quantity * instrument.price
#         subtotal_all += subtotal
#         new_order = Order(user=request.user, order_id=order_id, instrument=instrument,
#                           quantity=quantity, subtotal=subtotal, name=request.POST['name'],
#                           last_name=request.POST['last_name'],
#                           full_address=request.POST['full_address'], city=request.POST['city'],
#                           postal_code=request.POST['postal_code'], country=request.POST['country'],
#                           telephone=request.POST['telephone'], payment=request.POST['payment'],
#                           shipping=request.POST['shipping'])
#         new_order.save()
#         cart.delete()
#     return render(request, 'shop_templates/confirm.html')
#

# model design with params
def model_design(request):
    name = request.GET.get('name')
    style = request.GET.get('style')
    return render(request, 'shop_templates/model-design.html', {
        "name": name,
        "style": style
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

        instruments_by_search_bar = Instrument.objects.filter(name__contains=search_text)
        instruments = []

        i = 0
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

    header = ""
    if "chinese" == search_text:
        header = "chinese"
        all_instruments = Instrument.objects.filter().filter(chinese=1)
    elif "western" == search_text:
        all_instruments = Instrument.objects.filter().filter(chinese=0)
    else:
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

    # game option
    game_style = 0
    if "guitar" in search_text:
        game_style = 2
    elif "piano" in search_text:
        game_style = 1

    print("==========", game_style, search_text)

    if request.user.is_authenticated:
        carts = Cart.objects.filter(user=request.user)
    else:
        carts = {}

    return render(request, 'shop_templates/product-search.html', {
        "header_style": header,
        "game_style": game_style,
        "instruments": instruments,
        'categories': categories,
        'carts': carts
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

# @login_required
# def cart(request):
#     if request.user.is_authenticated:
#         carts = Cart.objects.filter(user_id=request.user.id)
#         each_cart = {}
#         for each_cart in carts:
#             each_cart.total_money = each_cart.count * each_cart.instrument.price
#         return render(request, 'shop_templates/cart.html', {
#             "carts": carts,
#         })
#     else:
#         return redirect('accounts:log_in')


@login_required
def cart(request):
    carts = Cart.objects.filter(user_id=request.user.id)
    each_cart = {}
    for each_cart in carts:
        each_cart.total_money = each_cart.count * each_cart.instrument.price
    return render(request, 'shop_templates/cart2.html', {
        "carts": carts,
    })


# @login_required
# def product_add_cart(request, instrument_id):
#     instrument = Instrument.objects.filter(id=instrument_id).first()
#     exist_cart = Cart.objects.filter(instrument_id=instrument_id).first()
#     if exist_cart:
#         exist_cart.count = exist_cart.count + 1
#         exist_cart.save()
#     else:
#         new_cart = Cart(user=request.user, instrument=instrument, count=1, user_id=1)
#         new_cart.save()
#     return redirect('shop:cart')


# def product_minus_cart(request, instrument_id):
#     exist_cart = Cart.objects.filter(instrument_id=instrument_id).first()
#     if exist_cart.count > 1:
#         exist_cart.count = exist_cart.count - 1
#         exist_cart.save()
#     else:
#         exist_cart.delete()
#         exist_cart.save()
#     return redirect('shop:cart')

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


@login_required
def orders(request):
    user = request.user
    all_orders = Order.objects.filter(user_id=user.id).order_by('-created_at')
    carts = Cart.objects.filter(user_id=request.user.id)
    for order in all_orders:
        order.quantity = OrderItem.objects.filter(order_id=order.id).count()
    count = {
        "order": Order.objects.filter(user_id=user.id).count(),
        "cart": Cart.objects.filter(user_id=user.id).count(),
        "wishlist": Wishlist.objects.filter(user_id=user.id).count(),
    }
    return render(request, 'shop_templates/orders.html', {
        "orders": all_orders,
        "count": count,
        "carts": carts
    })
