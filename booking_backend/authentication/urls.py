from django.urls import path
from .views import UserProfileAPIView, UserCreateAPIView, UserListAPIView, user_login, admin_login, user_logout

urlpatterns = [
    path('users/', UserListAPIView.as_view(), name='user-list'),
    path('profile/', UserProfileAPIView.as_view(), name='user-profile'),
    path('register/', UserCreateAPIView.as_view(), name='user-register'),
    path('login/', user_login, name='user-login'),
    path('login-admin/', admin_login, name='admin-login'),
    path('logout/', user_logout, name='user-logout'),
]
