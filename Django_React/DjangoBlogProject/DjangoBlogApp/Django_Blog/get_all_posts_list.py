from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import RetrievePostSerializer
from ..models import Post

from rest_framework.parsers import MultiPartParser

@parser_classes((MultiPartParser,))
class GetAllPostListApi(generics.GenericAPIView):
    serializer_class = RetrievePostSerializer

    def get(self, request, *args, **kwargs):
        try:
            data = Post.objects.all()
            serializer_class = RetrievePostSerializer(data, many=True)
            return Response({'Message': 'Successful',
                             'Result': serializer_class.data,
                             'HasError': False,
                             'Status': 200})

        except Exception as e:
            return Response({'Message': 'Fail',
                             'Result': [],
                             'HasError': True,
                             'Status': 400})