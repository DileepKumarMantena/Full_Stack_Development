from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import MemberRegistrationSerializer
from ..models import MemberModel
from rest_framework.parsers import MultiPartParser

@parser_classes((MultiPartParser,))

class DeleteMember(generics.GenericAPIView):
    serializer_class = MemberRegistrationSerializer

    def delete(self, request, id):
        try:
            d = MemberModel.objects.get(id=id)
            d.delete()
            return Response({
                'message': 'Successful',
                'Result': True,
                'HasError': False,
                'status': 200
            })
        except MemberModel.DoesNotExist as e:
            return Response({
                'message': 'Book Not Found',
                'Result': False,
                'HasError': True,
                'status': 400
            })