from rest_framework import serializers
from .models import *

class TodoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoItem
        fields = '__all__'

class TimeUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeUnit
        fields = '__all__'