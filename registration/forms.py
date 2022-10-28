from django.forms import ModelForm, TextInput
from django import forms


class RegistrationForm(forms.Form):
    number = forms.CharField(max_length=30, widget=forms.TextInput(
        attrs={
            'placeholder': 'Телефон',
            'class': 'number',
            # 'type': 'number',
            'autocomplete': 'off'
        }
    ))
    password = forms.CharField(max_length=50, widget=forms.TextInput(
        attrs={
            'placeholder': 'Пароль',
            'class': 'password',
            'type': 'password'
        }
    ))
    confirm_password = forms.CharField(max_length=50, widget=forms.TextInput(
        attrs={
            'placeholder': 'Подтверждение пароля',
            'class': 'confirm-password',
            'type': 'password'
        }
    ))
    first_name = forms.CharField(max_length=50, widget=forms.TextInput(
        attrs={
            'placeholder': 'Имя',
            'class': 'first-name',
            'type': 'first-name'
        }
    ))
    second_name = forms.CharField(max_length=50, widget=forms.TextInput(
        attrs={
            'placeholder': 'Фамилия',
            'class': 'second-name',
            'type': 'second-name'
        }
    ))
    age = forms.CharField(max_length=50, widget=forms.TextInput(
        attrs={
            'placeholder': 'Возраст',
            'class': 'age',
            'type': 'age'
        }
    ))


class EnterForm(forms.Form):
    number = forms.CharField(max_length=30, widget=forms.TextInput(
        attrs={
            'placeholder': 'Телефон',
            'class': 'number',
            'autocomplete': 'off'
        }
    ))
    password = forms.CharField(max_length=50, widget=forms.TextInput(
        attrs={
            'placeholder': 'Пароль',
            'class': 'password',
            'type': 'password'
        }
    ))
    confirm_password = forms.CharField(max_length=50, widget=forms.TextInput(
        attrs={
            'placeholder': 'Подтверждение пароля',
            'class': 'confirm-password',
            'type': 'password'
        }
    ))

