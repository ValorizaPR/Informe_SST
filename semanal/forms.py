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
    def __init__(self, *args, **kwargs):
        super(FormInforme, self).__init__(*args, **kwargs)
        for field in self.fields:
            if self.fields[field] != self.fields['tipo_incapacidad'] and \
            self.fields[field] != self.fields['tipo_causas_epp'] and \
            self.fields[field] != self.fields['causa_epp_1'] and \
            self.fields[field] != self.fields['causa_epp_2'] and \
            self.fields[field] != self.fields['causa_epp_3'] and \
            self.fields[field] != self.fields['causa_epp_4'] and \
            self.fields[field] != self.fields['causa_epp_5'] and \
            self.fields[field] != self.fields['accion_epp_1'] and \
            self.fields[field] != self.fields['accion_epp_2'] and \
            self.fields[field] != self.fields['accion_epp_3'] and \
            self.fields[field] != self.fields['accion_epp_4'] and \
            self.fields[field] != self.fields['accion_epp_5']:
                self.fields[field].widget.attrs.update({
                    'class': 'form-control'})

            if self.fields['evidencia_epp']:
                self.fields['evidencia_epp'].widget.attrs.update({
                'class': 'form-control-file'})

    class Meta:
        model   = Informe
        fields  = '__all__'
        exclude = ['usuario', 'fecha_elaboracion']
        widgets = {
            'desde': DateInput(),
            'hasta': DateInput(),
            'fecha_ejecucion_epp_1': DateInput(),
            'fecha_ejecucion_epp_2': DateInput(),
            'fecha_ejecucion_epp_3': DateInput(),
            'fecha_ejecucion_epp_4': DateInput(),
            'fecha_ejecucion_epp_5': DateInput(),
            'descripcion_hallazgo_epp': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del hallazgo'}),
            'no_conformidad_epp': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las causas de la no conformidad'}),
            'acciones_ejecutar_epp': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las acciones a ejecutar'}),
        }
