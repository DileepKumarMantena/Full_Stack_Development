from django.urls import path
from .views import *

urlpatterns = [
    path('LibrarianRegistrationApi/', LibrarianRegistrationApi.as_view()),
    path('LibraryLoginApi/', LibraryLoginApi.as_view()),
    path('BokksPostApi/', BokksPostApi.as_view()),
    path('BooksUpdateApi/<int:id>/', BooksUpdateApi.as_view()),
    path('DeleteBookApi/<int:id>/', DeleteBookApi.as_view()),
    path('MembersRegistrationApi/', MembersRegistrationApi.as_view()),
    path('MemberUpdateApi/<int:id>/', MemberUpdateApi.as_view()),
    path('MembersGetApi/', MembersGetApi.as_view()),
    path('DeleteMember/<int:id>/', DeleteMember.as_view()),
    path('BookGetApi/', BookGetApi.as_view()),
    path('BooksUpdateStatusApi/<int:id>/', BooksUpdateStatusApi.as_view()),
    path('DeleteMemberApi/<int:id>/', DeleteMemberApi.as_view()),


]