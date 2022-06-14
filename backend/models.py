from django.db import models
from django.utils import timezone

# Create your models here.
class ArtPiece(models.Model):
     id = models.AutoField(primary_key=True)
     blog = models.TextField()
     date = models.DateField(default=timezone.now)
     art_Piece = models.ImageField()
     