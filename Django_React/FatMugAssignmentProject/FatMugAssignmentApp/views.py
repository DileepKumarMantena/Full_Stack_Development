from django.shortcuts import render

# Create your views here.

#Vendor  Crud Views

from .Vendor_Crud.create_new_vendor import CreateNewvendorApi
from .Vendor_Crud.get_all_vendors_list import GetAllVendorsListApi
from .Vendor_Crud.get_vendors_details_by_id import GetVendorsDetailsById
from .Vendor_Crud.update_vendors_details import UpdateVendorsDetailsById
from .Vendor_Crud.delete_vendors_details import DeleteVendorsDetails
from .Vendor_Crud.get_vendor_performance import GetVendorPerformanceApi



CreateNewvendorApi()
GetAllVendorsListApi()
GetVendorsDetailsById()
UpdateVendorsDetailsById()
DeleteVendorsDetails()
GetVendorPerformanceApi()

#Purchase Order Crud Views

from .Purchase_Order_Crud.create_new_purchase_order import CreateNewPurchaseOrderApi
from .Purchase_Order_Crud.get_purchase_list_by_id import GetPurchaseDetailsById
from .Purchase_Order_Crud.get_all_purchase_list_by_vendor_id import GetPurchaseDetailsByVendorId
from .Purchase_Order_Crud.delete_purchase_details import DeletePurchaseOrderDetails
from .Purchase_Order_Crud.update_update_orders_details import UpdatePurchaseOrdersById
from .Purchase_Order_Crud.acknowledge_purchase_order import AcknowledgePurchaseOrderApi


CreateNewPurchaseOrderApi()
GetPurchaseDetailsById()
GetPurchaseDetailsByVendorId()
DeletePurchaseOrderDetails()
UpdatePurchaseOrdersById()
AcknowledgePurchaseOrderApi()