from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import GetAllVendorsList_Serializer
from ..models import Vendor_Model

from rest_framework.parsers import MultiPartParser

@parser_classes((MultiPartParser,))
class GetAllVendorsListApi(generics.GenericAPIView):
    serializer_class = GetAllVendorsList_Serializer

    def get(self, request, *args, **kwargs):
        try:
            data = Vendor_Model.objects.all()
            serializer_class = GetAllVendorsList_Serializer(data, many=True)
            return Response({'Message': 'Successful',
                             'Result': serializer_class.data,
                             'HasError': False,
                             'Status': 200})

        except Exception as e:
            return Response({'Message': 'Fail',
                             'Result': [],
                             'HasError': True,
                             'Status': 400})