# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-04-20 20:24
from __future__ import unicode_literals

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import multiselectfield.db.fields
import semanal.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Informe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('empresa', models.CharField(choices=[('DECOFACHADAS', 'Decofachadas'), ('FLOTANTES', 'Flotantes'), ('INVERSIONES HD GLOBAL', 'Inversiones HD Global'), ('MONTAJES ELECTRICOS', 'Montajes El\xe9ctricos'), ('SOLUCIONES EN ICOPOR', 'Soluciones en Icopor'), ('VALORIZA PROPIEDAD RAIZ', 'Valoriza Propiedad Ra\xedz'), ('VELAYA CONSTRUCCIONES', 'Velaya Construcciones')], max_length=30)),
                ('fecha_elaboracion', models.DateField(default=datetime.date.today, verbose_name='Fecha de Elaboraci\xf3n')),
                ('desde', models.DateField()),
                ('hasta', models.DateField()),
                ('acc_laboral', models.PositiveSmallIntegerField(default=0, verbose_name='Accidentes Laborales')),
                ('inc_laboral', models.PositiveSmallIntegerField(default=0, verbose_name='Incidentes Laborales')),
                ('licencias', models.PositiveSmallIntegerField(default=0)),
                ('memorandos', models.PositiveSmallIntegerField(default=0, verbose_name='Memorandos o Llamados de atenci\xf3n')),
                ('suspensiones', models.PositiveSmallIntegerField(default=0)),
                ('pregunta_incapacidad', models.CharField(choices=[('SI', 'Si'), ('NO', 'No')], max_length=30, verbose_name='\xbfHubo incapacidades?')),
                ('tipo_incapacidad', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[(1, 'Enfermedad General'), (2, 'Accidente Laboral'), (3, 'Licencia de Paternidad'), (4, 'Licencia de Maternidad'), (5, 'Enfermedad Laboral')], max_length=9, verbose_name='Tipo de Incapacidad')),
                ('can_incapacidades', models.PositiveSmallIntegerField(blank=True, default=0, verbose_name='Cantidad de Incapacidades')),
                ('tipo_accion_epp', models.CharField(choices=[('ACCION PREVENTIVA', 'Acci\xf3n Preventiva'), ('ACCION CORRECTIVA', 'Acci\xf3n Correctiva'), ('OPORTUNIDAD DE MEJORA', 'Oportunidad de Mejora')], max_length=30, verbose_name='Tipo de Acci\xf3n')),
                ('fuente_hallazgo_epp', models.CharField(choices=[('Auditor\xeda Externa', 'Auditor\xeda Externa'), ('Auditor\xeda Interna', 'Auditor\xeda Interna'), ('Brigada de Emergencia', 'Brigada de Emergencia'), ('COPASST', 'COPASST'), ('Gesti\xf3n Ambiental', 'Gesti\xf3n Ambiental'), ('Informe Semanal', 'Informe Semanal'), ('Inspecci\xf3n', 'Inspecci\xf3n'), ('Matriz de Pliegos', 'Matriz de Pliegos'), ('Observaciones', 'Observaciones'), ('Otras', 'Otras'), ('Programas de Gesti\xf3n', 'Programas de Gesti\xf3n'), ('Quejas', 'Quejas'), ('Reclamaciones', 'Reclamaciones'), ('Requisitos Legales', 'Requisitos Legales'), ('Revisi\xf3n por la Gerencia', 'Revisi\xf3n por la Gerencia'), ('Simulacro de Emergencias', 'Simulacro de Emergencias'), ('Sugerencias', 'Sugerencias')], max_length=30, verbose_name='Fuente del Hallazgo')),
                ('descripcion_hallazgo_epp', models.TextField(verbose_name='Descripci\xf3n del Hallazgo')),
                ('tipo_causas_epp', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[(1, 'M\xe9todo'), (2, 'Mano de Obra'), (3, 'Maquinaria'), (4, 'Medio Ambiente'), (5, 'Materiales'), (6, 'Medida')], max_length=11, verbose_name='Tipo de Causas (Solo aplica para Acci\xf3n Correctiva)')),
                ('no_conformidad_epp', models.TextField(blank=True, verbose_name='Causas que determinaron la no conformidad (Solo         aplica para Acci\xf3n Correctiva)')),
                ('causa_epp_1', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[(1, 'M\xe9todo'), (2, 'Mano de Obra'), (3, 'Maquinaria'), (4, 'Medio Ambiente'), (5, 'Materiales'), (6, 'Medida')], max_length=11, verbose_name='Causa 1')),
                ('causa_epp_2', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[(1, 'M\xe9todo'), (2, 'Mano de Obra'), (3, 'Maquinaria'), (4, 'Medio Ambiente'), (5, 'Materiales'), (6, 'Medida')], max_length=11, verbose_name='Causa 2')),
                ('causa_epp_3', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[(1, 'M\xe9todo'), (2, 'Mano de Obra'), (3, 'Maquinaria'), (4, 'Medio Ambiente'), (5, 'Materiales'), (6, 'Medida')], max_length=11, verbose_name='Causa 3')),
                ('causa_epp_4', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[(1, 'M\xe9todo'), (2, 'Mano de Obra'), (3, 'Maquinaria'), (4, 'Medio Ambiente'), (5, 'Materiales'), (6, 'Medida')], max_length=11, verbose_name='Causa 4')),
                ('causa_epp_5', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[(1, 'M\xe9todo'), (2, 'Mano de Obra'), (3, 'Maquinaria'), (4, 'Medio Ambiente'), (5, 'Materiales'), (6, 'Medida')], max_length=11, verbose_name='Causa 5')),
                ('acciones_ejecutar_epp', models.TextField(verbose_name='Acciones a Ejecutar')),
                ('accion_epp_1', multiselectfield.db.fields.MultiSelectField(choices=[(1, 'Gerencia'), (2, 'Coordinador'), (3, 'Siso'), (4, 'Representante de la alta direcci\xf3n'), (5, 'Director de Obra'), (6, 'Contratista'), (7, 'Empleado'), (8, 'Almacenista')], max_length=15, verbose_name='Acci\xf3n 1')),
                ('accion_epp_2', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[(1, 'Gerencia'), (2, 'Coordinador'), (3, 'Siso'), (4, 'Representante de la alta direcci\xf3n'), (5, 'Director de Obra'), (6, 'Contratista'), (7, 'Empleado'), (8, 'Almacenista')], max_length=15, verbose_name='Acci\xf3n 2')),
                ('accion_epp_3', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[(1, 'Gerencia'), (2, 'Coordinador'), (3, 'Siso'), (4, 'Representante de la alta direcci\xf3n'), (5, 'Director de Obra'), (6, 'Contratista'), (7, 'Empleado'), (8, 'Almacenista')], max_length=15, verbose_name='Acci\xf3n 3')),
                ('accion_epp_4', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[(1, 'Gerencia'), (2, 'Coordinador'), (3, 'Siso'), (4, 'Representante de la alta direcci\xf3n'), (5, 'Director de Obra'), (6, 'Contratista'), (7, 'Empleado'), (8, 'Almacenista')], max_length=15, verbose_name='Acci\xf3n 4')),
                ('accion_epp_5', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[(1, 'Gerencia'), (2, 'Coordinador'), (3, 'Siso'), (4, 'Representante de la alta direcci\xf3n'), (5, 'Director de Obra'), (6, 'Contratista'), (7, 'Empleado'), (8, 'Almacenista')], max_length=15, verbose_name='Acci\xf3n 5')),
                ('fecha_ejecucion_epp_1', models.DateField(verbose_name='Fecha l\xedmite de ejecuci\xf3n para la acci\xf3n 1')),
                ('fecha_ejecucion_epp_2', models.DateField(blank=True, null=True, verbose_name='Fecha l\xedmite de ejecuci\xf3n para la acci\xf3n 2')),
                ('fecha_ejecucion_epp_3', models.DateField(blank=True, null=True, verbose_name='Fecha l\xedmite de ejecuci\xf3n para la acci\xf3n 3')),
                ('fecha_ejecucion_epp_4', models.DateField(blank=True, null=True, verbose_name='Fecha l\xedmite de ejecuci\xf3n para la acci\xf3n 4')),
                ('fecha_ejecucion_epp_5', models.DateField(blank=True, null=True, verbose_name='Fecha l\xedmite de ejecuci\xf3n para la acci\xf3n 5')),
                ('evidencia_epp', models.FileField(upload_to='archivos/%Y/%m/', validators=[semanal.models.tam_archivo, semanal.models.ext_archivo], verbose_name='Evidencia Fotogr\xe1fica de la Inspecci\xf3n EPP')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
