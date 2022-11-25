from django.db import models
from django.conf import settings
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

# Create your models here.

class Subscriber(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    def __str__(self):
        return self.email

class Newsletter(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    subject = models.CharField(max_length=100)
    contents = models.TextField()

    def __str__(self):
        return self.subject + " " + self.created_at.strftime("%B %d, %Y")