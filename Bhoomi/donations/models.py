from django.db import models

# Create your models here.

class NGO(models.Model):
    ngo_name = models.CharField(max_length=100)
    domain = models.CharField(max_length=20, blank=True)
    head_of_ngo = models.CharField(max_length=30, blank=True)
    contactNo = models.CharField(max_length=10, blank=True)
    email = models.EmailField(blank=True)
    registration_cerificate_Trust_Society = models.FileField(upload_to='verification', blank=True)
    certificate_12A = models.FileField(upload_to='verification', blank=True)
    beneficiary_profiles = models.FileField(upload_to='verification', blank=True)
    verification_status = models.BooleanField(default=False)

    def verification_true(self):
        self.verification_status = True
        self.save()

    def verification_false(self):
        self.verification_status = False
        self.save()

    def get_user(self, user):
        self.ngo_user = user
        self.save()

    def __str__(self):
        return self.ngo_name

class donaetion_requst(models.Model):

    donation_description = models.TextField(blank=True,default=None)
    donation_amount = models.CharField(default=None,blank=True,max_length=15)

    def __str__(self):
        return self.donation_amount

class donation_request_view(models.Model):
    ngo_name = models.CharField(default=None,max_length=50,blank=False,primary_key=True)
    domain = models.CharField(default=None,max_length=50,blank=False)
    head_of_ngo = models.CharField(default=None,max_length=50,blank=False)
    contactNo = models.CharField(default=None,max_length=10,blank=False)
    email = models.EmailField(blank=False,default=None)
    donation_description = models.TextField(default=None,blank=False)
    donation_amount = models.CharField(default=None,max_length=10,blank=False)

    def __str__(self):
        return self.ngo_name

    class Meta:
        managed = False
        db_table = 'post_request'