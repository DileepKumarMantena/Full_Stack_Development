# admin.py

from django.contrib import admin
from .models import TodoItem, TimeUnit

admin.site.register(TodoItem)
admin.site.register(TimeUnit)
