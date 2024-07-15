from django.db import models


class Brand(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name


class Car(models.Model):
    model_name = models.CharField(max_length=255)
    model_year = models.PositiveIntegerField()
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    type = models.CharField(max_length=10, choices=[(
        'petrol', 'Petrol'), ('hybrid', 'Hybrid'), ('electric', 'Electric')])
    no_of_seater = models.PositiveSmallIntegerField()
    engine_litre = models.DecimalField(max_digits=3, decimal_places=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='cars/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.model_name} ({self.model_year})"
