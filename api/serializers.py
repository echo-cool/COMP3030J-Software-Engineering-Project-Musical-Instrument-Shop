from dataclasses import fields

from django.contrib.auth.models import User
from rest_framework import serializers

from shop.models import Instrument, Category, Order, Review, Profile, InstrumentDetail


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


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
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
