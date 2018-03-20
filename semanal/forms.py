# -*- coding: utf-8 -*-

from django import forms
from .models import Informe

class DateInput(forms.DateInput):
    input_type = 'date'

class FormInforme(forms.ModelForm):
  class Meta:
    model = Informe
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
        'desde': DateInput()
    }
