from django.contrib import admin
from django.db import models


# Create your models here.
from shop.models import Instrument


class ImageSearchData(models.Model):
    instrument = models.ForeignKey(Instrument, on_delete=models.CASCADE)
    data = models.JSONField(blank=True, null=True)

    def __str__(self):
        return f"{self.instrument.name} - {self.data}"


@admin.register(ImageSearchData)
class ImageSearchDataAdmin(admin.ModelAdmin):
    list_display = ('id', 'instrument', 'data')
