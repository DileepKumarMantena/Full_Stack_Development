from rest_framework import generics, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.utils import timezone
from ..models import PurchaseOrder

class AcknowledgePurchaseOrderApi(generics.GenericAPIView):
    def post(self, request, id):
        try:
            purchase_order = get_object_or_404(PurchaseOrder, pk=id)
            purchase_order.acknowledgment_date = timezone.now()
            purchase_order.save()

            # Trigger recalculation of average_response_time
            vendor = purchase_order.vendor
            # Calculate new average_response_time and update vendor's field

            return Response({'message': 'Purchase order acknowledged successfully.'}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'message': 'Failed to acknowledge purchase order.'}, status=status.HTTP_400_BAD_REQUEST)
