from rest_framework import permissions


class IsOwnerOrAdmin(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.user.is_staff:
            return True  # Admin can access all bookings
        return obj.customer == request.user  # User can only access their own bookings


class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True  # Allow read-only permissions for non-authenticated requests
        # Only admin can perform write operations
        return request.user and request.user.is_staff

    def has_object_permission(self, request, view, obj):
        return request.user.is_staff  # Admin can perform any action on object
