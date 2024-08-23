from django.db import models

class TodoItem(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)

    class Meta:
        db_table = "To_Do_Table"

    
class TimeUnit(models.Model):
    TIME_CHOICES = [
        ('s', 'Seconds'),
        ('m', 'Minutes'),
        ('h', 'Hours'),
    ]

    unit = models.CharField(max_length=1, choices=TIME_CHOICES, default='m')
    value = models.PositiveIntegerField()
    medicine_name=models.CharField(max_length=250)

    class Meta:
        db_table = "Time_Unit_Table"