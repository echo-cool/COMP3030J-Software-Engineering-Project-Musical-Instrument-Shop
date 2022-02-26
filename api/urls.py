from rest_framework import routers
from .api import InstrumentsViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register('instruments', InstrumentsViewSet, 'instruments')
router.register('category', CategoryViewSet, 'category')
# print(router.urls)
urlpatterns = router.urls
