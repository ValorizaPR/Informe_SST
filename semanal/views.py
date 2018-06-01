# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, get_object_or_404, redirect

from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

from django.utils.encoding import smart_str

from django.http import HttpResponse, HttpResponseRedirect

from django.conf import settings

from .models import Informe
from .forms import LoginForm, FormInforme

from datetime import datetime

from wsgiref.util import FileWrapper

import os
import mimetypes
import sys

reload(sys)  
sys.setdefaultencoding('utf8')

"""
Valida los datos de inicio de sesión
"""
def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(username=username, password=password)

        if user is not None:
            if user.is_active:
                login(request, user)
                return HttpResponseRedirect('/informes')
            else:
                messages.error(request, 'Tu cuenta esta desactivada')
                return HttpResponseRedirect('/login')
        else:
            messages.error(request, 'Usuario o contraseña incorrecto')
            return HttpResponseRedirect('/login')
    else:
        form = LoginForm()
        return render(request, 'semanal/login.html', {'form': form})

"""
Termina la sesión del usuario
"""
@login_required
def user_logout(request):
    logout(request)
    return HttpResponseRedirect('/login')

"""
Muestra los informes elaborados por el usuario
"""
def lista_informes(request):
    if request.user.is_authenticated:
        user_group = request.user.groups.filter(name__in=[
            'Administrador', 'GH_Valoriza']).exists()

        group_decofachadas = request.user.groups.filter(
            name='Decofachadas').exists()

        if user_group:
            informes = Informe.objects.order_by('-fecha_elaboracion')

            return render(
                request, 'semanal/informes.html', {'informes': informes})
        elif group_decofachadas:
            informes = Informe.objects.filter(
                empresa__contains='Decofachadas').order_by('-fecha_elaboracion')

            return render(
                request, 'semanal/informes.html', {'informes': informes})
        else:
            informes = Informe.objects.filter(
                usuario=request.user).order_by('-fecha_elaboracion')

            return render(
                request, 'semanal/informes.html', {'informes': informes})
    else:
        return render(request, 'semanal/login_error.html')

"""
Muestra la página con el detalle de un informe específico
"""
def detalle_informe(request, pk):
    if request.user.is_authenticated:
        informe    = get_object_or_404(Informe, pk=pk)
        user_group = request.user.groups.filter(name__in=[
            'Administrador', 'GH_Valoriza', 'Decofachadas']).exists()

        if user_group or request.user.id == informe.usuario_id:
            return render(
                request, 'semanal/detalle_informe.html', {'informe': informe})
        else:
            return render(request, 'semanal/sin_permiso.html')
    else:
        return render(request, 'semanal/login_error.html')

"""
Permite elaborar un nuevo informe
"""
def nuevo_informe(request):
    if request.user.is_authenticated:
        user_group = request.user.groups.filter(name='Sisos').exists()

        if user_group:
            if request.method == "POST":
                form  = FormInforme(request.POST, request.FILES)

                if form.is_valid():
                    informe                   = form.save(commit=False)
                    informe.usuario           = request.user
                    informe.fecha_elaboracion = datetime.now()                    
                    informe.save()

                    return redirect('detalle_informe', pk=informe.pk)
            else:
                form = FormInforme()

            return render(request, 'semanal/nuevo_informe.html', {'form': form})
        else:
            return render(request, 'semanal/sin_permiso.html')
    else:
        return render(request, 'semanal/login_error.html')

"""
Permite editar un informe
"""
def editar_informe(request, pk):
    if request.user.is_authenticated:
        informe    = get_object_or_404(Informe, pk=pk)
        user_group = request.user.groups.filter(name='Sisos').exists()
        
        if user_group and request.user.id == informe.usuario_id:
            if request.method == "POST":
                form = FormInforme(request.POST, request.FILES, instance=informe)

                if form.is_valid():
                    informe         = form.save(commit=False)
                    informe.usuario = request.user
                    informe.save()

                    return redirect('detalle_informe', pk=informe.pk)
            else:
                form = FormInforme(instance=informe)

            return render(request, 'semanal/nuevo_informe.html', {'form': form})
        else:
            return render(request, 'semanal/sin_permiso.html')
    else:
        return render(request, 'semanal/login_error.html')


def descargar_archivos(request, pk, file_name):
    """Permite descargar los archivos guardados.
    Devuelve un archivo."""

    if request.user.is_authenticated:
        informe    = get_object_or_404(Informe, pk=pk)
        user_group = request.user.groups.filter(name__in=[
            'Administrador', 'GH_Valoriza', 'Decofachadas']).exists()

        if user_group or request.user.id == informe.usuario_id:
            file_path = settings.MEDIA_ROOT + '/' + file_name
            file_wrapper = FileWrapper(file(file_path, 'rb'))
            file_mimetype = mimetypes.guess_type(file_path)
            response = HttpResponse(file_wrapper, content_type=file_mimetype )
            response['X-Sendfile'] = file_path
            response['Content-Length'] = os.stat(file_path).st_size
            response['Content-Disposition'] = 'attachment; filename=%s' \
                % smart_str(file_name)

            return response
        else:
            return render(request, 'semanal/sin_permiso.html')
    else:
        return render(request, 'semanal/login_error.html')