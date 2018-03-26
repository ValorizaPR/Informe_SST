# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Informe
from .forms import LoginForm, FormInforme

from django.contrib import messages

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

from django.http import HttpResponse
from django.http import HttpResponseRedirect

"""
Función que valida los datos de inicio de sesión
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
                messages.error(request,'Tu cuenta esta desactivada')
                return HttpResponseRedirect('/login')
        else:
            messages.error(request,'Usuario o contraseña incorrecto')
            return HttpResponseRedirect('/login')
    else:
        form = LoginForm()
        return render(request, 'semanal/login.html', {'form': form})

"""
Función que termina la sesión del usuario
"""
@login_required
def user_logout(request):
    logout(request)
    return HttpResponseRedirect('/login')

"""
Función que muestra los formularios elaborados por el usuario
"""
def lista_informes(request):
    if request.user.is_authenticated:
        informes = Informe.objects.order_by('fecha_elaboracion')
        return render(request, 'semanal/informes.html', {'informes': informes})
    else:
        return render(request, 'semanal/login_error.html')

"""def ver_formulario(request):
    form = FormInforme()
    return render(request, 'semanal/informes.html', {'form': form})"""