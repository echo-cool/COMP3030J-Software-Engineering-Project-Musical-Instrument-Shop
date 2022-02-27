from rest_framework import routers
from .api import InstrumentsViewSet, CategoryViewSet, OrderViewSet

router = routers.DefaultRouter()
router.register('instruments', InstrumentsViewSet, 'instruments')
router.register('category', CategoryViewSet, 'category')
router.register('order', OrderViewSet, 'order')
# print(router.urls)
urlpatterns = router.urls
