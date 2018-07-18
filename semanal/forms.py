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
            if Informe._meta.get_field(field).get_internal_type() == 'DateField' or \
            Informe._meta.get_field(field).get_internal_type() == 'PositiveSmallIntegerField' or \
            Informe._meta.get_field(field).get_internal_type() == 'BigIntegerField' or \
            Informe._meta.get_field(field).get_internal_type() == 'TextField':
                self.fields[field].widget.attrs.update({
                    'class': 'form-control'})

            if Informe._meta.get_field(field).get_internal_type() == 'FileField':
                self.fields[field].widget.attrs.update({
                    'class': 'form-control-file hideFileTex'})

            # Atributo temporal mientras se hacen dinámicas las investigaciones
            if self.fields['acc_laboral'] or self.fields['inc_laboral']:
                self.fields['acc_laboral'].widget.attrs.update({
                    'max': '3'})
                self.fields['inc_laboral'].widget.attrs.update({
                    'max': '3'})

            if self.fields[field] == self.fields['empresa'] or \
            self.fields[field] == self.fields['obra'] or \
            self.fields[field] == self.fields['pregunta_incapacidad'] or \
            self.fields[field] == self.fields['tipo_accion_epp'] or \
            self.fields[field] == self.fields['tipo_accion_OyA'] or \
            self.fields[field] == self.fields['tipo_accion_act1'] or \
            self.fields[field] == self.fields['tipo_accion_act2'] or \
            self.fields[field] == self.fields['tipo_accion_act3'] or \
            self.fields[field] == self.fields['tipo_accion_act4'] or \
            self.fields[field] == self.fields['tipo_accion_act5'] or \
            self.fields[field] == self.fields['tipo_accion_act6'] or \
            self.fields[field] == self.fields['tipo_accion_act7'] or \
            self.fields[field] == self.fields['tipo_accion_act8'] or \
            self.fields[field] == self.fields['tipo_accion_act9'] or \
            self.fields[field] == self.fields['tipo_accion_act10'] or \
            self.fields[field] == self.fields['tipo_accion_act11'] or \
            self.fields[field] == self.fields['tipo_accion_act12'] or \
            self.fields[field] == self.fields['fuente_hallazgo_epp'] or \
            self.fields[field] == self.fields['fuente_hallazgo_OyA'] or \
            self.fields[field] == self.fields['fuente_hallazgo_act1'] or \
            self.fields[field] == self.fields['fuente_hallazgo_act2'] or \
            self.fields[field] == self.fields['fuente_hallazgo_act3'] or \
            self.fields[field] == self.fields['fuente_hallazgo_act4'] or \
            self.fields[field] == self.fields['fuente_hallazgo_act5'] or \
            self.fields[field] == self.fields['fuente_hallazgo_act6'] or \
            self.fields[field] == self.fields['fuente_hallazgo_act7'] or \
            self.fields[field] == self.fields['fuente_hallazgo_act8'] or \
            self.fields[field] == self.fields['fuente_hallazgo_act9'] or \
            self.fields[field] == self.fields['fuente_hallazgo_act10'] or \
            self.fields[field] == self.fields['fuente_hallazgo_act11'] or \
            self.fields[field] == self.fields['fuente_hallazgo_act12'] or \
            self.fields[field] == self.fields['tipo_actividad1'] or \
            self.fields[field] == self.fields['tipo_actividad2'] or \
            self.fields[field] == self.fields['tipo_actividad3'] or \
            self.fields[field] == self.fields['tipo_actividad4'] or \
            self.fields[field] == self.fields['tipo_actividad5'] or \
            self.fields[field] == self.fields['tipo_actividad6'] or \
            self.fields[field] == self.fields['tipo_actividad7'] or \
            self.fields[field] == self.fields['tipo_actividad8'] or \
            self.fields[field] == self.fields['tipo_actividad9'] or \
            self.fields[field] == self.fields['tipo_actividad10'] or \
            self.fields[field] == self.fields['tipo_actividad11'] or \
            self.fields[field] == self.fields['tipo_actividad12'] or \
            self.fields[field] == self.fields['criterio1'] or \
            self.fields[field] == self.fields['criterio2'] or \
            self.fields[field] == self.fields['criterio3'] or \
            self.fields[field] == self.fields['criterio4'] or \
            self.fields[field] == self.fields['criterio5'] or \
            self.fields[field] == self.fields['tipo_cambio1'] or \
            self.fields[field] == self.fields['tipo_cambio2'] or \
            self.fields[field] == self.fields['tipo_cambio3'] or \
            self.fields[field] == self.fields['tipo_cambio4'] or \
            self.fields[field] == self.fields['tipo_cambio5'] or \
            self.fields[field] == self.fields['responsable_cambio1'] or \
            self.fields[field] == self.fields['responsable_cambio2'] or \
            self.fields[field] == self.fields['responsable_cambio3'] or \
            self.fields[field] == self.fields['responsable_cambio4'] or \
            self.fields[field] == self.fields['responsable_cambio5']:
                self.fields[field].widget.attrs.update({
                'class': 'custom-select'})
            elif self.fields[field] == self.fields['nom_acc_laboral1'] or \
            self.fields[field] == self.fields['nom_acc_laboral2'] or \
            self.fields[field] == self.fields['nom_acc_laboral3'] or \
            self.fields[field] == self.fields['nom_inc_laboral1'] or \
            self.fields[field] == self.fields['nom_inc_laboral2'] or \
            self.fields[field] == self.fields['nom_inc_laboral3']:
                self.fields[field].widget.attrs.update({
                'class': 'form-control'})

    class Meta:
        model   = Informe
        fields  = '__all__'
        exclude = ['usuario', 'fecha_elaboracion']
        widgets = {
            'desde': DateInput(),
            'hasta': DateInput(),
            'fecha_acc_laboral1': DateInput(),
            'fecha_acc_laboral2': DateInput(),
            'fecha_acc_laboral3': DateInput(),
            'fecha_inc_laboral1': DateInput(),
            'fecha_inc_laboral2': DateInput(),
            'fecha_inc_laboral3': DateInput(),
            'fecha_ejecucion_epp_1': DateInput(),
            'fecha_ejecucion_epp_2': DateInput(),
            'fecha_ejecucion_epp_3': DateInput(),
            'fecha_ejecucion_epp_4': DateInput(),
            'fecha_ejecucion_epp_5': DateInput(),
            'fecha_ejecucion_OyA_1': DateInput(),
            'fecha_ejecucion_OyA_2': DateInput(),
            'fecha_ejecucion_OyA_3': DateInput(),
            'fecha_ejecucion_OyA_4': DateInput(),
            'fecha_ejecucion_OyA_5': DateInput(),
            'fecha_ejecucion_act1_1': DateInput(),
            'fecha_ejecucion_act1_2': DateInput(),
            'fecha_ejecucion_act1_3': DateInput(),
            'fecha_ejecucion_act1_4': DateInput(),
            'fecha_ejecucion_act1_5': DateInput(),
            'fecha_ejecucion_act2_1': DateInput(),
            'fecha_ejecucion_act2_2': DateInput(),
            'fecha_ejecucion_act2_3': DateInput(),
            'fecha_ejecucion_act2_4': DateInput(),
            'fecha_ejecucion_act2_5': DateInput(),
            'fecha_ejecucion_act3_1': DateInput(),
            'fecha_ejecucion_act3_2': DateInput(),
            'fecha_ejecucion_act3_3': DateInput(),
            'fecha_ejecucion_act3_4': DateInput(),
            'fecha_ejecucion_act3_5': DateInput(),
            'fecha_ejecucion_act4_1': DateInput(),
            'fecha_ejecucion_act4_2': DateInput(),
            'fecha_ejecucion_act4_3': DateInput(),
            'fecha_ejecucion_act4_4': DateInput(),
            'fecha_ejecucion_act4_5': DateInput(),
            'fecha_ejecucion_act5_1': DateInput(),
            'fecha_ejecucion_act5_2': DateInput(),
            'fecha_ejecucion_act5_3': DateInput(),
            'fecha_ejecucion_act5_4': DateInput(),
            'fecha_ejecucion_act5_5': DateInput(),
            'fecha_ejecucion_act6_1': DateInput(),
            'fecha_ejecucion_act6_2': DateInput(),
            'fecha_ejecucion_act6_3': DateInput(),
            'fecha_ejecucion_act6_4': DateInput(),
            'fecha_ejecucion_act6_5': DateInput(),
            'fecha_ejecucion_act7_1': DateInput(),
            'fecha_ejecucion_act7_2': DateInput(),
            'fecha_ejecucion_act7_3': DateInput(),
            'fecha_ejecucion_act7_4': DateInput(),
            'fecha_ejecucion_act7_5': DateInput(),
            'fecha_ejecucion_act8_1': DateInput(),
            'fecha_ejecucion_act8_2': DateInput(),
            'fecha_ejecucion_act8_3': DateInput(),
            'fecha_ejecucion_act8_4': DateInput(),
            'fecha_ejecucion_act8_5': DateInput(),
            'fecha_ejecucion_act9_1': DateInput(),
            'fecha_ejecucion_act9_2': DateInput(),
            'fecha_ejecucion_act9_3': DateInput(),
            'fecha_ejecucion_act9_4': DateInput(),
            'fecha_ejecucion_act9_5': DateInput(),
            'fecha_ejecucion_act10_1': DateInput(),
            'fecha_ejecucion_act10_2': DateInput(),
            'fecha_ejecucion_act10_3': DateInput(),
            'fecha_ejecucion_act10_4': DateInput(),
            'fecha_ejecucion_act10_5': DateInput(),
            'fecha_ejecucion_act11_1': DateInput(),
            'fecha_ejecucion_act11_2': DateInput(),
            'fecha_ejecucion_act11_3': DateInput(),
            'fecha_ejecucion_act11_4': DateInput(),
            'fecha_ejecucion_act11_5': DateInput(),
            'fecha_ejecucion_act12_1': DateInput(),
            'fecha_ejecucion_act12_2': DateInput(),
            'fecha_ejecucion_act12_3': DateInput(),
            'fecha_ejecucion_act12_4': DateInput(),
            'fecha_ejecucion_act12_5': DateInput(),
            'descripcion_hallazgo_epp': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del hallazgo'}),
            'no_conformidad_epp': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las causas de la no conformidad'}),
            'acciones_ejecutar_epp': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las acciones a ejecutar'}),
            'descripcion_hallazgo_OyA': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del hallazgo'}),
            'no_conformidad_OyA': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las causas de la no conformidad'}),
            'acciones_ejecutar_OyA': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las acciones a ejecutar'}),
            'descripcion_hallazgo_act1': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del hallazgo'}),
            'no_conformidad_act1': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las causas de la no conformidad'}),
            'acciones_ejecutar_act1': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las acciones a ejecutar'}),
            'descripcion_hallazgo_act2': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del hallazgo'}),
            'no_conformidad_act2': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las causas de la no conformidad'}),
            'acciones_ejecutar_act2': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las acciones a ejecutar'}),
            'descripcion_hallazgo_act3': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del hallazgo'}),
            'no_conformidad_act3': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las causas de la no conformidad'}),
            'acciones_ejecutar_act3': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las acciones a ejecutar'}),
            'descripcion_hallazgo_act4': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del hallazgo'}),
            'no_conformidad_act4': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las causas de la no conformidad'}),
            'acciones_ejecutar_act4': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las acciones a ejecutar'}),
            'descripcion_hallazgo_act5': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del hallazgo'}),
            'no_conformidad_act5': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las causas de la no conformidad'}),
            'acciones_ejecutar_act5': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las acciones a ejecutar'}),
            'descripcion_hallazgo_act6': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del hallazgo'}),
            'no_conformidad_act6': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las causas de la no conformidad'}),
            'acciones_ejecutar_act6': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las acciones a ejecutar'}),
            'descripcion_hallazgo_act7': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del hallazgo'}),
            'no_conformidad_act7': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las causas de la no conformidad'}),
            'acciones_ejecutar_act7': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las acciones a ejecutar'}),
            'descripcion_hallazgo_act8': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del hallazgo'}),
            'no_conformidad_act8': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las causas de la no conformidad'}),
            'acciones_ejecutar_act8': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las acciones a ejecutar'}),
            'descripcion_hallazgo_act9': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del hallazgo'}),
            'no_conformidad_act9': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las causas de la no conformidad'}),
            'acciones_ejecutar_act9': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las acciones a ejecutar'}),
            'descripcion_hallazgo_act10': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del hallazgo'}),
            'no_conformidad_act10': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las causas de la no conformidad'}),
            'acciones_ejecutar_act10': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las acciones a ejecutar'}),
            'descripcion_hallazgo_act11': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del hallazgo'}),
            'no_conformidad_act11': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las causas de la no conformidad'}),
            'acciones_ejecutar_act11': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las acciones a ejecutar'}),
            'descripcion_hallazgo_act12': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del hallazgo'}),
            'no_conformidad_act12': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las causas de la no conformidad'}),
            'acciones_ejecutar_act12': forms.Textarea(attrs={
                'rows':5,
                'placeholder':'Enumere las acciones a ejecutar'}),
            'descripcion_cambio1': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del cambio'}),
            'descripcion_cambio2': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del cambio'}),
            'descripcion_cambio3': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del cambio'}),
            'descripcion_cambio4': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del cambio'}),
            'descripcion_cambio5': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Descripción breve del cambio'}),
            'observaciones': forms.Textarea(attrs={
                'rows':5,
                'placeholder':u'Observaciones'}),
        }