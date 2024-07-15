import django_filters
from .models import Car


class CarFilter(django_filters.FilterSet):
    class Meta:
        model = Car
        fields = {
            'model_name': ['icontains'],
            'model_year': ['exact', 'gte', 'lte'],
            'type': ['exact'],
            'no_of_seater': ['exact', 'gte', 'lte'],
            'engine_litre': ['exact', 'gte', 'lte'],
            'price': ['exact', 'gte', 'lte'],
        }
