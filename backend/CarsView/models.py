from django.db import models

# Create your models here.
class Cars(models.Model):
    Photo = models.URLField(max_length=500)
    Name = models.CharField(max_length=200)
    Brand = models.CharField(max_length=200)
    Mileage   = models.FloatField()
    TopSpeed   = models.FloatField()

    
