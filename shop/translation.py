# from django.contrib import admin
# from modeltranslation.admin import TranslationAdmin
# from modeltranslation.translator import translator, TranslationOptions
# from .models import Instrument


# class InstrumentTranslationOptions(TranslationOptions):
#     fallback_languages = {'default': ('en',)}
#     fields = ('name', 'details', 'ex_detail', 'ad_info')
#
# class InstrumentAdmin(TranslationAdmin):
#     list_display = ('name', 'price', 'image', 'object_3d', 'object_mtl', 'posted_by', 'category', 'created_at')
#
#
# translator.register(Instrument, InstrumentTranslationOptions)
# admin.site.register(Instrument, InstrumentAdmin)