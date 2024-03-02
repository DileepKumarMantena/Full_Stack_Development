from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import MemberRegistrationSerializer
from ..models import MemberModel


class MemberUpdateApi(generics.GenericAPIView):
    serializer_class = MemberRegistrationSerializer

    def put(self, request, *args,id):
        try:
            userdata = MemberModel.objects.get(id=id)

            s = MemberRegistrationSerializer(userdata, data=request.data)
            s.is_valid(raise_exception=True)
            s.save()

            return Response({
                'message': 'Successful',
                'Result': True,
                'HasError': False,
                'status': 200
            })
        except MemberModel.DoesNotExist as e:
            return Response({
                'message': 'Not Updated',
                'Result':False,
                'HasError': True,
                'status': 400
            })