# your_app/tasks.py

from background_task import background
from .models import TimeUnit

@background(schedule=60)  # Schedule to run after 60 seconds
def create_time_unit_after_delay(unit, value, medicine_name):
    if unit == 'm':  # Only if unit is 'minutes'
        TimeUnit.objects.create(unit=unit, value=value, medicine_name=medicine_name)
