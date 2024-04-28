from django.urls import path,include
from .views import *

# Vendor CRUD URLs
vendor_urls = [
    path('CreatingNewVendor/', CreateNewvendorApi.as_view()),
    path('GetAllVendorsListApi/', GetAllVendorsListApi.as_view()),
    path('GetVendorsDetailsById/<int:id>/', GetVendorsDetailsById.as_view()),
    path('UpdateVendorsDetailsById/<int:id>/', UpdateVendorsDetailsById.as_view()),
    path('DeleteVendorsDetails/<int:id>/', DeleteVendorsDetails.as_view()),
    path('GetVendorPerformanceApi<int:id>/',GetVendorPerformanceApi.as_view())
]

# Purchase Order CRUD URLs
purchase_order_urls = [
    path('CreateNewPurchaseOrderApi/', CreateNewPurchaseOrderApi.as_view()),
    path('GetPurchaseDetailsById/<int:id>/',GetPurchaseDetailsById.as_view()),
    path('GetPurchaseDetailsByVendorId/<int:vendor>/',GetPurchaseDetailsByVendorId.as_view()),
    path('DeletePurchaseOrderDetails/<int:id>/',DeletePurchaseOrderDetails.as_view()),
    path('UpdatePurchaseOrdersById<int:id>/',UpdatePurchaseOrdersById.as_view()),
    path('api/purchase_orders/<int:id>/acknowledge', AcknowledgePurchaseOrderApi.as_view()),
]

urlpatterns = [
    # Vendor CRUD URLs
    path('vendors/', include(vendor_urls)),
    
    # Purchase Order CRUD URLs
    path('purchase-orders/', include(purchase_order_urls)),
]
