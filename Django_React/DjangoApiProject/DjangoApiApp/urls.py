from django.urls import path
from . import views

# urlpatterns = [
#     path('members/', views.members, name='members'),
#     path('submit/', views.submit, name='submit'),
# ]

# myapp/urls.py
from django.urls import path
from .views import MyModelListView, MyModelDetailView, MyModelCreateView, MyModelUpdateView, MyModelDeleteView

urlpatterns = [
    path('', MyModelListView.as_view(), name='my_model_list'),
    path('<int:pk>/', MyModelDetailView.as_view(), name='my_model_detail'),
    path('new/', MyModelCreateView.as_view(), name='my_model_create'),
    path('<int:pk>/edit/', MyModelUpdateView.as_view(), name='my_model_update'),
    path('<int:pk>/delete/', MyModelDeleteView.as_view(), name='my_model_delete'),
]

