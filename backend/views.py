from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status
from .models import ArtPiece
from .serializers import ArtPieceSerializer

# Create your views here.

@api_view(['GET'])
def index(request, format=None):
     try:
          art_pieces = ArtPiece.objects.all()
          art_piece_serializer = ArtPieceSerializer(art_pieces, many=True)
          return JsonResponse(art_piece_serializer.data, safe=False)
     except Exception as err:
          print(err)


@api_view(['POST'])
def create(request, format=None):
     try:
          art_piece_serializer = ArtPieceSerializer(data=request.data)
          if art_piece_serializer.is_valid():
               art_piece_serializer.save
               return JsonResponse(art_piece_serializer.data, status=status.HTTP_201_CREATED)
          return JsonResponse(status=status.HTTP_409_CONFLICT)
     except Exception as err:
          print(err)


def getOneRecord(id):
     try:
          art_piece = ArtPiece.objects.get(pk=id)
     except ArtPiece.DoesNotExist:
          art_piece = JsonResponse(status=status.HTTP_404_NOT_FOUND)

     return art_piece

@api_view(['GET'])
def detail(request, id, format=None):
     try:
          art_piece = getOneRecord(id)
          serializer = ArtPieceSerializer(art_piece)
          return JsonResponse(serializer)
     except Exception as err:
          print(err)


@api_view(['GET', 'PUT'])
def edit(request, id, format=None):
     try:
          art_piece = getOneRecord(id)

          if request.method == 'GET':
               serializer = ArtPieceSerializer(art_piece)
               return JsonResponse(serializer)
          elif request.method == 'PUT':
               serializer = ArtPieceSerializer(art_piece, data=request.data)
               if serializer.is_valid():
                    serializer.save()
                    return JsonResponse(serializer.data)
               return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
     except Exception as err:
          print(err)

@api_view(['GET', 'DELETE'])
def delete(request, id, format=None):
     try:
          art_piece = getOneRecord(id)

          if request.method == 'GET':
               serializer = ArtPieceSerializer(art_piece)
               return JsonResponse(serializer.data)
          elif request.method == 'DELETE':
               art_piece.delete()
               return JsonResponse(status=status.HTTP_204_NO_CONTENT)
     except Exception as err:
          print(err)