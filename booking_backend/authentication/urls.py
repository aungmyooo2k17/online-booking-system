# urls.py

from django.urls import path, include
from .views import UserProfileAPIView, UserCreateAPIView, user_login
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path('profile/', UserProfileAPIView.as_view(), name='user-profile'),
    path('register/', UserCreateAPIView.as_view(), name='user-register'),
    path('login/', user_login, name='user-login')
]
