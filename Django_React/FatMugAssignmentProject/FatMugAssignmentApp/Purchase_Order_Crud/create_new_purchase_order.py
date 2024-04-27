from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import CreateNeWPurchaseOrder_Serializer
from rest_framework.parsers import MultiPartParser

@parser_classes((MultiPartParser,))
class CreateNewPurchaseOrderApi(generics.GenericAPIView):
    serializer_class = CreateNeWPurchaseOrder_Serializer

    def post(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            user = serializer.save()
            return Response({
                'message': 'The Purchase Order is Been Successfully Created',
                'Result': CreateNeWPurchaseOrder_Serializer(user).data,
                'HasError': False,
                'status': 200
            })
        except Exception as e:
            return Response({
                'message': 'The Vendor is Not Been Created ',
                'Result': [],
                'HasError': True,
                'status': 400
            })