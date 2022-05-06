from modeltranslation.translator import translator, TranslationOptions
from .models import Instrument


class InstrumentTranslationOptions(TranslationOptions):
    fields = ('name', 'details', 'ex_detail', 'ad_info')


translator.register(Instrument, InstrumentTranslationOptions)
