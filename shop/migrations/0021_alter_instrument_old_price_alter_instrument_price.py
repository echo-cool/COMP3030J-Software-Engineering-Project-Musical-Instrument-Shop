# Generated by Django 4.0.2 on 2022-06-04 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0020_disabledarea'),
    ]

    operations = [
        migrations.AlterField(
            model_name='instrument',
            name='old_price',
            field=models.FloatField(default=100, max_length=200),
        ),
        migrations.AlterField(
            model_name='instrument',
            name='price',
            field=models.FloatField(default=100, max_length=200),
        ),
    ]
