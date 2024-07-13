from rest_framework import viewsets

from inventory.models import Brand, Car
from inventory.serializers import BrandSerializer, CarSerializer
from .permissions import IsAdminOrReadOnly


class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    permission_classes = [IsAdminOrReadOnly]


class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [IsAdminOrReadOnly]
