from shop.models import Instrument, Category, Order
from .serializers import InstrumentSerializer, CategorySerializer, OrderSerializer
from rest_framework import viewsets, permissions


class InstrumentsViewSet(viewsets.ModelViewSet):
    queryset = Instrument.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = InstrumentSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = CategorySerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = OrderSerializer
