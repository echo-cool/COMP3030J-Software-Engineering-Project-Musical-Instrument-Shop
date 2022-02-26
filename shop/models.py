from django.contrib import admin
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='default.jpg', upload_to='uploads/avatar/image/')

    def __str__(self):
        return f'{self.user.username} Profile'


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    pass


class Instrument(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField(max_length=200)
    details = models.CharField(max_length=3000)
    image = models.ImageField(upload_to='uploads/instrument/image/', null=True)
    object_3d = models.FileField(upload_to='uploads/instrument/obj/', null=True, blank=True)
    object_mtl = models.FileField(upload_to='uploads/instrument/mtl/', null=True, blank=True)
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE, default=0)
    category = models.ForeignKey("Category", null=True, blank=True, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}<{self.price}>'


@admin.register(Instrument)
class InstrumentAdmin(admin.ModelAdmin):
    pass


class InstrumentDetail(models.Model):
    instrument = models.OneToOneField('Instrument', on_delete=models.CASCADE)
    details = models.TextField(null=True)


@admin.register(InstrumentDetail)
class InstrumentDetailAdmin(admin.ModelAdmin):
    pass


class Category(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}'


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=0, null=False)
    shopper_confirmed = models.BooleanField(default=False)
    delivery_confirmed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user}<{self.created_at}>'


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    pass


class OrderItem(models.Model):
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE)
    count = models.PositiveIntegerField(null=False)
    instrument = models.ForeignKey('Instrument', on_delete=models.CASCADE, null=False)

    def __str__(self):
        return f'{self.order_id}<{self.instrument}:{self.count}>'


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    pass


class Review(models.Model):
    order_id = models.ForeignKey('Order', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(
        null=False,
        default=5,
        validators=[MaxValueValidator(10), MinValueValidator(0)]
    )
    review_text = models.TextField(null=True)


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    pass
