from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.user_login, name='index'),
    url(r'login/$', views.user_login, name='login'),
    url(r'logout/$', views.user_logout, name='logout'),
    url(r'informes/$', views.lista_informes, name='informes'),
    url(r'^informe/nuevo/$', views.nuevo_informe, name='nuevo_informe'),
    url(r'^informe/(?P<pk>[0-9]+)/$', views.detalle_informe, name='detalle_informe'),
    url(r'^informe/(?P<pk>[0-9]+)/editar/$', views.editar_informe, name='nuevo_informe'),
    #url(r'^semanal/archivos/(?P<file_name>.*)$', views.descargar_archivos, name='descargar'),
    url(r'^informe/(?P<pk>[0-9]+)/(?P<file_name>.*)$', views.descargar_archivos, name='descargar_archivos'),
]