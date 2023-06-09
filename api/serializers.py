from dataclasses import fields

from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.fields import CharField
from rest_framework.generics import get_object_or_404
from rest_framework.serializers import ModelSerializer

import blog.models
from blog.models import Post
from chat.models import MessageModel
from shop.models import Instrument, Category, Order, Review, Profile, InstrumentDetail, Cart, Wishlist, OrderItem, \
    Notification, DisabledArea


class InstrumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instrument
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = "__all__"


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"


class DisabledAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DisabledArea
        fields = "__all__"


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


class InstrumentDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstrumentDetail
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = "__all__"


class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = "__all__"


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('username',)


class MessageModelSerializer(ModelSerializer):
    user = CharField(source='user.username', read_only=True)
    recipient = CharField(source='recipient.username')

    def create(self, validated_data):
        user = self.context['request'].user
        recipient = get_object_or_404(
            User, username=validated_data['recipient']['username'])
        msg = MessageModel(recipient=recipient,
                           body=validated_data['body'],
                           user=user)
        msg.save()
        return msg

    class Meta:
        model = MessageModel
        fields = ('id', 'user', 'recipient', 'timestamp', 'body')


class PostModelSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"


class BlogCategorySerializer(ModelSerializer):
    class Meta:
        model = blog.models.Category
        fields = "__all__"


class NotificationSerializer(ModelSerializer):
    class Meta:
        model = Notification
        fields = "__all__"
