from django.urls import path
from rest_framework import routers
from .api import InstrumentsViewSet, CategoryViewSet, OrderViewSet, ReviewViewSet, InstrumentDetailViewSet, \
    ProfileViewSet, UserViewSet, CartViewSet, WishlistViewSet
from .view import login

router = routers.DefaultRouter()
router.register('instruments', InstrumentsViewSet, 'instruments')
router.register('category', CategoryViewSet, 'category')
router.register('order', OrderViewSet, 'order')
router.register('review', ReviewViewSet, 'review')
router.register('instrumentDetail', InstrumentDetailViewSet, 'instrumentDetail')
router.register('profile', ProfileViewSet, 'profile')
router.register('user', UserViewSet, 'user')
router.register('cart', CartViewSet, 'cart')
router.register('wishlist', WishlistViewSet, 'wishlist')
# print(router.urls)
urlpatterns = router.urls + [
    path('login/', login, name='index'),

]
