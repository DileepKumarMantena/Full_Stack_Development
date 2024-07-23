from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import CreatePostSerializer
from rest_framework.parsers import MultiPartParser

@parser_classes((MultiPartParser,))
class CreateNewPost(generics.GenericAPIView):
    serializer_class = CreatePostSerializer

    def post(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            user = serializer.save()
            return Response({
                'message': f'The Post with ID {user.id} has been successfully created',
                'Result': CreatePostSerializer(user).data,
                'HasError': False,
                'status': 200
            })
        except Exception as e:
            return Response({
                'message': 'The Post is Not Been Created ',
                'Result': [],
                'HasError': True,
                'status': 400
            })
    
