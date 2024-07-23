from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import CreatePostSerializer
from ..models import Post
from rest_framework.parsers import MultiPartParser

@parser_classes((MultiPartParser,))
class UpdatePostDetailsById(generics.GenericAPIView):
    serializer_class = CreatePostSerializer

    def put(self, request,id):
        try:
            post=Post.objects.get(id=id)
            self.serializer_class(post)
            return Response({
                'message': f'Successful Updated Post Of Id {id} Details ',
                'Result': True,
                'HasError': False,
                'status': 200
            })
        except Post.DoesNotExist as e:
            return Response({
                'message': f'Post Details Not Updated of id  {id}',
                'Result': False,
                'HasError': True,
                'status': 400
            })