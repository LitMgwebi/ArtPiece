from django.db import models
from django.utils import timezone

# Create your models here.

def upload_path(instance, filename):
     return 'uploads/{0}/{1}'.format(instance.artist, filename)
class ArtPiece(models.Model):
     id = models.AutoField(primary_key=True)
     blog = models.TextField()
     date = models.DateTimeField(default=timezone.now)
     artist = models.CharField(max_length=255)
     art = models.FileField(upload_to=upload_path)
     