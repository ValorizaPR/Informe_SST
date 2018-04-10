/*
 *Función que valida el tamaño y tipo del archivo adjunto
 */
$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_epp')[0].files[0];
    $('#error').empty();

    if (file && file.size > 2 * 1024 * 1024) {
      $('#error').addClass('alert alert-danger');
      $('#error').append("El archivo " + file.name + " es muy pesado");
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error').addClass('alert alert-danger control-group');
      $('#error').append("Solo se permiten archivos PDF");
      return false;
    }
  }
});