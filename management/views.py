from django.contrib.auth.models import User
from django.db.models import Q, Max
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

# Create your views here.
from django.urls import reverse

import blog
import shop
from blog.models import Post
from chat.models import MessageModel
from management.forms import OrderForm, InstrumentForm, ReviewForm, PostForm, CartForm, WishlistForm, \
    InstrumentCategoryForm, BlogCategoryForm
from shop.models import Order, Instrument, Profile, Category, Review, Cart, Wishlist, OrderItem, UncompletedOrder
from django.contrib.auth.decorators import login_required, permission_required


# @login_required
# def new(request):
#     counts = {
#         'user': User.objects.count(),
#         'instrument': Instrument.objects.count(),
#         'order': Order.objects.count(),
#         'category': Category.objects.count(),
#         'review': Review.objects.count(),
#     }
#     pie_data = {}
#     for category_item in Category.objects.all():
#         pie_data[category_item.name.replace('\n', '').replace('\r', '')] = Instrument.objects.filter(
#             category=category_item.id).count()
#
#     tmp = {}
#     for instrument_item in Instrument.objects.all():
#         tmp[instrument_item] = Order.objects.filter(instrument=instrument_item.id).count()
#     popular_instruments = sorted(tmp.items(), key=lambda x: x[1], reverse=True)[0:5]
#
#     return render(request, 'management/index.html', {
#         'counts': counts,
#         'pie_data': pie_data,
#         'popular_instruments': popular_instruments,
#         'data_length': len(pie_data),
#         'profile': Profile.objects.filter(user=request.user.id).first()
#     })


@login_required
def index_new(request):

    # tmp = {}
    # for instrument_item in Instrument.objects.all():
    #     tmp[instrument_item] = Order.objects.filter(instrument=instrument_item.id).count()
    # popular_instruments = sorted(tmp.items(), key=lambda x: x[1], reverse=True)[0:5]

    messages = MessageModel.objects.filter(recipient=request.user, read=False).values("user").annotate(
        time=Max("timestamp")).exclude(user=request.user).order_by("time")

    users = User.objects.all()

    order_items = OrderItem.objects.all()

    for message in messages:
        body = MessageModel.objects.get(user_id=message['user'], recipient=request.user, timestamp=message['time']).body
        message['user'] = users.get(id=message['user'])
        message['body'] = body

    orders = Order.objects.all()
    uncompleted_orders = UncompletedOrder.objects.all()
    instruments = Instrument.objects.all()

    carts = Cart.objects.all()
    blogs = Post.objects.all()
    wishlist = Wishlist.objects.all()

    return render(request, 'management_templates/index_new.html', {
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'orders': orders,
        'carts': carts,
        'order_items': order_items,
        'instruments': instruments,
        'blogs': blogs,
        'wishlist': wishlist,
        'uncompleted_orders': uncompleted_orders,
        'users': users,
        'messages': messages
    })


@login_required
def index(request):
    counts = {
        'user': User.objects.count(),
        'instrument': Instrument.objects.count(),
        'order': Order.objects.count(),
        'category': Category.objects.count(),
        'review': Review.objects.count(),
    }
    pie_data = {}
    for category_item in Category.objects.all():
        pie_data[category_item.name.replace('\n', '').replace('\r', '')] = Instrument.objects.filter(
            category=category_item.id).count()

    # tmp = {}
    # for instrument_item in Instrument.objects.all():
    #     tmp[instrument_item] = Order.objects.filter(instrument=instrument_item.id).count()
    # popular_instruments = sorted(tmp.items(), key=lambda x: x[1], reverse=True)[0:5]

    return render(request, 'management_templates/index.html', {
        'counts': counts,
        'pie_data': pie_data,
        # 'popular_instruments': popular_instruments,
        'data_length': len(pie_data),
        'profile': Profile.objects.filter(user=request.user.id).first()
    })


