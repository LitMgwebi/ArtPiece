from rest_framework import serializers
from .models import ArtPiece

class ArtPieceSerializer(serializers.ModelSerializer):
     class Meta:
          model = ArtPiece
          fields = ('id', 'blog', 'date', 'artist', 'art') 