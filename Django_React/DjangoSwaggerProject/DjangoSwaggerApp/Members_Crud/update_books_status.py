from rest_framework import generics
from rest_framework.decorators import parser_classes
from rest_framework.response import Response
from ..serializers import BookStatusUpdateSerializer, BookPostSerializer
from ..models import BookModel


class BooksUpdateStatusApi(generics.GenericAPIView):
    serializer_class = BookStatusUpdateSerializer

    def put(self, request, *args, id):
        try:
            userdata = BookModel.objects.get(id=id)

            s = BookStatusUpdateSerializer(userdata, data=request.data)
            s.is_valid(raise_exception=True)
            s.save()

            return Response({
                'message': 'Successful',
                'Result': True,
                'HasError': False,
                'status': 200
            })
        except BookModel.DoesNotExist as e:
            return Response({
                'message': 'Not Updated',
                'Result': False,
                'HasError': True,
                'status': 400
            })