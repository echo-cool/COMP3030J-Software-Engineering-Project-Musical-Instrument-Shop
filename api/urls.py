from rest_framework import routers
from .api import InstrumentsViewSet, CategoryViewSet, OrderViewSet, ReviewViewSet, InstrumentDetailViewSet, ProfileViewSet

router = routers.DefaultRouter()
router.register('instruments', InstrumentsViewSet, 'instruments')
router.register('category', CategoryViewSet, 'category')
router.register('order', OrderViewSet, 'order')
router.register('review', ReviewViewSet, 'review')
router.register('instrumentDetail', InstrumentDetailViewSet, 'instrumentDetail')
router.register('profile', ProfileViewSet, 'profile')
# print(router.urls)
urlpatterns = router.urls
