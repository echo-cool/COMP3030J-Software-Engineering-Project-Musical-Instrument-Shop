# Generated by Django 4.0.2 on 2022-04-13 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_instrument_ad_info_instrument_ex_detail'),
    ]

    operations = [
        migrations.AddField(
            model_name='instrument',
            name='chinese',
            field=models.BooleanField(default=False),
        ),
    ]
