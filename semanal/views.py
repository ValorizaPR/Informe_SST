# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.utils import timezone
from .models import Informe
from .forms import FormInforme

"""
def lista_informes(request):
    informes = Informe.objects.order_by('fecha_elaboracion')
    return render(request, 'semanal/informes.html', {'informes': informes})"""

def ver_formulario(request):
    form = FormInforme()
    return render(request, 'semanal/informes.html', {'form': form})