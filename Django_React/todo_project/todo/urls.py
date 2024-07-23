from django.urls import path
from .views import TodoItemListCreate, TodoItemRetrieveUpdateDestroy

urlpatterns = [
    path('api/todos/', TodoItemListCreate.as_view(), name='todo_list_create'),
    path('api/todos/<int:pk>/', TodoItemRetrieveUpdateDestroy.as_view(), name='todo_detail'),
]
