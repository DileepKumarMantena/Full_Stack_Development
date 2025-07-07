from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('chat/', views.chat_view, name='chat'),
    path('logout/', views.logout_view, name='logout'),
]
