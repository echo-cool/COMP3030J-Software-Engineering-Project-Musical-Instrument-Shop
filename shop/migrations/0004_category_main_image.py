# Generated by Django 4.0.2 on 2022-03-12 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_alter_review_order_alter_review_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='main_image',
            field=models.ImageField(default='default.png', null=True, upload_to='uploads/category/image/'),
        ),
    ]
