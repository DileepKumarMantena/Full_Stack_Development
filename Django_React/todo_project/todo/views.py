# views.py

import threading
from time import sleep
from django.http import JsonResponse
from .models import TimeUnit
from .serializer import TimeUnitSerializer

def create_time_unit_after_delay(unit, value, medicine_name):
    sleep(60)  # Delay in seconds (1 minute)
    if unit == 'm':  # Only if unit is 'minutes'
        TimeUnit.objects.create(unit=unit, value=value, medicine_name=medicine_name)

@api_view(['POST'])
def create_time_unit(request):
    serializer = TimeUnitSerializer(data=request.data)
    if serializer.is_valid():
        time_unit = serializer.save()

        # Check if unit is 'm' (minutes), then start the background task
        if time_unit.unit == 'm':
            thread = threading.Thread(target=create_time_unit_after_delay, args=(time_unit.unit, time_unit.value, time_unit.medicine_name))
            thread.start()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
