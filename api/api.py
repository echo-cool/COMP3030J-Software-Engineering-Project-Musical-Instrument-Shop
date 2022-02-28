import django_filters

from shop.models import Instrument, Category, Order, Review, Profile, InstrumentDetail
from .serializers import InstrumentSerializer, CategorySerializer, OrderSerializer, ReviewSerializer, ProfileSerializer, \
    InstrumentDetailSerializer
from rest_framework import viewsets, permissions


class InstrumentsViewSet(viewsets.ModelViewSet):
    queryset = Instrument.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = InstrumentSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', "name", 'posted_by']


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = CategorySerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', "name", ]


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = OrderSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', "user", 'instrument', 'shopper_confirmed', 'delivery_confirmed']


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = ReviewSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = ProfileSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]


class InstrumentDetailViewSet(viewsets.ModelViewSet):
    queryset = InstrumentDetail.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = InstrumentDetailSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', "instrument", ]

