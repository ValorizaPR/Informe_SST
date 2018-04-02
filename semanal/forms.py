# -*- coding: utf-8 -*-

from django import forms
from .models import Informe

from django.forms.widgets import PasswordInput

"""
Formulario para inicio de sesión en la aplicación
"""
class LoginForm(forms.Form):
    username = forms.CharField(
        max_length=40,
        label="Usuario")
    password = forms.CharField(
        max_length=40,
        widget=PasswordInput(),
        label="Contraseña")

    # Se agregan atributos a los campos del formulario
    def __init__(self, *args, **kwargs):
        super(LoginForm, self).__init__(*args, **kwargs)
        for field in self.fields:
            self.fields[field].widget.attrs.update({'class': 'form-control'})

        self.fields['username'].widget.attrs.update({
            'title': 'Nombre de Usuario',
            'placeholder': 'Usuario'})
        
        self.fields['password'].widget.attrs.update({
            'title': u'Contraseña',
            'placeholder': u'Contraseña'})

"""
Define el tipo 'date' a un input
"""
class DateInput(forms.DateInput):
    input_type = 'date'

"""
Formulario para llenar el informe de SST
"""
class FormInforme(forms.ModelForm):
    class Meta:
        model   = Informe
        fields  = '__all__'
        exclude = ['usuario']
        widgets = {
            'fecha_elaboracion': DateInput(),
            'desde': DateInput(),
            'hasta': DateInput(),
            'fecha_ejecucion_epp_1': DateInput(),
            'fecha_ejecucion_epp_2': DateInput(),
            'fecha_ejecucion_epp_3': DateInput(),
            'fecha_ejecucion_epp_4': DateInput(),
            'fecha_ejecucion_epp_5': DateInput()
        }
