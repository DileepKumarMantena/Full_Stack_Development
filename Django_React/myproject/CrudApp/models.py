from django.db import models

class MyModel(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    objects = models.Manager

    # def __str__(self):
    #     return self.name
