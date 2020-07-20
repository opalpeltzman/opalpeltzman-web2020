from django.db import models
from django import forms
from django.db.models import Model


class registered(models.Model):
    TYPE = (
                ('stylist','stylist'),
                ('standart', 'standart'),
    )
    Username = models.CharField(max_length = 70, null=True )
    Email = models.EmailField(max_length = 254, null=True )
    Password = models.CharField(max_length = 50, null=True )
    userType = models.CharField(max_length=200, null=True, choices=TYPE)

    def __str__(self):
    		return self.id





