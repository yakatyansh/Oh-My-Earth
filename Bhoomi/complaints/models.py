from django.db import models

# Create your models here.

class Complaint(models.Model):
    name = models.CharField(max_length=100)
    id = models.AutoField(primary_key=True)
    reportnumber = models.CharField(max_length=100, null=True, blank=True)
    raised_dt = models.DateTimeField(auto_now_add=True)
    complaint_type = models.CharField(max_length=100, null=False, blank=False)
    location = models.CharField(max_length=100, null=False, blank=False)

    def __str__(self):
        return self.reportnumber