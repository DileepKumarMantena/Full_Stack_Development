from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import BookPostSerializer
from ..models import BookModel
from rest_framework.parsers import MultiPartParser

@parser_classes((MultiPartParser,))

class DeleteBookApi(generics.GenericAPIView):
    serializer_class = BookPostSerializer

    def delete(self, request, id, format=None):
        try:
            d = BookModel.objects.get(id=id)
            d.delete()
            return Response({
                'message': 'Successful',
                'Result': True,
                'HasError': False,
                'status': 200
            })
        except BookModel.DoesNotExist as e:
            return Response({
                'message': 'Book Not Found',
                'Result': False,
                'HasError': True,
                'status': 400
            })