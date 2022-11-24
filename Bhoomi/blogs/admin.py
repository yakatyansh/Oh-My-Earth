from django.contrib import admin
from .models import Category, Post
# Register your models here.

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['img-tg', 'title' , 'description']
    search_fields = ('title', )

class PostAdmin(admin.ModelAdmin):
    list_display = ['title']
    search_fields = ('title', )
admin.site.register(Category)
admin.site.register(Post)