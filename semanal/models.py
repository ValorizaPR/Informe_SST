# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.utils import timezone

from datetime import date

from multiselectfield import MultiSelectField

OPCIONES_EMPRESA = (
    ('VALORIZA PROPIEDAD RAIZ', 'Valoriza Propiedad Raíz'),
    ('DECOFACHADAS', 'Decofachadas.'),
    ('INVERSIONES HD GLOBAL', 'Inversiones HD Global'),
    ('MONTAJES ELECTRICOS', 'Montajes Eléctricos'),
    ('SOLUCIONES EN ICOPOR', 'Soluciones en Icopor'),
    ('VELAYA CONSTRUCCIOENS', 'Velaya Construcciones'),
    ('FLOTANTES', 'Flotantes'),
)

OPCIONES_ACCIDENTES = (
    ('0', '0'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4'),
    ('5', '5'),
)

OPCIONES_INCIDENTES = (
    ('0', '0'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4'),
    ('5', '5'),
)

OPCIONES_LICENCIAS = (
    ('0', '0'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4'),
    ('5', '5'),
)

OPCIONES_MEMORANDOS = (
    ('0', '0'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4'),
    ('5', '5'),
)

OPCIONES_SUSPENSIONES = (
    ('0', '0'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4'),
    ('5', '5'),
)

OPCIONES_PREGUNTA = (
    ('SI', 'Si'),
    ('NO', 'No'),
)

OPCIONES_INCAPACIDAD = (
    (1, 'Enfermedad General'),
    (2, 'Accidente Laboral'),
    (3, 'Licencia de Paternidad'),
    (4, 'Licencia de Maternidad'),
    (5, 'Enfermedad Laboral')
)

OPCIONES_CAN_INCAPACIDADES = (
    ('0', '0'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4'),
    ('5', '5'),
)

class Informe(models.Model):
    # Campos del formulario

    # ------ Datos de quien realiza el informe ------ #

    # Clave foranea, vinculo a otro modelo
    usuario           = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    empresa           = models.CharField(max_length=7, choices=OPCIONES_EMPRESA)
    fecha_elaboracion = models.DateField(
        default=date.today,
        verbose_name="Fecha de Elaboración")

    # ---- Fin Datos de quien realiza el informe ---- #

    # ---------------- Ciclo semanal ---------------- #

    desde = models.DateField(default=date.today)
    hasta = models.DateField(default=date.today)

    # -------------- Fin Ciclo semanal -------------- #

    # ------------ Novedades del personal ----------- #

    acc_laboral = models.CharField(
        max_length=6,
        choices=OPCIONES_ACCIDENTES,
        verbose_name="Accidentes Laborales")

    inc_laboral = models.CharField(
        max_length=6,
        choices=OPCIONES_INCIDENTES,
        verbose_name="Incidentes Laborales")

    licencias = models.CharField(max_length=6, choices=OPCIONES_LICENCIAS)

    memorandos = models.CharField(
        max_length=6,
        choices=OPCIONES_MEMORANDOS,
        verbose_name="Memorandos o Llamados de atención")

    suspenciones = models.CharField(max_length=6, choices=OPCIONES_SUSPENSIONES)

    pregunta = models.CharField(
        max_length=2,
        choices=OPCIONES_PREGUNTA,
        verbose_name="¿Hubo incapacidades?")

    """
    Se instalo plugin MultiSelectField para tener una lista opciones de checkbox
    Informacion en: https://pypi.python.org/pypi/django-multiselectfield
    """
    incapacidad = MultiSelectField(
        choices=OPCIONES_INCAPACIDAD,
        verbose_name="Tipo de Incapacidad")

    can_incapacidades = models.CharField(
        max_length=6,
        choices=OPCIONES_CAN_INCAPACIDADES,
        verbose_name="Cantidad de incapacidades")

    #numero = models.PositiveSmallIntegerField()
    
    # ---------- Fin Novedades del personal --------- #

    # ---------- Fin Novedades del personal --------- #


    # ---------- Fin Novedades del personal --------- #

    """
    Metodo que permite guardar el informe
    """
    def guardar_informe(self):
        self.save()

    """
    Cadena para representar el objeto Informe(clase) en el sitio de Admin, etc.
    """
    def __str__(self):
        return self.empresa