@login_required
def order_management_all(request):
    orders = Order.objects.all()
    for order in orders:
        items = OrderItem.objects.filter(order_id=order.id)
        order.quantity = items.count()
        total_price = 0
        for item in items:
            total_price += item.instrument.price * item.quantity
        order.total_price = total_price

    return render(request, 'management_templates/orderManagement.html', {
        'orders': orders,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'mode': 0
    })


@login_required
def order_management_all_new(request):
    data = []
    orders = Order.objects.all()
    for order_item in orders:
        tmp = {
            'order': order_item,
            'user': User.objects.filter(id=order_item.user.id).first(),
            'instrument': Instrument.objects.filter(
                id=order_item.instrument.id).first(),
            'profile': Profile.objects.filter(
                user=order_item.user.id).first()
        }
        data.append(tmp)
    return render(request, 'management/orderManagement.html', {
        'orders': data,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'mode': 0
    })


@login_required
def order_management_placed(request):
    orders = Order.objects.filter(accepted=False)
    for order in orders:
        items = OrderItem.objects.filter(order_id=order.id)
        order.quantity = items.count()
        total_price = 0
        for item in items:
            total_price += item.instrument * item.quantity
        order.total_price = total_price
    return render(request, 'management_templates/orderManagement.html', {
        'orders': orders,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'mode': 1
    })


@login_required
def order_management_accepted(request):
    orders = Order.objects.filter(accepted=True).filter(packed=False)
    for order in orders:
        items = OrderItem.objects.filter(order_id=order.id)
        order.quantity = items.count()
        total_price = 0
        for item in items:
            total_price += item.instrument * item.quantity
        order.total_price = total_price
    return render(request, 'management_templates/orderManagement.html', {
        'orders': orders,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'mode': 2
    })


@login_required
def order_management_packed(request):
    orders = Order.objects.filter(accepted=True).filter(packed=True).filter(shipped=False)
    for order in orders:
        items = OrderItem.objects.filter(order_id=order.id)
        order.quantity = items.count()
        total_price = 0
        for item in items:
            total_price += item.instrument * item.quantity
        order.total_price = total_price
    return render(request, 'management_templates/orderManagement.html', {
        'orders': orders,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'mode': 3
    })


@login_required
def order_management_shipped(request):
    orders = Order.objects.filter(accepted=True).filter(packed=True).filter(shipped=True).filter(delivered=False)
    for order in orders:
        items = OrderItem.objects.filter(order_id=order.id)
        order.quantity = items.count()
        total_price = 0
        for item in items:
            total_price += item.instrument * item.quantity
        order.total_price = total_price
    return render(request, 'management_templates/orderManagement.html', {
        'orders': orders,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'mode': 4
    })


@login_required
def order_management_delivered(request):
    orders = Order.objects.filter(accepted=True).filter(packed=True).filter(shipped=True).filter(delivered=True)
    for order in orders:
        items = OrderItem.objects.filter(order_id=order.id)
        order.quantity = items.count()
        total_price = 0
        for item in items:
            total_price += item.instrument * item.quantity
        order.total_price = total_price
    return render(request, 'management_templates/orderManagement.html', {
        'orders': orders,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'mode': 5
    })


@login_required
def order_item_management(request, order_id):
    order_items = OrderItem.objects.filter(order_id=order_id)

    return render(request, 'management_templates/orderManagement.html', {
        'order_items': order_items,
        'profile': Profile.objects.filter(user=request.user.id).first(),
    })


@login_required
def update_order(request, order_id):
    if request.method == "POST":
        order = Order.objects.get(id=order_id)
        f = OrderForm(request.POST, request.FILES, instance=order)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:order_management_all'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        order = Order.objects.get(id=order_id)
        f = OrderForm(instance=order)
        return render(request, 'management_templates/update_order.html', {
            'form': f
        })


@login_required
def instrument_management_new(request):
    search = request.GET.get("search")
    if search is not None:
        instrument_list = Instrument.objects.filter(Q(name__contains=search) | Q(details__contains=search))
    else:
        instrument_list = Instrument.objects.all()
    paginator = Paginator(instrument_list, 10, 0)
    page = request.GET.get("page")
    try:
        instruments = paginator.page(page)
    except PageNotAnInteger:
        instruments = paginator.page(1)
    except EmptyPage:
        instruments = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]
    return render(request, 'management/instrumentManagement.html', {
        'instruments': instruments,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages
    })


