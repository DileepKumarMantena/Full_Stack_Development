from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import RetrievePostSerializer
from ..models import Post
from rest_framework.parsers import MultiPartParser

@parser_classes((MultiPartParser,))

class GetPostsById(generics.GenericAPIView):
    serializer_class = RetrievePostSerializer

    def get(self, request,id):
        try:
            vendor=Post.objects.get(id=id)
            serializer = self.serializer_class(vendor)
            return Response({
                'message': f'Successful Retrived Details  Of Id {id}  ',
                'Result': serializer.data,
                'HasError': False,
                'status': 200
            })
        except Post.DoesNotExist as e:
            return Response({
                'message': 'Post Details of {id} Were Not Found',
                'Result': False,
                'HasError': True,
                'status': 400
            })