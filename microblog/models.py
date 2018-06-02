from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class BlogPost(models.Model):
    """
    The "BlogPost" model for the micro blog app
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(
        default=timezone.now
    )
    body = models.CharField(default='', max_length=200)

    def __str__(self):
        return self.body
