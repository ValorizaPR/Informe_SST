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
    model = Informe
    #fields = '__all__'
    fields = [
        'empresa',
        'fecha_elaboracion',
        'desde',
        'hasta',
        'acc_laboral',
        'inc_laboral',
        'licencias',
        'memorandos',
        'suspenciones',
        'pregunta',
        'incapacidad',
        'can_incapacidades',
        'tipo_accion_epp',
        'fuente_hallazgo_epp',
        'descripcion_hallazgo_epp',
        'tipos_causas_epp',
        'no_conformidad_epp',
        'causa_epp_1',
        'causa_epp_2',
        'causa_epp_3',
        'causa_epp_4',
        'causa_epp_5',
        'acciones_ejecutar_epp',
        'accion_epp_1',
        'accion_epp_2',
        'accion_epp_3',
        'accion_epp_4',
        'accion_epp_5',
        'fecha_ejecucion_epp_1',
        'fecha_ejecucion_epp_2',
        'fecha_ejecucion_epp_3',
        'fecha_ejecucion_epp_4',
        'fecha_ejecucion_epp_5',
        'evidencia_epp'
    ]

    widgets = {
        'desde': DateInput(),
        'hasta': DateInput(),
        'fecha_ejecucion_epp_1': DateInput(),
        'fecha_ejecucion_epp_2': DateInput(),
        'fecha_ejecucion_epp_3': DateInput(),
        'fecha_ejecucion_epp_4': DateInput(),
        'fecha_ejecucion_epp_5': DateInput()
    }
