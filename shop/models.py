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
    image = models.ImageField(upload_to='uploads/instrument/image/', null=True)
    object_3d = models.FileField(upload_to='uploads/instrument/obj/', null=True, blank=True)
    object_mtl = models.FileField(upload_to='uploads/instrument/mtl/', null=True, blank=True)
    object_gltf = models.FileField(upload_to='uploads/instrument/gltf/', null=True, blank=True)
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE, default=0)
    category = models.ForeignKey("Category", null=True, blank=True, on_delete=models.CASCADE)
    extras = models.JSONField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}<{self.price}>'


@admin.register(Instrument)
class InstrumentAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'image', 'object_3d', 'object_mtl', 'posted_by', 'category', 'created_at')


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


class InstrumentDetail(models.Model):
    instrument = models.OneToOneField('Instrument', on_delete=models.CASCADE)
    details = models.TextField(null=True)


@admin.register(InstrumentDetail)
class InstrumentDetailAdmin(admin.ModelAdmin):
    list_display = ('instrument', 'details')


class Category(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}'


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'created_at')


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=0, null=False)

    name = models.CharField(max_length=20, default="")
    last_name = models.CharField(max_length=20, default="")
    full_address = models.CharField(max_length=200, default="")
    city = models.CharField(max_length=20, default="")
    postal_code = models.CharField(max_length=50, default="")
    country = models.CharField(max_length=200, default="")
    telephone = models.CharField(max_length=200, default="(000)000-0000")
    payment = models.CharField(max_length=20, default="")
    shipping = models.CharField(max_length=20, default="")
    Item = models.ForeignKey('Item', max_length=200, on_delete=models.CASCADE, null=True)
    newsletter = models.BooleanField(default=False)
    shopper_confirmed = models.BooleanField(default=False)
    delivery_confirmed = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user}<{self.created_at}>'


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'user', 'name', 'last_name', 'full_address', 'city', 'postal_code', 'country', 'telephone', 'payment',
        'shipping', 'Item', 'newsletter', 'shopper_confirmed', 'delivery_confirmed', 'created_at')


class Item(models.Model):
    item_id = models.CharField(max_length=200, default="")
    instrument = models.ForeignKey('Instrument', on_delete=models.CASCADE, null=True)
    count = models.PositiveIntegerField(null=False, default=1)
    Order = models.ForeignKey('Order', on_delete=models.CASCADE, null=True)


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ('item_id', 'instrument', 'count', 'Order')


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
    order = models.ForeignKey('Order', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(
        null=False,
        default=5,
        validators=[MaxValueValidator(5), MinValueValidator(0)]
    )
    title = models.TextField(null=True)
    review_text = models.TextField(null=True)
    fileupload = models.ImageField(default='default.jpg', upload_to='uploads/avatar/image/')
    check_selected = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('order_id', 'user', 'rating', 'title', 'review_text', 'fileupload', 'check', 'created_at')
