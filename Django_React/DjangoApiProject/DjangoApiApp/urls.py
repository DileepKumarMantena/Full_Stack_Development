from django.urls import path
from . import views

# urlpatterns = [
#     path('members/', views.members, name='members'),
#     path('submit/', views.submit, name='submit'),
# ]

# myapp/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.my_model_list, name='my_model_list'),
    path('<int:pk>/', views.my_model_detail, name='my_model_detail'),
    path('new/', views.my_model_create, name='my_model_create'),
    path('<int:pk>/edit/', views.my_model_update, name='my_model_update'),
    path('<int:pk>/delete/', views.my_model_delete, name='my_model_delete'),
]
