# serializers.py

from rest_framework import serializers
from authentication.models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={
                                     'input_type': 'password'})

    class Meta:
        model = CustomUser
        fields = ('username', 'password', 'email', 'dob',
                  'have_driving_license', 'first_name', 'last_name')

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'first_name', 'last_name',
                  'email', 'dob', 'have_driving_license']

    def update(self, instance, validated_data):
        # Update user instance
        instance = super().update(instance, validated_data)
        return instance
