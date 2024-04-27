from django.db import models
from django.contrib.postgres.fields import JSONField

class Vendor_Model(models.Model):
    name = models.CharField(max_length=255)
    contact_details = models.TextField()
    address = models.TextField()
    vendor_code = models.CharField(max_length=50, unique=True)
    on_time_delivery_rate = models.FloatField()
    quality_rating_avg = models.FloatField()
    average_response_time = models.FloatField()
    fulfillment_rate = models.FloatField()
    objects = models.Manager

    class Meta:
        db_table = "Vendor_Table"

class PurchaseOrder(models.Model):
    po_number = models.CharField(max_length=50, unique=True)
    vendor = models.ForeignKey('Vendor_Model', on_delete=models.CASCADE)
    order_date = models.DateTimeField()
    delivery_date = models.DateTimeField()
    items = models.JSONField()
    quantity = models.IntegerField()
    status = models.CharField(max_length=50)
    quality_rating = models.FloatField(null=True, blank=True)
    issue_date = models.DateTimeField()
    acknowledgment_date = models.DateTimeField(null=True, blank=True)
    objects = models.Manager

    class Meta:
        db_table = "PurchaseOrder_Table"


class HistoricalPerformance(models.Model):
    vendor = models.ForeignKey('Vendor_Model', on_delete=models.CASCADE)
    date = models.DateTimeField()
    on_time_delivery_rate = models.FloatField()
    quality_rating_avg = models.FloatField()
    average_response_time = models.FloatField()
    fulfillment_rate = models.FloatField()
    objects = models.Manager

    class Meta:
        db_table = "HistoricalPerformance_Table"

    