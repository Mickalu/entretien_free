from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Ticket(models.Model):
    ZONE_CHOICES = (
        ('A', 'A'),
        ('B', 'B'),
        ('C', 'C'),
        ('D', 'D'),
        ('E', 'E'),
        ('F', 'F'),
        ('G', 'G'),
        ('H', 'H'),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    priority = models.IntegerField()
    zone = models.CharField(choices=ZONE_CHOICES , max_length=1)
