from rest_framework import generics
from rest_framework.response import Response
from ..models import Vendor_Model
from ..serializers import GetAllVendorsList_Serializer

class GetVendorPerformanceApi(generics.GenericAPIView):
    serializer_class = GetAllVendorsList_Serializer

    def get(self, request, id, *args, **kwargs):
        try:
            vendor=Vendor_Model.objects.get(id=id)
            serializer = self.serializer_class(vendor)
            return Response({'Message': 'Successful',
                             'Result': serializer.data,
                             'HasError': False,
                             'Status': 200})
        except Exception as e:
            return Response({'Message': 'Fail',
                             'Result': [],
                             'HasError': True,
                             'Status': 400})
