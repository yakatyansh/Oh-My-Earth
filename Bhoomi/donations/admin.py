from django.contrib import admin
from .models import NGO, donation_requst , donation_request_view

# Register your models here.

admin.site.register(NGO)

admin.site.register(donation_requst)

admin.site.register(donation_request_view)