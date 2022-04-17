from django.contrib import admin
from django.conf import settings
from django.http import HttpResponse
from django.urls import path, include, re_path
from django.conf.urls.static import static
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

import blog
from main.views import ChangeLanguageView

# import Pillow
schema_view = get_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)




urlpatterns = [
    # path('forbidden/', forbidden, name="forbidden"),
    path('admin/', admin.site.urls),
    path('blog/', include('blog.urls'), name="blog"),

    path('chat/', include('chat.urls'), name="chat"),
    path('echarts/', include('echarts.urls'), name="echarts"),

    path('landing/', include('landing_page.urls'), name="landing_page"),

    # path('', IndexPageView.as_view(), name='index'),
    path('', include('shop.urls'), name="index"),
    path('management/', include('management.urls'), name='management'),

    path('i18n/', include('django.conf.urls.i18n')),
    path('language/', ChangeLanguageView.as_view(), name='change_language'),

    path('accounts/', include('accounts.urls')),

    path("api/", include("api.urls")),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
