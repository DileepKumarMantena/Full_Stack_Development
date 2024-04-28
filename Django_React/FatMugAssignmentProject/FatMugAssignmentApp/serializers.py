
from django.apps import apps
from rest_framework import serializers

from .models import *

class CreateNewVendor_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor_Model
        fields = "__all__"

    def create(self, validated_data):
        user = Vendor_Model.objects.create(name=validated_data['name'],
                                        contact_details=validated_data['contact_details'],
                                        address=validated_data['address'],
                                        vendor_code=validated_data['vendor_code'], on_time_delivery_rate=validated_data['on_time_delivery_rate'],quality_rating_avg=validated_data['quality_rating_avg'],average_response_time=validated_data['average_response_time'],fulfillment_rate=validated_data['fulfillment_rate'])

        user.save()
        return user

class GetAllVendorsList_Serializer(serializers.ModelSerializer):
        class Meta:
            model = Vendor_Model
            fields = "__all__"


####### Purchase Order Serializers

class CreateNeWPurchaseOrder_Serializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseOrder
        fields = "__all__"

    def create(self, validated_data):
        user = PurchaseOrder.objects.create(po_number=validated_data['po_number'], vendor=validated_data['vendor'],
                                          order_date=validated_data['order_date'], delivery_date=validated_data['delivery_date'],items=validated_data['items'],quantity=validated_data['quantity'],status=validated_data['status'],quality_rating=validated_data['quality_rating'],issue_date=validated_data['issue_date'],acknowledgment_date=validated_data['acknowledgment_date'])

        user.save()     
        return user
    
class GetAllPurchaseList_Serializer(serializers.ModelSerializer):
        class Meta:
            model = PurchaseOrder
            fields = "__all__"