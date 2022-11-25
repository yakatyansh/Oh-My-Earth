from django.contrib import admin
from .models import Complaint

# Register your models here.

class ComplaintAdmin(admin.ModelAdmin):
    list_display = ['name', 'reportnumber', 'raised_dt', 'location', 'complaint_type']
    search_fields = ('name', 'reportnumber', 'location', 'complaint_type')

admin.site.register(Complaint, ComplaintAdmin)