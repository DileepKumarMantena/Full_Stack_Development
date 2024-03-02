from django.apps import apps
from rest_framework import serializers

from .models import *

from django.contrib.auth.hashers import make_password


class LibrarianRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = LibrarianModel
        fields = ['id', 'Firstname', 'Lastname', 'Email', 'Username', 'Password', 'MobileNumber']
        extra_kwargs = {'Password': {'write_only': True}, }

    def create(self, validated_data):
        user = LibrarianModel.objects.create(Firstname=validated_data['Firstname'], Lastname=validated_data['Lastname'],
                                             Email=validated_data['Email'], Username=validated_data['Username'],
                                             Password=make_password(validated_data['Password']),
                                             MobileNumber=validated_data['MobileNumber'])

        user.save()
        return user


class LibraryLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = LibrarianModel
        fields = ['Username', 'Password']
        extra_kwargs = {'Password': {'write_only': True}}

    def create(self, validated_data):
        user = LibrarianModel.objects.get(username=validated_data['Username'])
        user.save()
        return user


class BookPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookModel
        fields = "__all__"

    def create(self, validated_data):
        user = BookModel.objects.create(AuthorName=validated_data['AuthorName'],
                                        BookName=validated_data['BookName'],
                                        BookPublishedOn=validated_data['BookPublishedOn'],
                                        BookId=validated_data['BookId'], Status=validated_data['Status'])

        user.save()
        return user


class MemberRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberModel
        fields = "__all__"

    def create(self, validated_data):
        user = MemberModel.objects.create(MemberName=validated_data['MemberName'], MemberId=validated_data['MemberId'],
                                          Gender=validated_data['Gender'], LibraryId=validated_data['LibraryId'])

        user.save()
        return user


class MembersGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberModel
        fields = "__all__"


class BookStatusUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookModel
        fields = ['Status']

    def create(self, validated_data):
        user = BookModel.objects.create(Status=validated_data['Status'])

        user.save()
        return user