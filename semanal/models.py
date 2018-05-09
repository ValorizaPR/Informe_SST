# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

from datetime import date

from multiselectfield import MultiSelectField

from django.core.exceptions import ValidationError

# -------- Opciones para los campos dropdown y checkbox -------- #

OPCIONES_EMPRESA = (
    ('DECOFACHADAS', 'Decofachadas'),
    ('FLOTANTES', 'Flotantes'),
    ('INVERSIONES HD GLOBAL', 'Inversiones HD Global'),
    ('MONTAJES ELECTRICOS', 'Montajes Eléctricos'),
    ('SOLUCIONES EN ICOPOR', 'Soluciones en Icopor'),
    ('VALORIZA PROPIEDAD RAIZ', 'Valoriza Propiedad Raíz'),
    ('VELAYA CONSTRUCCIONES', 'Velaya Construcciones'),
)

OPCIONES_PREGUNTA = (
    ('SI', 'Si'),
    ('NO', 'No'),
)

OPCIONES_INCAPACIDAD = (
    (1, 'Accidente Laboral'),
    (2, 'Enfermedad General'),
    (3, 'Enfermedad Laboral'),
    (4, 'Licencia de Paternidad'),
    (5, 'Licencia de Maternidad'),
)

OPCIONES_ACCION = (
    ('ACCION CORRECTIVA', 'Acción Correctiva'),
    ('ACCION PREVENTIVA', 'Acción Preventiva'),
    ('OPORTUNIDAD DE MEJORA', 'Oportunidad de Mejora'),
)

