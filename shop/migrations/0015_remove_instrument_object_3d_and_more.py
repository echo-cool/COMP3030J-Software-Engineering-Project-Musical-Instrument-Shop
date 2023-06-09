# Generated by Django 4.0.2 on 2022-05-09 06:57

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('shop', '0014_remove_instrument_ad_info_de_de_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='instrument',
            name='object_3d',
        ),
        migrations.RemoveField(
            model_name='instrument',
            name='object_mtl',
        ),
        migrations.AddField(
            model_name='instrument',
            name='color',
            field=models.CharField(choices=[('Red', 'Red'), ('Blue', 'Blue'), ('Brown', 'Brown'), ('White', 'White'), ('Black', 'Black'), ('Other', 'Other')], default='Other', max_length=5),
        ),
        migrations.AddField(
            model_name='instrument',
            name='quantity',
            field=models.IntegerField(default=100, validators=[django.core.validators.MaxValueValidator(99999), django.core.validators.MinValueValidator(1)]),
        ),
        migrations.AlterField(
            model_name='profile',
            name='address',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='phone',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.CreateModel(
            name='CustomModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('screenshots', models.TextField(null=True)),
                ('finish', models.BooleanField(default=False)),
                ('price', models.FloatField(default=0, max_length=200)),
                ('count', models.IntegerField(default=1)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
