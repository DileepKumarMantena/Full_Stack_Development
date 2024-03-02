from django.contrib.auth.hashers import check_password
from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import *
from ..models import *


class LibraryLoginApi(generics.GenericAPIView):
    serializer_class = LibraryLoginSerializer

    def post(self, request):
        try:
            Username = request.data.get('Username')
            print(Username)
            password = request.data.get('Password')
            print(password)
            userdata = LibrarianModel.objects.get(Username=Username)
            if userdata.Password == password:
                print("hai")
            return Response({
                'message': 'Successful',
                'Result': LibrarianRegistrationSerializer(userdata).data,
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