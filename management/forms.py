from django import forms
from django.forms import widgets

from blog.models import Post
from shop.models import Order, Instrument, Review, Cart, Wishlist


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


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = "__all__"


class CartForm(forms.ModelForm):
    class Meta:
        model = Cart
        fields = "__all__"


class WishlistForm(forms.ModelForm):
    class Meta:
        model = Wishlist
        fields = "__all__"


class SearchForm(forms.Form):
    search_name = forms.CharField(max_length=20, widget=widgets.TextInput(
        {'placeholder': '"Search over 10.000 products', }))

# type=CharField(min_length=1,max_length=4,required=True,widget=Select(choices=(('0','P'),('1','M'))),)
