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
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)

    # This is used to solve the problem of one order has more than one instrument
    order_id = models.IntegerField(default=0)

    name = models.CharField(max_length=20, default="")
    last_name = models.CharField(max_length=20, default="")
    full_address = models.CharField(max_length=200, default="")
    city = models.CharField(max_length=20, default="")
    postal_code = models.CharField(max_length=50, default="")
    country = models.CharField(max_length=200, default="")
    telephone = models.CharField(max_length=200, default="(000)000-0000")
    payment = models.CharField(max_length=20, default="")
    shipping = models.CharField(max_length=20, default="")
    instrument = models.ForeignKey('Instrument', on_delete=models.CASCADE, default=0)
    count = models.PositiveIntegerField(null=False, default=1)
    # Item = models.ForeignKey('Item', max_length=200, on_delete=models.CASCADE, null=True)
    newsletter = models.BooleanField(default=False)
    shopper_confirmed = models.BooleanField(default=False)
    delivery_confirmed = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user}<{self.created_at}>'


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'user', "order_id", 'name', 'last_name', 'shopper_confirmed', 'delivery_confirmed', 'created_at')


class Review(models.Model):
    order = models.OneToOneField('Order', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(
        null=False,
        default=5,
        validators=[MaxValueValidator(5), MinValueValidator(0)]
    )
    title = models.CharField(null=True, max_length=30)
    review_text = models.TextField(null=True)
    fileupload = models.ImageField(default='default.jpg', upload_to='uploads/avatar/image/')
    check_selected = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('order_id', 'user', 'rating', 'title', 'review_text', 'fileupload', 'check', 'created_at')
