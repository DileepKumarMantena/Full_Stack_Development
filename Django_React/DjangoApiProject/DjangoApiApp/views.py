# from django.http import HttpResponse
# from django.template import loader
# from django.shortcuts import render


# def members(request):
#   template = loader.get_template('first.html')
#   return HttpResponse(template.render())

# def submit(request):
#     if request.method == 'POST':
#         # Capture form data
#         first_name = request.POST.get('firstName')
#         last_name = request.POST.get('lastName')
#         age = request.POST.get('age')
#         city = request.POST.get('city')
#         state = request.POST.get('state')
#         username = request.POST.get('username')
#         password = request.POST.get('password')
        
#         # Pass form data to template
#         context = {
#             'first_name': first_name,
#             'last_name': last_name,
#             'age': age,
#             'city': city,
#             'state': state,
#             'username': username,
#             'password': password,
#         }
#         # Render a separate HTML page to display the submitted data
#         return render(request, 'submitted_form.html', context)
#     else:
#         # Handle GET request (e.g., display the form)
#         return render(request, 'first.html')

# myapp/views.py
from django.shortcuts import render, get_object_or_404, redirect
from .models import MyModel

def my_model_list(request):
    my_models = MyModel.objects.all()
    return render(request, 'my_model_list.html', {'my_models': my_models})

def my_model_detail(request, pk):
    my_model = get_object_or_404(MyModel, pk=pk)
    return render(request, 'my_model_detail.html', {'my_model': my_model})

def my_model_create(request):
    if request.method == 'POST':
        # Process form submission
        return redirect('my_model_list')
    else:
        return render(request, 'my_model_form.html')

def my_model_update(request, pk):
    my_model = get_object_or_404(MyModel, pk=pk)
    if request.method == 'POST':
        # Process form submission
        return redirect('my_model_detail', pk=pk)
    else:
        return render(request, 'my_model_form.html', {'my_model': my_model})

def my_model_delete(request, pk):
    my_model = get_object_or_404(MyModel, pk=pk)
    if request.method == 'POST':
        my_model.delete()
        return redirect('my_model_list')
    return render(request, 'my_model_confirm_delete.html', {'my_model': my_model})
