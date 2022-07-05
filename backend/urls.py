from django.urls import path
from backend.views import index, create, delete, edit, detail
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
     path('index', index),
     path('create', create),
     path('detail/<int:id>', detail),
     path('edit/<int:id>', edit),
     path('delete/<int:id>', delete),
]

urlpatterns = format_suffix_patterns(urlpatterns)