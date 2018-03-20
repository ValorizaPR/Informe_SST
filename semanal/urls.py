from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.ver_formulario), # aqui era lista_informes
]