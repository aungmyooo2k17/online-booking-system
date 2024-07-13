from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    dob = models.DateField(blank=True, null=True)
    have_driving_license = models.BooleanField(default=False)

    def __str__(self):
        return self.username
