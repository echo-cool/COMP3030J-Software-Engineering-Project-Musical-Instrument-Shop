from django import forms
from django.forms import widgets

from shop.models import Order, Instrument, Review


class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = "__all__"


class InstrumentForm(forms.ModelForm):
    class Meta:
        model = Instrument
        fields = "__all__"


class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = "__all__"


class SearchForm(forms.Form):
    search_name = forms.CharField(max_length=20, widget=widgets.TextInput(
        {'placeholder': '"Search over 10.000 products', }))

# type=CharField(min_length=1,max_length=4,required=True,widget=Select(choices=(('0','P'),('1','M'))),)
