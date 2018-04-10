# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, get_object_or_404, redirect

from .models import Informe
from .forms import LoginForm, FormInforme

from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

from django.http import HttpResponse
from django.http import HttpResponseRedirect

from datetime import date

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
        if request.user.is_staff:
            informes = Informe.objects.order_by('fecha_elaboracion')
            return render(
                request, 'semanal/informes.html', {'informes': informes})
        else:
            informes = Informe.objects.filter(
                usuario=request.user).order_by('fecha_elaboracion')
            return render(
                request, 'semanal/informes.html', {'informes': informes})
    else:
        return render(request, 'semanal/login_error.html')

"""
Muestra la página con el detalle de un informe específico
"""
def detalle_informe(request, pk):
    if request.user.is_authenticated:
        informe = get_object_or_404(Informe, pk=pk)
        return render(
            request, 'semanal/detalle_informe.html', {'informe': informe})
    else:
        return render(request, 'semanal/login_error.html')

"""
Permite elaborar un nuevo informe
"""
def nuevo_informe(request):
    if request.user.is_authenticated:
        if request.method == "POST":
            form = FormInforme(request.POST, request.FILES)

            if form.is_valid():
                informe         = form.save(commit=False)
                informe.usuario = request.user
                informe.fecha_elaboracion = date.today()
                informe.save()
                return redirect('detalle_informe', pk=informe.pk)
        else:
            form = FormInforme()
            
        return render(request, 'semanal/nuevo_informe.html', {'form': form})
    else:
        return render(request, 'semanal/login_error.html')

"""
Permite editar un informe
"""
def editar_informe(request, pk):
    if request.user.is_authenticated:
        informe = get_object_or_404(Informe, pk=pk)
        
        if request.method == "POST":
            form = FormInforme(request.POST, instance=informe)

            if form.is_valid():
                informe         = form.save(commit=False)
                informe.usuario = request.user
                informe.save()
                return redirect('detalle_informe', pk=informe.pk)
        else:
            form = FormInforme(instance=informe)

        return render(request, 'semanal/nuevo_informe.html', {'form': form})
    else:
        return render(request, 'semanal/login_error.html')
