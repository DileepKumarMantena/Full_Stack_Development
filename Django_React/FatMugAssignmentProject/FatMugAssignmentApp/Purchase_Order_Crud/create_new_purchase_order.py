from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import CreateNeWPurchaseOrder_Serializer
from rest_framework.parsers import MultiPartParser
from rest_framework.exceptions import ValidationError


@parser_classes((MultiPartParser,))
class CreateNewPurchaseOrderApi(generics.GenericAPIView):
    serializer_class = CreateNeWPurchaseOrder_Serializer

    def post(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            user = serializer.save()
            return Response({
            'message': 'The Purchase Order has been successfully created',
            'Result': CreateNeWPurchaseOrder_Serializer(user).data,
            'HasError': False,
            'status': 200
        })
        except ValidationError as e:
            print(e.detail)  # Print validation errors to debug
            return Response({
            'message': 'Validation error occurred',
            'Result': [],
            'HasError': True,
            'status': 400
        })
        except Exception as e:
            print(str(e))  # Print other exceptions for debugging
            return Response({
            'message': 'Failed to create the Purchase Order',
            'Result': [],
            'HasError': True,
            'status': 400
        })