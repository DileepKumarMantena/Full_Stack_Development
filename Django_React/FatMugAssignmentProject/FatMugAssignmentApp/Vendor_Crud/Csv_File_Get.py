import csv
from rest_framework import generics, parsers
from rest_framework.response import Response
from ..serializers import GetStudents_Serializer
from ..models import Student

class GetStudentDetails(generics.GenericAPIView):
    serializer_class = GetStudents_Serializer
    parser_classes = [parsers.MultiPartParser]

    def get(self,request, *args, **kwargs):
        try:
            students = []
            with open('C:/Users/user/Downloads/Projects/Mine/Full_Stack_Development/Django_React/students.csv', newline='') as csvfile:
                reader = csv.DictReader(csvfile)
                for row in reader:
                    students.append(row)
            serializer = self.get_serializer(data=students, many=True)
            serializer.is_valid(raise_exception=True)
            return Response({
                'Message': 'Successful',
                'Result': serializer.data,
                'HasError': False,
                'Status': 200
            })

        except Exception as e:
            return Response({
                'Message': 'Fail',
                'Result': [],
                'HasError': True,
                'Status': 400
            })
