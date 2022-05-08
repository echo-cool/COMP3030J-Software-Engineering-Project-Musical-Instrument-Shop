from django.contrib import admin
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from django.db import models
from django.contrib.auth.models import User


class Activation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    code = models.CharField(max_length=20, unique=True)
    email = models.EmailField(blank=True)


# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='default.jpg', upload_to='uploads/avatar/image/')
    phone = models.CharField(max_length=20, unique=True)
    address = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return f'{self.user.username} Profile'


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'image')


class Instrument(models.Model):
    name = models.CharField(max_length=200, default="")
    old_price = models.FloatField(max_length=200, default=0)
    price = models.FloatField(max_length=200, default=0)
    details = models.TextField(max_length=3000, default="")
    image = models.ImageField(upload_to='uploads/instrument/image/', default='default.jpg', null=True)
    image1 = models.ImageField(upload_to='uploads/instrument/image/', default='default.jpg', null=True)
    image2 = models.ImageField(upload_to='uploads/instrument/image/', default='default.jpg', null=True)
    image3 = models.ImageField(upload_to='uploads/instrument/image/', default='default.jpg', null=True)
    image4 = models.ImageField(upload_to='uploads/instrument/image/', default='default.jpg', null=True)
    ex_detail = models.TextField(max_length=3000, default="", null=True)
    ad_info = models.TextField(max_length=3000, default="", null=True)
    chinese = models.BooleanField(default=False)

    quantity = models.IntegerField(default=100, validators=[
        MaxValueValidator(99999),
        MinValueValidator(1)
    ])
    COLOR_CHOICES = (
        (u'Red', u'Red'),
        (u'Blue', u'Blue'),
        (u'Brown', u'Brown'),
        (u'White', u'White'),
        (u'Black', u'Black'),
        (u'Other', u'Other'),
    )
    color = models.CharField(max_length=5, choices=COLOR_CHOICES, default=u'Other')

    # object_3d = models.FileField(upload_to='uploads/instrument/obj/', null=True, blank=True)
    # object_mtl = models.FileField(upload_to='uploads/instrument/mtl/', null=True, blank=True)
    object_gltf = models.FileField(upload_to='uploads/instrument/gltf/', null=True, blank=True)
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE, default=0)
    category = models.ForeignKey("Category", null=True, blank=True, on_delete=models.CASCADE)
    # extras = models.JSONField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}<{self.price}>'


# @admin.register(Instrument)
# class InstrumentAdmin(admin.ModelAdmin):
#     list_display = ('name', 'price', 'image', 'object_3d', 'object_mtl', 'posted_by', 'category', 'created_at')


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=0)
    instrument = models.ForeignKey('Instrument', on_delete=models.CASCADE, default=0)
    count = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user}<{self.instrument}>'


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ('user', 'instrument', 'count', 'created_at')


class Wishlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=0)
    instrument = models.ForeignKey('Instrument', on_delete=models.CASCADE, default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user}<{self.instrument}>'


@admin.register(Wishlist)
class WishlistAdmin(admin.ModelAdmin):
    list_display = ('user', 'instrument', 'created_at')


class InstrumentDetail(models.Model):
    instrument = models.OneToOneField('Instrument', on_delete=models.CASCADE)
    details = models.TextField(null=True)


@admin.register(InstrumentDetail)
class InstrumentDetailAdmin(admin.ModelAdmin):
    list_display = ('instrument', 'details')


class Category(models.Model):
    name = models.CharField(max_length=200)
    main_image = models.ImageField(default="default.png", upload_to='uploads/category/image/', null=True)
    description = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}'


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'created_at', 'main_image')


class OrderItem(models.Model):
    instrument = models.ForeignKey('Instrument', on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    order = models.ForeignKey('Order', on_delete=models.CASCADE, related_name='items')

    def __str__(self):
        return f'{self.instrument}<{self.quantity}>'


class UncompletedOrderItem(models.Model):
    instrument = models.ForeignKey('Instrument', on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    uncompleted_order = models.ForeignKey('UncompletedOrder', on_delete=models.CASCADE, related_name='items')

    def __str__(self):
        return f'{self.instrument}<{self.quantity}>'


class UncompletedOrder(models.Model):
    # 这个是用来表示用户输入了地址但是还没有付款的订单，防止订单计算错误
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False, related_name='uncompleted_orders')
    first_name = models.CharField(max_length=20, default="", null=True)
    last_name = models.CharField(max_length=20, default="")
    address = models.CharField(max_length=200, default="")
    apartment = models.CharField(max_length=200, default="")
    city = models.CharField(max_length=20, default="")
    state = models.CharField(max_length=20, default="")
    country = models.CharField(max_length=200, default="")
    zip_Code = models.CharField(max_length=50, default="")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user}<{self.created_at}>'


@admin.register(UncompletedOrder)
class UnCompletedOrderAdmin(admin.ModelAdmin):
    list_display = (
        'user', 'first_name', 'last_name', 'address', 'apartment', 'city', 'country', 'zip_Code', 'created_at')


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False, related_name='orders')

    # This is used to solve the problem of one order has more than one instrument
    # order_id = models.IntegerField(default=0)

    first_name = models.CharField(max_length=20, default="", null=True)
    last_name = models.CharField(max_length=20, default="")
    address = models.CharField(max_length=200, default="")
    apartment = models.CharField(max_length=200, default="")
    city = models.CharField(max_length=20, default="")
    state = models.CharField(max_length=20, default="")
    country = models.CharField(max_length=200, default="")
    zip_Code = models.CharField(max_length=50, default="")

    # telephone = models.CharField(max_length=200, default="(000)000-0000")
    # payment = models.CharField(max_length=20, default="")
    # shipping = models.CharField(max_length=20, default="")
    # instrument = models.ForeignKey('Instrument', on_delete=models.CASCADE, null=True)
    # quantity = models.PositiveIntegerField(null=False, default=1)
    # subtotal = models.FloatField(null=False, default=0)

    newsletter = models.BooleanField(default=False)
    accepted = models.BooleanField(default=False)
    packed = models.BooleanField(default=False)
    shipped = models.BooleanField(default=False)
    delivered = models.BooleanField(default=False)

    priority = models.IntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user}<{self.created_at}>'


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'user', 'first_name', 'last_name', 'address', 'apartment', 'city', 'country', 'zip_Code', 'newsletter',
        'accepted', 'packed', 'shipped', 'delivered', 'created_at')


# class OrderItem(models.Model):
#     order_id = models.ForeignKey(Order, on_delete=models.CASCADE)
#     count = models.PositiveIntegerField(null=False)
#     instrument = models.ForeignKey('Instrument', on_delete=models.CASCADE, null=False)
#
#     def __str__(self):
#         return f'{self.order_id}<{self.instrument}:{self.count}>'
#
#
# @admin.register(OrderItem)
# class OrderItemAdmin(admin.ModelAdmin):
#     pass


class Review(models.Model):
    order = models.OneToOneField('Order', on_delete=models.CASCADE, null=True, blank=True)
    instrument = models.ForeignKey('Instrument', on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(
        null=False,
        default=5,
        validators=[MaxValueValidator(5), MinValueValidator(0)]
    )
    title = models.TextField(null=True, blank=True)
    content = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('order', 'user', 'rating', 'title', 'content', 'created_at')
