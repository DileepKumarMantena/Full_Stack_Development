from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import CreateNewVendor_Serializer
from ..models import Vendor_Model
from rest_framework.parsers import MultiPartParser

@parser_classes((MultiPartParser,))

class UpdateVendorsDetailsById(generics.GenericAPIView):
    serializer_class = CreateNewVendor_Serializer

    def put(self, request,id):
        try:
            vendor=Vendor_Model.objects.get(id=id)
            serializer = self.serializer_class(vendor)
            return Response({
                'message': 'Successful Updated Vendors Details ',
                'Result': True,
                'HasError': False,
                'status': 200
            })
        except Vendor_Model.DoesNotExist as e:
            return Response({
                'message': 'Vendor Details Not Updated',
                'Result': False,
                'HasError': True,
                'status': 400
            })