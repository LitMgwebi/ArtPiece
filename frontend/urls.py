from django.urls import path
from .views import index

urlpatterns = [
   path('', index),
   path('list', index),
   path('create', index),
   path('update', index),
   path('detail', index),
   path('delete', index)
]