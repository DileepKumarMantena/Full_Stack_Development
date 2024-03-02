from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import LibrarianRegistrationSerializer


class LibrarianRegistrationApi(generics.GenericAPIView):
    serializer_class = LibrarianRegistrationSerializer

    def post(self, request, *args, **kwargs):
        try:
            print("hai1")
            serializer = self.get_serializer(data=request.data)
            print("hai2")
            serializer.is_valid(raise_exception=True)
            print("hai3")
            user = serializer.save()
            print("hai4")

            return Response({
                'message': 'Successful',
                'Result': LibrarianRegistrationSerializer(user).data,
                'HasError': False,
                'status': 200
            })
        except Exception as e:
            return Response({
                'message': 'Fail',
                'Result': [],
                'HasError': True,
                'status': 400
            })