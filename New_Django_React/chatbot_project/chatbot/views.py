from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .constants import responses

def register_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already exists.")
        else:
            User.objects.create_user(username=username, password=password)
            return redirect('login')
    return render(request, 'register.html')

def login_view(request):
    if request.method == 'POST':
        user = authenticate(request, username=request.POST['username'], password=request.POST['password'])
        if user:
            login(request, user)
            return redirect('chat')
        else:
            messages.error(request, "Invalid credentials.")
    return render(request, 'login.html')

@login_required
def chat_view(request):
    bot_reply = ''
    if request.method == 'POST':
        user_msg = request.POST['message']
        bot_reply = get_bot_response(user_msg)
    return render(request, 'chat.html', {'bot_reply': bot_reply})

def logout_view(request):
    logout(request)
    return redirect('login')

# Simple bot logic
import openai


def get_bot_response(user_msg):
        return get_mock_response(user_msg)

def get_mock_response(user_msg):
    user_msg = user_msg.lower().strip()



    # Try to match the full input exactly
    if user_msg in responses:
        return responses[user_msg]

    # Partial match fallback
    for key in responses:
        if key in user_msg:
            return responses[key]

    # Default fallback
    return "I'm not sure how to respond to that yet, but I'm learning! 🤖"

