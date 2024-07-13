from django.db import models


class Car(models.Model):
    model = models.CharField(max_length=100)
    price_per_day = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.URLField()


class Booking(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    customer_name = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()
