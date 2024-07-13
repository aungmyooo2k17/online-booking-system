# urls.py

from django.urls import path
from .views import UserCreateAPIView, user_login

urlpatterns = [
    path('register/', UserCreateAPIView.as_view(), name='user-register'),
    path('login/', user_login, name='user-login'),
]