OPCIONES_HALLAZGO = (
    ('Auditoría Externa', 'Auditoría Externa'),
    ('Auditoría Interna', 'Auditoría Interna'),
    ('Brigada de Emergencia', 'Brigada de Emergencia'),
    ('COPASST', 'COPASST'),
    ('Gestión Ambiental', 'Gestión Ambiental'),
    ('Informe Semanal', 'Informe Semanal'),
    ('Inspección', 'Inspección'),
    ('Matriz de Pliegos', 'Matriz de Pliegos'),
    ('Observaciones', 'Observaciones'),
    ('Otras', 'Otras'),
    ('Programas de Gestión', 'Programas de Gestión'),
    ('Quejas', 'Quejas'),
    ('Reclamaciones', 'Reclamaciones'),
    ('Requisitos Legales', 'Requisitos Legales'),
    ('Revisión por la Gerencia', 'Revisión por la Gerencia'),
    ('Simulacro de Emergencias', 'Simulacro de Emergencias'),
    ('Sugerencias', 'Sugerencias'),
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

OPCIONES_ACTIVIDAD = (
    ('Alturas', 'Alturas'),
    ('Armazón', 'Armazón'),
    ('Auditorias', 'Auditorias'),
    ('Brigada de emergencia', 'Brigada de emergencia'),
    ('Capacitaciones', 'Capacitaciones'),
    ('CCL', 'CCL'),
    ('Charlas de seguridad', 'Charlas de seguridad'),
    ('COPASST', 'COPASST'),
    ('Estructura', 'Estructura'),
    ('Inducciones – Reinducciones', 'Inducciones – Reinducciones'),
    ('Inspección de botiquines', 'Inspección de botiquines'),
    ('Inspección de extintores', 'Inspección de extintores'),
    ('Inspección de herramientas', 'Inspección de herramientas'),
    ('Inspección EPCC', 'Inspección EPCC'),
    ('Inspección general', 'Inspección general'),
    ('Investigación AL', 'Investigación AL'),
    ('Investigación EL', 'Investigación EL'),
    ('Investigación IL', 'Investigación IL'),
    ('Izaje de material', 'Izaje de material'),
    ('Mampostería', 'Mampostería'),
    ('Matriz de peligros', 'Matriz de peligros'),
    ('Otra', 'Otra'),
    ('Reporte de riesgos', 'Reporte de riesgos'),
    ('Requisitos legales', 'Requisitos legales'),
    ('Simulacros', 'Simulacros'),
    ('SVE osteomuscualr', 'SVE osteomuscualr'),
    ('SVE psicosocial', 'SVE psicosocial'),
    ('SVE Ruido', 'SVE Ruido'),
    ('Vaceo', 'Vaceo'),
    ('Visitas ARL', 'Visitas ARL'),
)

OPCIONES_CRITERIO = (
    ('Actividades generales de obra', 'Actividades generales de obra'),
    ('Cargos', 'Cargos'),
    ('Equipos', 'Equipos'),
    ('Infraestructura', 'Infraestructura'),
    ('Maquinaria', 'Maquinaria'),
    ('Matriz de riesgos y legal', 'Matriz de riesgos y legal'),
    ('Presupuesto', 'Presupuesto'),
    ('Procedimiento', 'Procedimiento'),
)

OPCIONES_CAMBIO = (
    ('De emergencia', 'De emergencia'),
    ('Organizacional', 'Organizacional'),
    ('Permanente', 'Permanente'),
    ('Temporal', 'Temporal'),
)

OPCIONES_RESPONSABLE_CAMBIO = (
    (1, 'Coordinador SST'),
    (2, 'Director de Obra'),
    (3, 'Maestro'),
    (4, 'Siso'),
)

# ------ Fin Opciones para los campos dropdown ------ #

"""
Limita el tamaño de los archivos cargados a 2 MB
"""
def tam_archivo(valor):
    limite = 2 * 1024 * 1024
    
    if valor.size > limite:
        raise ValidationError('El tamaño del archivo debe ser menor a 2 MB.')

"""
Limita el tipo de archivos cargados a solo PDF
"""
def ext_archivo(valor):
    if valor.file.content_type != 'application/pdf':
        raise ValidationError('Solo se permiten archivos PDF')

"""
Modelo para ingresar datos del usuario, ciclo semanal, novedades del personal,
inspección EPP, inspección de orden y aseo y gestión del cambio.
"""
class Informe(models.Model):
    # Campos del formulario

    # ------ Datos de quien realiza el informe ------ #

    # Clave foranea, vínculo a otro modelo
    usuario = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    empresa = models.CharField(max_length=30, choices=OPCIONES_EMPRESA)
    fecha_elaboracion = models.DateField(
        default=date.today,
        verbose_name="Fecha de Elaboración")

    # ---- Fin Datos de quien realiza el informe ---- #

    # ---------------- Ciclo semanal ---------------- #

    desde = models.DateField(blank=True, null=True)
    hasta = models.DateField(blank=True, null=True)

    # -------------- Fin Ciclo semanal -------------- #

    # ------------ Novedades del personal ----------- #

    acc_laboral = models.PositiveSmallIntegerField(
        default=0,
        blank=True,
        verbose_name="Accidentes Laborales")

            # ------------ Investigaciones ----------- #

    nom_acc_laboral1 = models.CharField(
        max_length=50,
        blank=True,
        verbose_name="Nombre")
    
    cedula_acc_laboral1 = models.BigIntegerField(
        blank=True,
        null=True,
        verbose_name="Cédula")
    
    fecha_acc_laboral1 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha para entrega de la investigación")
    
    furat1 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="FURAT")

    investigacion_acc1 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Investigación")

    leccion1 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Lección aprendida")

    testigos1 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Versión de testigos")

    incapacidad_acc_laboral1 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Incapacidad")

    carta_eps1 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Carta de radicación en EPS")

    carta_ministerio1 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Carta radicación Ministerio")

    nom_acc_laboral2 = models.CharField(
        max_length=50,
        blank=True,
        verbose_name="Nombre")
    
    cedula_acc_laboral2 = models.BigIntegerField(
        blank=True,
        null=True,
        verbose_name="Cédula")
    
    fecha_acc_laboral2 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha para entrega de la investigación")
    
    furat2 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="FURAT")

    investigacion_acc2 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Investigación")

    leccion2 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Lección aprendida")

    testigos2 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Versión de testigos")

    incapacidad_acc_laboral2 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Incapacidad")

    carta_eps2 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Carta de radicación en EPS")

    carta_ministerio2 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Carta radicación Ministerio")

    nom_acc_laboral3 = models.CharField(
        max_length=50,
        blank=True,
        verbose_name="Nombre")
    
    cedula_acc_laboral3 = models.BigIntegerField(
        blank=True,
        null=True,
        verbose_name="Cédula")
    
    fecha_acc_laboral3 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha para entrega de la investigación")
    
    furat3 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="FURAT")

    investigacion_acc3 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Investigación")

    leccion3 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Lección aprendida")

    testigos3 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Versión de testigos")

    incapacidad_acc_laboral3 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Incapacidad")

    carta_eps3 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Carta de radicación en EPS")

    carta_ministerio3 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Carta radicación Ministerio")

    inc_laboral = models.PositiveSmallIntegerField(
        default=0,
        blank=True,
        verbose_name="Incidentes Laborales")

    nom_inc_laboral1 = models.CharField(
        max_length=50,
        blank=True,
        verbose_name="Nombre")
    
    cedula_inc_laboral1 = models.BigIntegerField(
        blank=True,
        null=True,
        verbose_name="Cédula")
    
    fecha_inc_laboral1 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha para entrega de la investigación")

    incidente1 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Incidente")
    
    investigacion_inc1 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Investigación")

    nom_inc_laboral2 = models.CharField(
        max_length=50,
        blank=True,
        verbose_name="Nombre")
    
    cedula_inc_laboral2 = models.BigIntegerField(
        blank=True,
        null=True,
        verbose_name="Cédula")
    
    fecha_inc_laboral2 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha para entrega de la investigación")

    incidente2 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Incidente")
    
    investigacion_inc2 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Investigación")

    nom_inc_laboral3 = models.CharField(
        max_length=50,
        blank=True,
        verbose_name="Nombre")
    
    cedula_inc_laboral3 = models.BigIntegerField(
        blank=True,
        null=True,
        verbose_name="Cédula")
    
    fecha_inc_laboral3 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha para entrega de la investigación")

    incidente3 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Incidente")
    
    investigacion_inc3 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Investigación")

            # ---------- Fin Investigaciones --------- #

    licencias = models.PositiveSmallIntegerField(default=0, blank=True)

    adj_licencias = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Adjunto licencias")

    memorandos = models.PositiveSmallIntegerField(
        default=0,
        blank=True,
        verbose_name="Memorandos o Llamados de atención")

    adj_memorandos = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Adjunto memorandos")

    suspensiones = models.PositiveSmallIntegerField(default=0, blank=True,)

    adj_suspensiones = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Adjunto suspensiones")

    pregunta_incapacidad = models.CharField(
        max_length=30,
        choices=OPCIONES_PREGUNTA,
        blank=True,
        verbose_name="¿Hubo incapacidades?")

    """
    Se instalo plugin MultiSelectField para tener una lista opciones de checkbox
    Informacion en: https://pypi.python.org/pypi/django-multiselectfield
    """
    tipo_incapacidad = MultiSelectField(
        choices=OPCIONES_INCAPACIDAD,
        blank=True,
        verbose_name="Tipo de Incapacidad")

    can_incapacidades = models.PositiveSmallIntegerField(
        default=0,
        blank=True,
        verbose_name="Cantidad de Incapacidades")
    
    # ---------- Fin Novedades del personal --------- #

    # ---------------- Inspección EPP --------------- #

    tipo_accion_epp = models.CharField(
        max_length=30,
        choices=OPCIONES_ACCION,
        blank=True,
        verbose_name="Tipo de Acción")

    fuente_hallazgo_epp = models.CharField(
        max_length=30,
        choices=OPCIONES_HALLAZGO,
        blank=True,
        verbose_name="Fuente del Hallazgo")

    descripcion_hallazgo_epp = models.TextField(
        blank=True,
        verbose_name="Descripción del Hallazgo")

    tipo_causas_epp = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Tipo de Causas")

    no_conformidad_epp = models.TextField(
        blank=True,
        verbose_name="Causas que determinaron la no conformidad")

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
        blank=True,
        verbose_name="Acciones a Ejecutar")

    """
    Responsable de la ejecucion
    """
    accion_epp_1 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
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

    """
    Fechas límites de ejecución
    """
    fecha_ejecucion_epp_1 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_epp_2 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_epp_3 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_epp_4 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_epp_5 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    evidencia_epp = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Evidencia Fotográfica")

    # -------------- Fin Inspección EPP ------------- #

    # ---------------- Inspección Orden y Aseo --------------- #

    tipo_accion_OyA = models.CharField(
        max_length=30,
        choices=OPCIONES_ACCION,
        blank=True,
        verbose_name="Tipo de Acción")

    fuente_hallazgo_OyA = models.CharField(
        max_length=30,
        choices=OPCIONES_HALLAZGO,
        blank=True,
        verbose_name="Fuente del Hallazgo")

    descripcion_hallazgo_OyA = models.TextField(
        blank=True,
        verbose_name="Descripción del Hallazgo")

    tipo_causas_OyA = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Tipo de Causas")

    no_conformidad_OyA = models.TextField(
        blank=True,
        verbose_name="Causas que determinaron la no conformidad")

    """
    Señale para cada causa enunciada anteriormente, el tipo al que...
    """
    causa_OyA_1 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 1")

    causa_OyA_2 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 2")

    causa_OyA_3 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 3")

    causa_OyA_4 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 4")

    causa_OyA_5 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 5")

    acciones_ejecutar_OyA = models.TextField(
        blank=True,
        verbose_name="Acciones a Ejecutar")

    """
    Responsable de la ejecucion
    """
    accion_OyA_1 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 1")

    accion_OyA_2 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 2")

    accion_OyA_3 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 3")

    accion_OyA_4 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 4")

    accion_OyA_5 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 5")

    """
    Fechas límites de ejecución
    """
    fecha_ejecucion_OyA_1 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_OyA_2 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_OyA_3 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_OyA_4 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_OyA_5 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    evidencia_OyA = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Evidencia Fotográfica")

    # -------------- Fin Inspección Orden y Aseo ------------- #

    # ---------------- Actividad 1 --------------- #

    tipo_actividad1 = models.CharField(
        max_length=30,
        choices=OPCIONES_ACTIVIDAD,
        blank=True,
        verbose_name="Tipo de actividad")

    tipo_accion_act1 = models.CharField(
        max_length=30,
        choices=OPCIONES_ACCION,
        blank=True,
        verbose_name="Tipo de Acción")

    fuente_hallazgo_act1 = models.CharField(
        max_length=30,
        choices=OPCIONES_HALLAZGO,
        blank=True,
        verbose_name="Fuente del Hallazgo")

    descripcion_hallazgo_act1 = models.TextField(
        blank=True,
        verbose_name="Descripción del Hallazgo")

    tipo_causas_act1 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Tipo de Causas")

    no_conformidad_act1 = models.TextField(
        blank=True,
        verbose_name="Causas que determinaron la no conformidad")

    """
    Señale para cada causa enunciada anteriormente, el tipo al que...
    """
    causa_act1_1 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 1")

    causa_act1_2 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 2")

    causa_act1_3 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 3")

    causa_act1_4 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 4")

    causa_act1_5 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 5")

    acciones_ejecutar_act1 = models.TextField(
        blank=True,
        verbose_name="Acciones a Ejecutar")

    """
    Responsable de la ejecucion
    """
    accion_act1_1 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 1")

    accion_act1_2 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 2")

    accion_act1_3 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 3")

    accion_act1_4 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 4")

    accion_act1_5 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 5")

    """
    Fechas límites de ejecución
    """
    fecha_ejecucion_act1_1 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act1_2 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act1_3 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act1_4 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act1_5 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    evidencia_act1 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Evidencia Fotográfica")

    # -------------- Fin Actividad 1 ------------- #

    # ---------------- Actividad 2 --------------- #

    tipo_actividad2 = models.CharField(
        max_length=30,
        choices=OPCIONES_ACTIVIDAD,
        blank=True,
        verbose_name="Tipo de actividad")

    tipo_accion_act2 = models.CharField(
        max_length=30,
        choices=OPCIONES_ACCION,
        blank=True,
        verbose_name="Tipo de Acción")

    fuente_hallazgo_act2 = models.CharField(
        max_length=30,
        choices=OPCIONES_HALLAZGO,
        blank=True,
        verbose_name="Fuente del Hallazgo")

    descripcion_hallazgo_act2 = models.TextField(
        blank=True,
        verbose_name="Descripción del Hallazgo")

    tipo_causas_act2 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Tipo de Causas")

    no_conformidad_act2 = models.TextField(
        blank=True,
        verbose_name="Causas que determinaron la no conformidad")

    """
    Señale para cada causa enunciada anteriormente, el tipo al que...
    """
    causa_act2_1 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 1")

    causa_act2_2 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 2")

    causa_act2_3 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 3")

    causa_act2_4 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 4")

    causa_act2_5 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 5")

    acciones_ejecutar_act2 = models.TextField(
        blank=True,
        verbose_name="Acciones a Ejecutar")

    """
    Responsable de la ejecucion
    """
    accion_act2_1 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 1")

    accion_act2_2 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 2")

    accion_act2_3 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 3")

    accion_act2_4 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 4")

    accion_act2_5 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 5")

    """
    Fechas límites de ejecución
    """
    fecha_ejecucion_act2_1 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act2_2 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act2_3 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act2_4 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act2_5 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    evidencia_act2 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Evidencia Fotográfica")

    # -------------- Fin Actividad 2 ------------- #

    # ---------------- Actividad 3 --------------- #

    tipo_actividad3 = models.CharField(
        max_length=30,
        choices=OPCIONES_ACTIVIDAD,
        blank=True,
        verbose_name="Tipo de actividad")

    tipo_accion_act3 = models.CharField(
        max_length=30,
        choices=OPCIONES_ACCION,
        blank=True,
        verbose_name="Tipo de Acción")

    fuente_hallazgo_act3 = models.CharField(
        max_length=30,
        choices=OPCIONES_HALLAZGO,
        blank=True,
        verbose_name="Fuente del Hallazgo")

    descripcion_hallazgo_act3 = models.TextField(
        blank=True,
        verbose_name="Descripción del Hallazgo")

    tipo_causas_act3 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Tipo de Causas")

    no_conformidad_act3 = models.TextField(
        blank=True,
        verbose_name="Causas que determinaron la no conformidad")

    """
    Señale para cada causa enunciada anteriormente, el tipo al que...
    """
    causa_act3_1 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 1")

    causa_act3_2 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 2")

    causa_act3_3 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 3")

    causa_act3_4 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 4")

    causa_act3_5 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 5")

    acciones_ejecutar_act3 = models.TextField(
        blank=True,
        verbose_name="Acciones a Ejecutar")

    """
    Responsable de la ejecucion
    """
    accion_act3_1 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 1")

    accion_act3_2 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 2")

    accion_act3_3 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 3")

    accion_act3_4 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 4")

    accion_act3_5 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 5")

    """
    Fechas límites de ejecución
    """
    fecha_ejecucion_act3_1 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act3_2 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act3_3 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act3_4 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act3_5 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    evidencia_act3 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Evidencia Fotográfica")

    # -------------- Fin Actividad 3 ------------- #

    # ---------------- Actividad 4 --------------- #

    tipo_actividad4 = models.CharField(
        max_length=30,
        choices=OPCIONES_ACTIVIDAD,
        blank=True,
        verbose_name="Tipo de actividad")

    tipo_accion_act4 = models.CharField(
        max_length=30,
        choices=OPCIONES_ACCION,
        blank=True,
        verbose_name="Tipo de Acción")

    fuente_hallazgo_act4 = models.CharField(
        max_length=30,
        choices=OPCIONES_HALLAZGO,
        blank=True,
        verbose_name="Fuente del Hallazgo")

    descripcion_hallazgo_act4 = models.TextField(
        blank=True,
        verbose_name="Descripción del Hallazgo")

    tipo_causas_act4 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Tipo de Causas")

    no_conformidad_act4 = models.TextField(
        blank=True,
        verbose_name="Causas que determinaron la no conformidad")

    """
    Señale para cada causa enunciada anteriormente, el tipo al que...
    """
    causa_act4_1 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 1")

    causa_act4_2 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 2")

    causa_act4_3 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 3")

    causa_act4_4 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 4")

    causa_act4_5 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 5")

    acciones_ejecutar_act4 = models.TextField(
        blank=True,
        verbose_name="Acciones a Ejecutar")

    """
    Responsable de la ejecucion
    """
    accion_act4_1 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 1")

    accion_act4_2 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 2")

    accion_act4_3 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 3")

    accion_act4_4 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 4")

    accion_act4_5 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 5")

    """
    Fechas límites de ejecución
    """
    fecha_ejecucion_act4_1 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act4_2 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act4_3 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act4_4 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act4_5 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    evidencia_act4 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Evidencia Fotográfica")

    # -------------- Fin Actividad 4 ------------- #

    # ---------------- Actividad 5 --------------- #

    tipo_actividad5 = models.CharField(
        max_length=30,
        choices=OPCIONES_ACTIVIDAD,
        blank=True,
        verbose_name="Tipo de actividad")

    tipo_accion_act5 = models.CharField(
        max_length=30,
        choices=OPCIONES_ACCION,
        blank=True,
        verbose_name="Tipo de Acción")

    fuente_hallazgo_act5 = models.CharField(
        max_length=30,
        choices=OPCIONES_HALLAZGO,
        blank=True,
        verbose_name="Fuente del Hallazgo")

    descripcion_hallazgo_act5 = models.TextField(
        blank=True,
        verbose_name="Descripción del Hallazgo")

    tipo_causas_act5 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Tipo de Causas")

    no_conformidad_act5 = models.TextField(
        blank=True,
        verbose_name="Causas que determinaron la no conformidad")

    """
    Señale para cada causa enunciada anteriormente, el tipo al que...
    """
    causa_act5_1 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 1")

    causa_act5_2 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 2")

    causa_act5_3 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 3")

    causa_act5_4 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 4")

    causa_act5_5 = MultiSelectField(
        choices=OPCIONES_CAUSAS,
        blank=True,
        verbose_name="Causa 5")

    acciones_ejecutar_act5 = models.TextField(
        blank=True,
        verbose_name="Acciones a Ejecutar")

    """
    Responsable de la ejecucion
    """
    accion_act5_1 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 1")

    accion_act5_2 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 2")

    accion_act5_3 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 3")

    accion_act5_4 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 4")

    accion_act5_5 = MultiSelectField(
        choices=OPCIONES_RESPONSABLE,
        blank=True,
        verbose_name="Acción 5")

    """
    Fechas límites de ejecución
    """
    fecha_ejecucion_act5_1 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act5_2 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act5_3 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act5_4 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    fecha_ejecucion_act5_5 = models.DateField(
        blank=True,
        null=True,
        verbose_name="Fecha límite de ejecución")

    evidencia_act5 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Evidencia Fotográfica")

    # -------------- Fin Actividad 5 ------------- #

    # --------------- Gestión del cambio 1 -------------- #

    criterio1 = models.CharField(
        max_length=30,
        choices=OPCIONES_CRITERIO,
        blank=True,
        verbose_name="Criterio")

    tipo_cambio1 = models.CharField(
        max_length=30,
        choices=OPCIONES_CAMBIO,
        blank=True,
        verbose_name="Tipo de cambio")

    descripcion_cambio1 = models.TextField(
        blank=True,
        verbose_name="Descripción del cambio")

    registro_antes1 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Registro del antes")

    registro_despues1 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Registro del después")

    responsable_cambio1 = models.CharField(
        max_length=30,
        choices=OPCIONES_RESPONSABLE_CAMBIO,
        blank=True,
        verbose_name="Responsable del cambio")

    # ------------- Fin Gestión del cambio 1 ------------ #

    # --------------- Gestión del cambio 2 -------------- #

    criterio2 = models.CharField(
        max_length=30,
        choices=OPCIONES_CRITERIO,
        blank=True,
        verbose_name="Criterio")

    tipo_cambio2 = models.CharField(
        max_length=30,
        choices=OPCIONES_CAMBIO,
        blank=True,
        verbose_name="Tipo de cambio")

    descripcion_cambio2 = models.TextField(
        blank=True,
        verbose_name="Descripción del cambio")

    registro_antes2 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Registro del antes")

    registro_despues2 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Registro del después")

    responsable_cambio2 = models.CharField(
        max_length=30,
        choices=OPCIONES_RESPONSABLE_CAMBIO,
        blank=True,
        verbose_name="Responsable del cambio")

    # ------------- Fin Gestión del cambio 2 ------------ #

    # --------------- Gestión del cambio 3 -------------- #

    criterio3 = models.CharField(
        max_length=30,
        choices=OPCIONES_CRITERIO,
        blank=True,
        verbose_name="Criterio")

    tipo_cambio3 = models.CharField(
        max_length=30,
        choices=OPCIONES_CAMBIO,
        blank=True,
        verbose_name="Tipo de cambio")

    descripcion_cambio3 = models.TextField(
        blank=True,
        verbose_name="Descripción del cambio")

    registro_antes3 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Registro del antes")

    registro_despues3 = models.FileField(
        upload_to='archivos/%Y/%m/',
        validators=[tam_archivo, ext_archivo],
        blank=True,
        verbose_name="Registro del después")

    responsable_cambio3 = models.CharField(
        max_length=30,
        choices=OPCIONES_RESPONSABLE_CAMBIO,
        blank=True,
        verbose_name="Responsable del cambio")

    # ------------- Fin Gestión del cambio 3 ------------ #

    observaciones = models.TextField(
        blank=True,
        verbose_name="Observaciones")

    """
    Guardar el informe
    """
    def guardar_informe(self):
        self.fecha_elaboracion = date.today()
        self.save()

    """
    Cadena para representar el objeto Informe(clase) en el admin de django.
    """
    def __str__(self):
        return self.empresa