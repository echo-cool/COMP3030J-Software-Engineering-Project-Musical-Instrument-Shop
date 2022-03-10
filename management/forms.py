from django import forms

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
    search_name = forms.CharField(max_length=20, placeholder="Search over 10.000 products")
