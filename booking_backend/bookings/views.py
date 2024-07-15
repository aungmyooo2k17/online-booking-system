from rest_framework import viewsets, permissions
from .models import Car, Booking
from .serializers import BookingSerializer
from rest_framework.decorators import action
from rest_framework.response import Response


class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]


@action(detail=False, methods=['get'])
def my_bookings(self, request):
    queryset = self.get_queryset()
    serializer = self.get_serializer(queryset, many=True)
    return Response(serializer.data)
