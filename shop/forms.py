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
    main_image = forms.ImageField(required=False, upload_to='uploads/reviews/image/')


