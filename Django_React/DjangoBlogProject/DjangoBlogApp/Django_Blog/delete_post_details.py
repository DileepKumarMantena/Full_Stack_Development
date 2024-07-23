from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import CreatePostSerializer
from ..models import Post
from rest_framework.parsers import MultiPartParser

@parser_classes((MultiPartParser,))

class DeletePostDetails(generics.GenericAPIView):
    serializer_class = CreatePostSerializer

    def delete(self, request, id, format=None):
        try:
            d = Post.objects.get(id=id)
            d.delete()
            return Response({
                'message': f'Successful Deleted Post Of Id {id} Details ',
                'Result': True,
                'HasError': False,
                'status': 200
            })
        except Post.DoesNotExist as e:
            return Response({
                'message': 'Unable To Delete Post Details Of {id} Details',
                'Result': False,
                'HasError': True,
                'status': 400
            })