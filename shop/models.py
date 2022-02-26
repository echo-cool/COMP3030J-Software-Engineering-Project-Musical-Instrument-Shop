from django.contrib import admin
from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='default.jpg', upload_to='uploads/avatar/image/')

    def __str__(self):
        return f'{self.user.username} Profile'


class Instrument(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField(max_length=200)
    details = models.CharField(max_length=3000)
    image_url = models.ImageField(upload_to='uploads/instrument/image/', null=True)
    object_3d = models.FileField(upload_to='uploads/instrument/obj/', null=True)
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE, default=0)
    category = models.ForeignKey("Category", null=True, blank=True, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}<{self.price}>'


@admin.register(Instrument)
class InstrumentAdmin(admin.ModelAdmin):
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
    # 每一行记录是订单中的一个商品
    # 同一个订单的order_id相同
    order_id = models.PositiveIntegerField(null=False)
    count = models.PositiveIntegerField(null=False)
    instrument = models.ForeignKey('Instrument', on_delete=models.CASCADE, null=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=0, null=False)
    shopper_confirmed = models.BooleanField(default=False)
    delivery_confirmed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.order_id}<{self.instrument}>'

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    pass
