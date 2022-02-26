# Generated by Django 2.2.27 on 2022-02-26 15:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0008_auto_20220226_2300'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='count',
            field=models.PositiveIntegerField(default=1),
        ),
        migrations.AddField(
            model_name='order',
            name='instrument',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='shop.Instrument'),
        ),
        migrations.DeleteModel(
            name='OrderItem',
        ),
    ]