@login_required
def instrument_management(request):
    search = request.GET.get("search")
    if search is not None:
        instrument_list = Instrument.objects.filter(Q(name__contains=search) | Q(details__contains=search))
    else:
        instrument_list = Instrument.objects.all()
    paginator = Paginator(instrument_list, 10, 0)
    page = request.GET.get("page")
    try:
        instruments = paginator.page(page)
    except PageNotAnInteger:
        instruments = paginator.page(1)
    except EmptyPage:
        instruments = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]
    return render(request, 'management_templates/instrumentManagement.html', {
        'instruments': instruments,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages
    })


@login_required
def update_instrument(request, instrument_id):
    if request.method == "POST":
        instrument = Instrument.objects.get(id=instrument_id)
        f = InstrumentForm(request.POST, request.FILES, instance=instrument)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:instrument_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        instrument = Instrument.objects.get(id=instrument_id)
        f = InstrumentForm(instance=instrument)
        return render(request, 'management_templates/update_instrument.html', {
            'form': f
        })


@login_required
def add_instrument(request):
    if request.method == "POST":
        f = InstrumentForm(request.POST, request.FILES)
        if f.is_valid():
            f.save()
        else:
            return render(request, 'management_templates/update_instrument.html', {
                'form': f
            })
        return redirect(reverse('management:instrument_management'))
    else:
        f = InstrumentForm()
        return render(request, 'management_templates/update_instrument.html', {
            'form': f
        })


@login_required
def instrument_category_management(request):
    search = request.GET.get("search")
    if search is not None:
        category_list = shop.models.Category.objects.filter(Q(name__contains=search) | Q(description__contains=search))
    else:
        category_list = shop.models.Category.objects.all()
    paginator = Paginator(category_list, 10, 0)
    page = request.GET.get("page")
    try:
        categories = paginator.page(page)
    except PageNotAnInteger:
        categories = paginator.page(1)
    except EmptyPage:
        categories = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]

    for category in categories:
        category.quantity = Instrument.objects.filter(category_id=category.id).count()

    return render(request, 'management_templates/instrumentCategoryManagement.html', {
        'categories': categories,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages
    })


@login_required
def update_instrument_category(request, category_id):
    if request.method == "POST":
        category = shop.models.Category.objects.get(id=category_id)
        f = InstrumentCategoryForm(request.POST, request.FILES, instance=category)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:instrument_category_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        category = shop.models.Category.objects.get(id=category_id)
        f = InstrumentCategoryForm(instance=category)
        return render(request, 'management_templates/update_instrument_category.html', {
            'form': f
        })


@login_required
def add_instrument_category(request):
    if request.method == "POST":
        f = InstrumentCategoryForm(request.POST, request.FILES)
        if f.is_valid():
            f.save()
        else:
            return render(request, 'management_templates/update_instrument_category.html', {
                'form': f
            })
        return redirect(reverse('management:instrument_category_management'))
    else:
        f = InstrumentCategoryForm()
        return render(request, 'management_templates/update_instrument_category.html', {
            'form': f
        })


