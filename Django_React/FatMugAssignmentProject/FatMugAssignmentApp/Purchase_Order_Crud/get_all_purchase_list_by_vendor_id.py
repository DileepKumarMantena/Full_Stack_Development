from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import GetAllPurchaseList_Serializer
from ..models import PurchaseOrder
from rest_framework.parsers import MultiPartParser

@parser_classes((MultiPartParser,))

class GetPurchaseDetailsByVendorId(generics.GenericAPIView):
    serializer_class = GetAllPurchaseList_Serializer

    def get(self, request,vendor):
        try:
            vendor=PurchaseOrder.objects.get(id=vendor)
            serializer = self.serializer_class(vendor)
            return Response({
                'message': 'Successful',
                'Result': serializer.data,
                'HasError': False,
                'status': 200
            })
        except PurchaseOrder.DoesNotExist as e:
            return Response({
                'message': 'Vendor Not Found',
                'Result': False,
                'HasError': True,
                'status': 400
            })