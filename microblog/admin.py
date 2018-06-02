from django.contrib import admin
from .models import BlogPost


@admin.register(BlogPost)
class PostAdmin(admin.ModelAdmin):
    list_display = ('user', 'date', 'body')
    ordering = ['-date']
