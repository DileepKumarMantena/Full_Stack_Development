from django.urls import path
from .views import *

urlpatterns = [
    path('api/todos/', TodoItemListCreate.as_view(), name='todo_list_create'),
    path('api/todos/<int:pk>/', TodoItemRetrieveUpdateDestroy.as_view(), name='todo_detail'),
    path('timeunit/', create_time_unit, name='create_time_unit'),
]
