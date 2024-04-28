from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import CreateNeWPurchaseOrder_Serializer
from ..models import PurchaseOrder
from rest_framework.parsers import MultiPartParser

@parser_classes((MultiPartParser,))

class DeletePurchaseOrderDetails(generics.GenericAPIView):
    serializer_class = CreateNeWPurchaseOrder_Serializer

    def delete(self, request, id, format=None):
        try:
            d = PurchaseOrder.objects.get(id=id)
            d.delete()
            return Response({
                'message': 'Successful Deleted The Vendors Details',
                'Result': True,
                'HasError': False,
                'status': 200
            })
        except PurchaseOrder.DoesNotExist as e:
            return Response({
                'message': 'Unable To Delete Vendors Details',
                'Result': False,
                'HasError': True,
                'status': 400
            })