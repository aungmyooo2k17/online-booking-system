from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookingViewSet, my_bookings

router = DefaultRouter()
router.register(r'', BookingViewSet)

urlpatterns = [
    path('my-bookings/', my_bookings, name='my-bookings'),
    path('', include(router.urls)),
]
