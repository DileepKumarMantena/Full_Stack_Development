# myapp/views.py
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import MyModel

class MyModelListView(ListView):
    model = MyModel
    template_name = 'my_model_list.html'
    context_object_name = 'my_models'

class MyModelDetailView(DetailView):
    model = MyModel
    template_name = 'my_model_detail.html'
    context_object_name = 'my_model'

class MyModelCreateView(CreateView):
    model = MyModel
    template_name = 'my_model_form.html'
    fields = ['name', 'description']
    success_url = reverse_lazy('my_model_list')

class MyModelUpdateView(UpdateView):
    model = MyModel
    template_name = 'my_model_form.html'
    fields = ['name', 'description']
    success_url = reverse_lazy('my_model_list')

class MyModelDeleteView(DeleteView):
    model = MyModel
    template_name = 'my_model_confirm_delete.html'
    success_url = reverse_lazy('my_model_list')
