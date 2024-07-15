from rest_framework import viewsets, permissions
from .models import Booking
from .serializers import BookingSerializer, UserBookingSerializer
from .permissions import IsOwnerOrAdmin, IsAdminOrReadOnly


class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.none()

    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return Booking.objects.all()
        return Booking.objects.filter(customer=user)

    def get_serializer_class(self):
        if self.request.user.is_staff:
            return BookingSerializer
        return UserBookingSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.IsAuthenticated(), IsOwnerOrAdmin()]
        elif self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [permissions.IsAuthenticated(), IsOwnerOrAdmin()]
        else:
            return [permissions.IsAuthenticated(), IsAdminOrReadOnly()]

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user)
