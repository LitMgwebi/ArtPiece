from django.urls import path
from backend.views import index, create, delete, edit, detail
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
     path('backend/index', index),
     path('backend/add', create),
     path('backend/detail/<int:id>', detail),
     path('backend/edit/<int:id>', edit),
     path('backend/delete/<int:id>', delete),
]

urlpatterns = format_suffix_patterns(urlpatterns)