@login_required
def add_order(request):
    if request.method == "POST":
        f = OrderForm(request.POST, request.FILES)
        if f.is_valid():
            f.save()
        else:
            return render(request, 'management_templates/update_order.html', {
                'form': f
            })
        return redirect(reverse('management:order_management_all'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        f = OrderForm()
        return render(request, 'management_templates/update_order.html', {
            'form': f
        })


@login_required
def profile(request):
    if request.method == "POST":
        profile_item = Profile.objects.filter(user=request.user.id).first()
        profile_item.image = request.FILES.get('photo')
        profile_item.save()
        return redirect(reverse('management:profile'))
    else:
        return render(request, 'management_templates/profile.html', {
            'profile': Profile.objects.filter(user=request.user.id).first(),
        })


@login_required
def review_management(request):
    search = request.GET.get("search")
    if search is not None:
        review_list = Review.objects.filter(Q(user__username__contains=search) | Q(title__contains=search))
    else:
        review_list = Review.objects.all()
    paginator = Paginator(review_list, 10, 0)
    page = request.GET.get("page")
    try:
        reviews = paginator.page(page)
    except PageNotAnInteger:
        reviews = paginator.page(1)
    except EmptyPage:
        reviews = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]
    return render(request, 'management_templates/reviewManagement.html', {
        'reviews': reviews,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages
    })


@login_required
def update_review(request, review_id):
    if request.method == "POST":
        review = Review.objects.get(id=review_id)
        f = ReviewForm(request.POST, request.FILES, instance=review)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:review_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        review = Review.objects.get(id=review_id)
        f = ReviewForm(instance=review)
        return render(request, 'management_templates/update_review.html', {
            'form': f
        })


@login_required
def add_review(request):
    if request.method == "POST":
        f = ReviewForm(request.POST, request.FILES)
        if f.is_valid():
            f.save()
        else:
            return render(request, 'management_templates/update_review.html', {
                'form': f
            })
        return redirect(reverse('management:review_management'))
    else:
        f = ReviewForm()
        return render(request, 'management_templates/update_review.html', {
            'form': f
        })


@login_required
def order_state(request, order_id):
    order = Order.objects.filter(id=order_id).first()
    f = OrderForm(instance=order)
    return render(request, 'management_templates/order_state.html', {
        'order': order,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'form': f,
        'users': User.objects.all()
    })


@login_required
def post_management(request):
    search = request.GET.get("search")
    if search is not None:
        post_list = Post.objects.filter(Q(name__contains=search) | Q(details__contains=search))
    else:
        post_list = Post.objects.all()
    paginator = Paginator(post_list, 10, 0)
    page = request.GET.get("page")
    try:
        posts = paginator.page(page)
    except PageNotAnInteger:
        posts = paginator.page(1)
    except EmptyPage:
        posts = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]
    return render(request, 'management_templates/postManagement.html', {
        'posts': posts,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages
    })


@login_required
def update_post(request, post_id):
    if request.method == "POST":
        post = Post.objects.get(id=post_id)
        f = PostForm(request.POST, request.FILES, instance=post)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:post_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        post = Post.objects.get(id=post_id)
        f = PostForm(instance=post)
        return render(request, 'management_templates/update_post.html', {
            'form': f
        })


@login_required
def add_post(request):
    if request.method == "POST":
        f = PostForm(request.POST, request.FILES)
        if f.is_valid():
            f.save()
        else:
            return render(request, 'management_templates/update_post.html', {
                'form': f
            })
        return redirect(reverse('management:post_management'))
    else:
        f = PostForm()
        return render(request, 'management_templates/update_post.html', {
            'form': f
        })


@login_required
def blog_category_management(request):
    search = request.GET.get("search")
    if search is not None:
        category_list = blog.models.Category.objects.filter(Q(name__contains=search))
    else:
        category_list = blog.models.Category.objects.all()
    paginator = Paginator(category_list, 10, 0)
    page = request.GET.get("page")
    try:
        categories = paginator.page(page)
    except PageNotAnInteger:
        categories = paginator.page(1)
    except EmptyPage:
        categories = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]

    for category in categories:
        category.quantity = Post.objects.filter(category_id=category.id).count()

    return render(request, 'management_templates/blogCategoryManagement.html', {
        'categories': categories,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages
    })


@login_required
def update_blog_category(request, category_id):
    if request.method == "POST":
        category = blog.models.Category.objects.get(id=category_id)
        f = BlogCategoryForm(request.POST, request.FILES, instance=category)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:blog_category_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        category = shop.models.Category.objects.get(id=category_id)
        f = BlogCategoryForm(instance=category)
        return render(request, 'management_templates/update_blog_category.html', {
            'form': f
        })


