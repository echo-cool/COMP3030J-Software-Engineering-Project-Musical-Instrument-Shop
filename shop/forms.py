# -*- coding: utf-8 -*-
"""
@Time : 3/19/2022 3:57 PM
@Auth : Wang Yuyang
@File : forms.py
@IDE  : PyCharm
"""
from django import forms
from django.forms import ValidationError


class UpdateProfileForm(forms.Form):
    username = forms.CharField(max_length=50, required=False)
    email = forms.EmailField(required=False)
    phone = forms.CharField(max_length=20, required=False)
    address = forms.CharField(max_length=100, required=False)


class ReviewForm(forms.Form):
    title = forms.CharField(max_length=500, required=True)
    content = forms.CharField(max_length=500, required=True)
    rating = forms.IntegerField(required=True, widget=forms.HiddenInput())
    # main_image = forms.ImageField(required=False)


wordsNotAllowed = ["BJUT", "Beijing University of Technology"]


class CheckoutForm(forms.Form):
    # Saved_Address = forms.Select(choices=[(1, 'China'), (2, 'Ireland'), (3, 'Japan')])
    First_Name = forms.CharField(max_length=50, required=True)
    Last_Name = forms.CharField(max_length=50, required=True)
    Address = forms.CharField(max_length=100, required=True)
    Apartment = forms.CharField(max_length=100, required=True)
    City = forms.CharField(max_length=100, required=True)
    # Country = forms.CharField(max_length=100, required=True)
    # State = forms.CharField(max_length=100, required=True)
    Zip_Code = forms.CharField(max_length=100, required=True)

    def is_valid(self):
        if super().is_valid():
            terms = str(self.cleaned_data.get('Address')).split(" ")
            for i in terms:
                if i in wordsNotAllowed:
                    self.add_error('Address', ValidationError('This area has been disabled by the admin.'))
                    return False
            return True
        return False
