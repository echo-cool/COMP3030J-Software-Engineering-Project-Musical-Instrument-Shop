# Generated by Django 4.0.2 on 2022-04-05 06:29

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('main_image', models.ImageField(default='default.png', null=True, upload_to='uploads/category/image/')),
                ('description', models.CharField(max_length=500)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Instrument',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=200)),
                ('old_price', models.FloatField(default=0, max_length=200)),
                ('price', models.FloatField(default=0, max_length=200)),
                ('details', models.TextField(default='', max_length=3000)),
                ('image', models.ImageField(null=True, upload_to='uploads/instrument/image/')),
                ('image1', models.ImageField(default='default.jpg', null=True, upload_to='uploads/instrument/image/')),
                ('image2', models.ImageField(default='default.jpg', null=True, upload_to='uploads/instrument/image/')),
                ('image3', models.ImageField(default='default.jpg', null=True, upload_to='uploads/instrument/image/')),
                ('image4', models.ImageField(default='default.jpg', null=True, upload_to='uploads/instrument/image/')),
                ('object_3d', models.FileField(blank=True, null=True, upload_to='uploads/instrument/obj/')),
                ('object_mtl', models.FileField(blank=True, null=True, upload_to='uploads/instrument/mtl/')),
                ('object_gltf', models.FileField(blank=True, null=True, upload_to='uploads/instrument/gltf/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='shop.category')),
                ('posted_by', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.IntegerField(default=0)),
                ('name', models.CharField(default='', max_length=20, null=True)),
                ('last_name', models.CharField(default='', max_length=20)),
                ('full_address', models.CharField(default='', max_length=200)),
                ('city', models.CharField(default='', max_length=20)),
                ('postal_code', models.CharField(default='', max_length=50)),
                ('country', models.CharField(default='', max_length=200)),
                ('telephone', models.CharField(default='(000)000-0000', max_length=200)),
                ('payment', models.CharField(default='', max_length=20)),
                ('shipping', models.CharField(default='', max_length=20)),
                ('quantity', models.PositiveIntegerField(default=1)),
                ('subtotal', models.FloatField(default=0)),
                ('newsletter', models.BooleanField(default=False)),
                ('shopper_confirmed', models.BooleanField(default=False)),
                ('delivery_confirmed', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('instrument', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='shop.instrument')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Wishlist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('instrument', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='shop.instrument')),
                ('user', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.PositiveIntegerField(default=5, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(0)])),
                ('title', models.TextField(blank=True, null=True)),
                ('review_text', models.TextField(null=True)),
                ('file_upload', models.ImageField(blank=True, default='default.jpg', null=True, upload_to='uploads/review/image/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('instrument', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='shop.instrument')),
                ('order', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='shop.order')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default='default.jpg', upload_to='uploads/avatar/image/')),
                ('phone', models.CharField(max_length=20, unique=True)),
                ('address', models.CharField(max_length=20, unique=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='InstrumentDetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('details', models.TextField(null=True)),
                ('instrument', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='shop.instrument')),
            ],
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('instrument', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='shop.instrument')),
                ('user', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Activation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('code', models.CharField(max_length=20, unique=True)),
                ('email', models.EmailField(blank=True, max_length=254)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