@login_required
def add_blog_category(request):
    if request.method == "POST":
        f = BlogCategoryForm(request.POST, request.FILES)
        if f.is_valid():
            f.save()
        else:
            return render(request, 'management_templates/update_blog_category.html', {
                'form': f
            })
        return redirect(reverse('management:blog_category_management'))
    else:
        f = BlogCategoryForm()
        return render(request, 'management_templates/update_blog_category.html', {
            'form': f
        })


@login_required
def cart_management(request):
    search = request.GET.get("search")
    if search is not None:
        cart_list = Cart.objects.filter(Q(user__username__contains=search) | Q(instrument__name__contains=search))
    else:
        cart_list = Cart.objects.all()
    paginator = Paginator(cart_list, 10, 0)
    page = request.GET.get("page")
    try:
        carts = paginator.page(page)
    except PageNotAnInteger:
        carts = paginator.page(1)
    except EmptyPage:
        carts = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]
    return render(request, 'management_templates/cartManagement.html', {
        'carts': carts,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages
    })


@login_required
def update_cart(request, cart_id):
    if request.method == "POST":
        cart = Cart.objects.get(id=cart_id)
        f = CartForm(request.POST, request.FILES, instance=cart)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:cart_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        cart = Cart.objects.get(id=cart_id)
        f = CartForm(instance=cart)
        return render(request, 'management_templates/update_cart.html', {
            'form': f
        })


@login_required
def add_cart(request):
    if request.method == "POST":
        f = CartForm(request.POST, request.FILES)
        if f.is_valid():
            f.save()
        else:
            return render(request, 'management_templates/update_cart.html', {
                'form': f
            })
        return redirect(reverse('management:cart_management'))
    else:
        f = Review()
        return render(request, 'management_templates/update_cart.html', {
            'form': f
        })


@login_required
def wishlist_management(request):
    search = request.GET.get("search")
    if search is not None:
        wishlist_list = Wishlist.objects.filter(Q(user__username__contains=search) | Q(instrument__name__contains=search))
    else:
        wishlist_list = Wishlist.objects.all()
    paginator = Paginator(wishlist_list, 10, 0)
    page = request.GET.get("page")
    try:
        wishlists = paginator.page(page)
    except PageNotAnInteger:
        wishlists = paginator.page(1)
    except EmptyPage:
        wishlists = paginator.page(paginator.num_pages)

    part_num = 9
    p = int(page or 1)
    if paginator.num_pages <= part_num:
        part_pages = [i for i in range(1, paginator.num_pages + 1)]
    elif p <= int(part_num / 2) + 1:
        part_pages = [i for i in range(1, part_num + 1)]
    elif p + int((part_num - 1) / 2) >= paginator.num_pages:
        part_pages = [i for i in range(paginator.num_pages - part_num + 1, paginator.num_pages + 1)]
    else:
        part_pages = [i for i in range(p - int(part_num / 2), p + int((part_num - 1) / 2) + 1)]
    return render(request, 'management_templates/wishlistManagement.html', {
        'wishlists': wishlists,
        'profile': Profile.objects.filter(user=request.user.id).first(),
        'part_pages': part_pages
    })


@login_required
def update_wishlist(request, wishlist_id):
    if request.method == "POST":
        wishlist = Wishlist.objects.get(id=wishlist_id)
        f = WishlistForm(request.POST, request.FILES, instance=wishlist)
        if f.is_valid():
            f.save()
        return redirect(reverse('management:wishlist_management'))
        # return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        wishlist = Wishlist.objects.get(id=wishlist_id)
        f = WishlistForm(instance=wishlist)
        return render(request, 'management_templates/update_wishlist.html', {
            'form': f
        })


@login_required
def add_wishlist(request):
    if request.method == "POST":
        f = WishlistForm(request.POST, request.FILES)
        if f.is_valid():
            f.save()
        else:
            return render(request, 'management_templates/update_wishlist.html', {
                'form': f
            })
        return redirect(reverse('management:wishlist_management'))
    else:
        f = WishlistForm()
        return render(request, 'management_templates/update_wishlist.html', {
            'form': f
        })
