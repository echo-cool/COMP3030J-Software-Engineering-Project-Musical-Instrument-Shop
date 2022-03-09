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
