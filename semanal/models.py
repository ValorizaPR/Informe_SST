# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.utils import timezone

from datetime import date

from multiselectfield import MultiSelectField

# -------- Opciones para los campos dropdown -------- #

OPCIONES_EMPRESA = (
    ('DECOFACHADAS', 'Decofachadas'),
    ('FLOTANTES', 'Flotantes'),
    ('INVERSIONES HD GLOBAL', 'Inversiones HD Global'),
    ('MONTAJES ELECTRICOS', 'Montajes Eléctricos'),
    ('SOLUCIONES EN ICOPOR', 'Soluciones en Icopor'),
    ('VALORIZA PROPIEDAD RAIZ', 'Valoriza Propiedad Raíz'),
    ('VELAYA CONSTRUCCIOENS', 'Velaya Construcciones'),
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
    (5, 'Enfermedad Laboral'),
)

OPCIONES_CAN_INCAPACIDADES = (
    ('0', '0'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4'),
    ('5', '5'),
)

OPCIONES_ACCION = (
    ('ACCION PREVENTIVA', 'Acción Preventiva'),
    ('ACCION CORRECTIVA', 'Acción Correctiva'),
    ('OPORTUNIDAD DE MEJORA', 'Oportunidad de Mejora'),
)

OPCIONES_HALLAZGO = (
    ('AUDITORIA EXTERNA', 'Auditoría Externa'),
    ('AUDITORIA INTERNA', 'Auditoría Interna'),
    ('BRIGADA DE EMERGENCIA', 'Brigada de Emergencia'),
    ('COPASST', 'COPASST'),
    ('GESTION AMBIENTAL', 'Gestión Ambiental'),
    ('INFORME SEMANAL', 'Informe Semanal'),
    ('INSPECCION', 'Inspección'),
    ('MATRIZ DE PLIEGOS', 'Matriz de Pliegos'),
    ('OBSERVACIONES', 'Observaciones'),
    ('OTRAS', 'Otras'),
    ('PROGRAMAS DE GESTION', 'Programas de Gestión'),
    ('QUEJAS', 'Quejas'),
    ('RECLAMACIONES', 'Reclamaciones'),
    ('REQUISITOS LEGALES', 'Requisitos Legales'),
    ('REVISION POR LA DIRECCION', 'Revisión por la Gerencia'),
    ('SIMULACRO DE EMERGENCIAS', 'Simulacro de Emergencias'),
    ('SUGERENCIAS', 'Sugerencias'),
)

OPCIONES_CAUSAS = (
    (1, 'Método'),
    (2, 'Mano de Obra'),
    (3, 'Maquinaria'),
    (4, 'Medio Ambiente'),
    (5, 'Materiales'),
    (6, 'Medida'),
)

OPCIONES_RESPONSABLE = (
    (1, 'Gerencia'),
    (2, 'Coordinador'),
    (3, 'Siso'),
    (4, 'Representante de la alta dirección'),
    (5, 'Director de Obra'),
    (6, 'Contratista'),
    (7, 'Empleado'),
    (8, 'Almacenista'),
)

# ------ Fin Opciones para los campos dropdown ------ #

"""
Modelo para ingresar datos del usuario, ciclo semanal, novedades del personal,
inspección EPP, e inspección de orden y aseo.
"""
class Informe(models.Model):
    # Campos del formulario

    # ------ Datos de quien realiza el informe ------ #

    # Clave foranea, vinculo a otro modelo
    usuario           = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    empresa           = models.CharField(max_length=30, choices=OPCIONES_EMPRESA)
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
        max_length=30,
        choices=OPCIONES_ACCIDENTES,
        verbose_name="Accidentes Laborales")

    inc_laboral = models.CharField(
        max_length=30,
        choices=OPCIONES_INCIDENTES,
        verbose_name="Incidentes Laborales")

    licencias = models.CharField(max_length=30, choices=OPCIONES_LICENCIAS)

    memorandos = models.CharField(
        max_length=30,
        choices=OPCIONES_MEMORANDOS,
        verbose_name="Memorandos o Llamados de atención")

    suspenciones = models.CharField(max_length=30, choices=OPCIONES_SUSPENSIONES)

    pregunta = models.CharField(
        max_length=30,
        choices=OPCIONES_PREGUNTA,
        verbose_name="¿Hubo incapacidades?")

    """
    Se instalo plugin MultiSelectField para tener una lista opciones de checkbox
    Informacion en: https://pypi.python.org/pypi/django-multiselectfield
    """
    incapacidad = MultiSelectField(
        choices=OPCIONES_INCAPACIDAD,
        blank=True,
        verbose_name="Tipo de Incapacidad")

    can_incapacidades = models.CharField(
        max_length=30,
        choices=OPCIONES_CAN_INCAPACIDADES,
        blank=True,
        verbose_name="Cantidad de Incapacidades")

    # esto es para verificar si via web el campo numero solo recibe numeros
    #################numero = models.PositiveSmallIntegerField()
    
    # ---------- Fin Novedades del personal --------- #

    # ---------------- Inspeccion EPP --------------- #

    tipo_accion_epp = models.CharField(
        max_length=30,
        choices=OPCIONES_ACCION,
        verbose_name="¿Tipo de Acción?")

    fuente_hallazgo_epp = models.CharField(
        max_length=30,
        choices=OPCIONES_HALLAZGO,
        verbose_name="¿Fuente del Hallazgo")

    descripcion_hallazgo_epp = models.TextField(
        verbose_name="Descripción del Hallazgo")

    tipos_causas_epp = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Tipo de Causas (Solo aplica para Acción Correctiva)")

    no_conformidad_epp = models.TextField(
        blank=True,
        verbose_name="Causas que determinaron la no conformidad (Solo \
        aplica para Acción Correctiva)")

    """
    Señale para cada causa enunciada anteriormente, el tipo al que...
    """
    causa_epp_1 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 1")

    causa_epp_2 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 2")

    causa_epp_3 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 3")

    causa_epp_4 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 4")

    causa_epp_5 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 5")

    acciones_ejecutar_epp = models.TextField(
        verbose_name="Acciones a Ejecutar")

    """
    Responsable de la ejecucion
    """
    accion_epp_1 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        verbose_name="Acción 1")

    accion_epp_2 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 2")

    accion_epp_3 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 3")

    accion_epp_4 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 4")

    accion_epp_5 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 5")

    fecha_ejecucion_epp_1 = models.DateField(
        verbose_name="Fecha límite de ejecución para la acción 1")

    fecha_ejecucion_epp_2 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución para la acción 2")

    fecha_ejecucion_epp_3 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución para la acción 3")

    fecha_ejecucion_epp_4 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución para la acción 4")

    fecha_ejecucion_epp_5 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución para la acción 5")

    evidencia_epp = models.FileField(
        upload_to='archivos/epp',
        verbose_name="Evidencia Fotográfica de la Inspección EPP")

    # -------------- Fin Inspeccion EPP ------------- #

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