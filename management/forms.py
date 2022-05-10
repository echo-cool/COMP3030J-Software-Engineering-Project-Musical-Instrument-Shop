from django import forms
from django.forms import widgets

import blog
import shop
from blog.models import Post
from shop.models import Order, Instrument, Review, Cart, Wishlist, OrderItem


class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = (
            "user",
            "first_name",
            "last_name",
            "address",
            "apartment",
            "city",
            "state",
            "country",
            "zip_Code",
            "newsletter"
        )


class OrderItemForm(forms.ModelForm):
    class Meta:
        model = OrderItem
        fields = ('instrument', 'quantity')


class InstrumentForm(forms.ModelForm):
    class Meta:
        model = Instrument
        fields = (
            "name",
            "old_price",
            "price",
            "details",
            "ex_detail",
            "ad_info",
            "chinese",
            "posted_by",
            "category",
        )


class InstrumentWithIForm(forms.ModelForm):
    class Meta:
        model = Instrument
        fields = "__all__"


# class InstrumentForm(forms.Form):
#     image = forms.CharField(max_length=50)
#     image1 = forms.CharField(max_length=50)
#     image2 = forms.CharField(max_length=50)
#     image3 = forms.CharField(max_length=50)
#     image4 = forms.CharField(max_length=50)
#
#     imagereal = forms.FileField()


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


class InstrumentCategoryForm(forms.ModelForm):
    class Meta:
        model = shop.models.Category
        fields = "__all__"


class BlogCategoryForm(forms.ModelForm):
    class Meta:
        model = blog.models.Category
        fields = "__all__"


class SearchForm(forms.Form):
    search_name = forms.CharField(max_length=20, widget=widgets.TextInput(
        {'placeholder': '"Search over 10.000 products', }))

# type=CharField(min_length=1,max_length=4,required=True,widget=Select(choices=(('0','P'),('1','M'))),)
