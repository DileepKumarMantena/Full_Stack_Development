from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import BookPostSerializer
from ..models import BookModel

from rest_framework.parsers import MultiPartParser

@parser_classes((MultiPartParser,))
class BookGetApi(generics.GenericAPIView):
    serializer_class = BookPostSerializer

    def get(self, request, *args, **kwargs):
        try:
            data = BookModel.objects.all()
            serializer_class = BookPostSerializer(data, many=True)
            return Response({'Message': 'Successful',
                             'Result': serializer_class.data,
                             'HasError': False,
                             'Status': 200})

        except Exception as e:
            return Response({'Message': 'Fail',
                             'Result': [],
                             'HasError': True,
                             'Status': 400})