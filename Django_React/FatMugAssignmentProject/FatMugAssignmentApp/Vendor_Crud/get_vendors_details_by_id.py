from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import CreateNewVendor_Serializer
from ..models import Vendor_Model
from rest_framework.parsers import MultiPartParser

@parser_classes((MultiPartParser,))

class GetVendorsDetailsById(generics.GenericAPIView):
    serializer_class = CreateNewVendor_Serializer

    def get(self, request,id):
        try:
            vendor=Vendor_Model.objects.get(id=id)
            serializer = self.serializer_class(vendor)
            return Response({
                'message': 'Successful',
                'Result': serializer.data,
                'HasError': False,
                'status': 200
            })
        except Vendor_Model.DoesNotExist as e:
            return Response({
                'message': 'Vendor Not Found',
                'Result': False,
                'HasError': True,
                'status': 400
            })