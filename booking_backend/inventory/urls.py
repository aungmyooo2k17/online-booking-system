from django.urls import include
from rest_framework.routers import DefaultRouter, path
from .views import BrandViewSet, CarViewSet


router = DefaultRouter()
router.register(r'cars', CarViewSet, basename='car')
router.register(r'brands', BrandViewSet, basename='brand')

urlpatterns = [
    path('', include(router.urls)),
]
