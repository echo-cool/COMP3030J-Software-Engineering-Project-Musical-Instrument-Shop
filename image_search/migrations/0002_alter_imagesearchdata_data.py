# Generated by Django 4.0.2 on 2022-04-18 09:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('image_search', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='imagesearchdata',
            name='data',
            field=models.JSONField(blank=True, null=True),
        ),
    ]
