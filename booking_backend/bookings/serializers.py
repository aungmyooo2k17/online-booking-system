from rest_framework import serializers
from .models import Booking


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'


class UserBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        exclude = ['customer']
