# Generated by Django 5.0.2 on 2024-07-05 11:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dasapp', '0002_remove_addpatient_fee_doctorreg_fee'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='prescription',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='recommendedtest',
        ),
    ]