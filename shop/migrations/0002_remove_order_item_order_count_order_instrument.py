# Generated by Django 4.0.2 on 2022-03-11 08:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='Item',
        ),
        migrations.AddField(
            model_name='order',
            name='count',
            field=models.PositiveIntegerField(default=1),
        ),
        migrations.AddField(
            model_name='order',
            name='instrument',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='shop.instrument'),
        ),
    ]
