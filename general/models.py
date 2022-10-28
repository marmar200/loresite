from django.db import models


class User(models.Model):   # model or table for user
    number = models.CharField(max_length=30, unique=True, blank=False)   # number like a username, he is unique
    password_hash = models.CharField(max_length=200, blank=False)       # hashing password
    first_name = models.CharField(max_length=100, blank=False)          # name
    second_name = models.CharField(max_length=100, blank=False)         # surname
    age = models.CharField(max_length=3, blank=False)                    # age
    session = models.CharField(max_length=200, blank=False)             # users session
    salt = models.CharField(max_length=200, blank=False)                # salt to hash password
    description = models.TextField(max_length=500, default="Cristiano Ronaldo: SIII-III-III")   # description

