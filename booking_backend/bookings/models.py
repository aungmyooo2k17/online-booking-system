from django.db import models
from inventory.models import Car


class Booking(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    customer_name = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()
