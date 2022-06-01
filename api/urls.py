from django.urls import path
from rest_framework import routers

from shop.models import DisabledArea
from .api import InstrumentsViewSet, CategoryViewSet, OrderViewSet, ReviewViewSet, InstrumentDetailViewSet, \
    ProfileViewSet, UserViewSet, CartViewSet, WishlistViewSet, MessageModelViewSet, PostViewSet, BlogCategoryViewSet, \
    OrderItemViewSet, NotificationViewSet, DisabledAreaViewSet
from .view import login, logout, rank_user_list, add_wishlist, add_cart, all_read, revenue_month, analyze_image, \
    EditorUploadImage, max_order_priority, search_user, send_company_message, order_data, send_modify_order

app_name = 'api'

router = routers.DefaultRouter()
router.register('instruments', InstrumentsViewSet, 'instruments')
router.register('category', CategoryViewSet, 'category')
router.register('order', OrderViewSet, 'order')
router.register('order_item', OrderItemViewSet, 'order_item')
router.register('review', ReviewViewSet, 'review')
router.register('disabledArea', DisabledAreaViewSet, 'disabledArea')
router.register('instrumentDetail', InstrumentDetailViewSet, 'instrumentDetail')
router.register('profile', ProfileViewSet, 'profile')
router.register('user', UserViewSet, basename='user')

# router.register('user_chat', UserModelViewSet, basename='user_chat')

router.register('cart', CartViewSet, 'cart')
router.register('wishlist', WishlistViewSet, 'wishlist')
router.register('message', MessageModelViewSet, 'message')
router.register('post', PostViewSet, 'post')
router.register('blog_category', BlogCategoryViewSet, 'blog_category')
router.register('notification', NotificationViewSet, 'notification')
# print(router.urls)
urlpatterns = router.urls + [
    path('login/', login, name='index'),
    path('logout/', logout, name='logout'),
    path('rank_user_list/', rank_user_list, name='rank_user'),
    path('add_wishlist/', add_wishlist, name='add_wishlist'),
    path('add_cart/', add_cart, name='add_cart'),
    path('all_read/', all_read, name='all_read'),
    path('revenue_month/', revenue_month, name='revenue_month'),
    path('analyze_image/', analyze_image, name='analyze_image'),
    path('editor_upload_img/', EditorUploadImage.as_view(), name="editor_upload_img"),
    path('max_order_priority/', max_order_priority, name="max_order_priority"),
    path('search_user/', search_user, name="search_user"),
    path('send_company_message/', send_company_message, name="search_user"),
    path('order_data/', order_data, name="order_data"),
    path('send_modify_order/', send_modify_order, name='send_modify_order')
]
