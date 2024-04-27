from django.shortcuts import render

# Create your views here.

#Vendor  Crud Views

from .Vendor_Crud.create_new_vendor import CreateNewvendorApi
from .Vendor_Crud.get_all_vendors_list import GetAllVendorsListApi
from .Vendor_Crud.get_vendors_details_by_id import GetVendorsDetailsById
from .Vendor_Crud.update_vendors_details import UpdateVendorsDetailsById
from .Vendor_Crud.delete_vendors_details import DeleteVendorsDetails

CreateNewvendorApi()
GetAllVendorsListApi()
GetVendorsDetailsById()
UpdateVendorsDetailsById()
DeleteVendorsDetails()

#Purchase Order Crud Views

from .Purchase_Order_Crud.create_new_purchase_order import CreateNewPurchaseOrderApi

CreateNewPurchaseOrderApi()