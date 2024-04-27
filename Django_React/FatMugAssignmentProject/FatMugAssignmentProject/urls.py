from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from django.conf.urls import *
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from django.views.generic import TemplateView
from rest_framework_simplejwt import views as jwt_views

from rest_framework import permissions

# from revproxy.views import ProxyView


schema_view = get_schema_view(
    openapi.Info(
        title="VendorApp",
        default_version='v1',
        name='openapi-schema',
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/',
         jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/',
         jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
    path('Vendor Management System With Performance Metrics /', include('FatMugAssignmentApp.urls')),



    path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)