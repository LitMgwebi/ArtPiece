from django.contrib import admin
from .models import ArtPiece


class ArtPieceAdmin(admin.ModelAdmin):
     readonly_fields = ('id',)

admin.site.register(ArtPiece, ArtPieceAdmin)