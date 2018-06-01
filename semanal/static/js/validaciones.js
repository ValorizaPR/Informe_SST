/*
 * Funciones que validan el tamaño y tipo del archivo adjunto
 */
$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_furat1')[0].files[0];
    $('#error1').empty();
    $('#error1').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error1').addClass('alert alert-danger control-group');
      $('#error1').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error1').addClass('alert alert-danger control-group');
      $('#error1').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_investigacion_acc1')[0].files[0];
    $('#error2').empty();
    $('#error2').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error2').addClass('alert alert-danger control-group');
      $('#error2').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error2').addClass('alert alert-danger control-group');
      $('#error2').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_leccion1')[0].files[0];
    $('#error3').empty();
    $('#error3').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error3').addClass('alert alert-danger control-group');
      $('#error3').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error3').addClass('alert alert-danger control-group');
      $('#error3').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_testigos1')[0].files[0];
    $('#error4').empty();
    $('#error4').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error4').addClass('alert alert-danger control-group');
      $('#error4').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error4').addClass('alert alert-danger control-group');
      $('#error4').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_incapacidad_acc_laboral1')[0].files[0];
    $('#error5').empty();
    $('#error5').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error5').addClass('alert alert-danger control-group');
      $('#error5').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error5').addClass('alert alert-danger control-group');
      $('#error5').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_carta_eps1')[0].files[0];
    $('#error6').empty();
    $('#error6').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error6').addClass('alert alert-danger control-group');
      $('#error6').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error6').addClass('alert alert-danger control-group');
      $('#error6').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_carta_ministerio1')[0].files[0];
    $('#error7').empty();
    $('#error7').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error7').addClass('alert alert-danger control-group');
      $('#error7').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error7').addClass('alert alert-danger control-group');
      $('#error7').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_accidente1')[0].files[0];
    $('#error8').empty();
    $('#error8').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error8').addClass('alert alert-danger control-group');
      $('#error8').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error8').addClass('alert alert-danger control-group');
      $('#error8').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_furat2')[0].files[0];
    $('#error9').empty();
    $('#error9').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error9').addClass('alert alert-danger control-group');
      $('#error9').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error9').addClass('alert alert-danger control-group');
      $('#error9').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_investigacion_acc2')[0].files[0];
    $('#error10').empty();
    $('#error10').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error10').addClass('alert alert-danger control-group');
      $('#error10').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error10').addClass('alert alert-danger control-group');
      $('#error10').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_leccion2')[0].files[0];
    $('#error11').empty();
    $('#error11').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error11').addClass('alert alert-danger control-group');
      $('#error11').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error11').addClass('alert alert-danger control-group');
      $('#error11').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_testigos2')[0].files[0];
    $('#error12').empty();
    $('#error12').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error12').addClass('alert alert-danger control-group');
      $('#error12').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error12').addClass('alert alert-danger control-group');
      $('#error12').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_incapacidad_acc_laboral2')[0].files[0];
    $('#error13').empty();
    $('#error13').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error13').addClass('alert alert-danger control-group');
      $('#error13').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error13').addClass('alert alert-danger control-group');
      $('#error13').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_carta_eps2')[0].files[0];
    $('#error14').empty();
    $('#error14').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error14').addClass('alert alert-danger control-group');
      $('#error14').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error14').addClass('alert alert-danger control-group');
      $('#error14').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_carta_ministerio2')[0].files[0];
    $('#error15').empty();
    $('#error15').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error15').addClass('alert alert-danger control-group');
      $('#error15').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error15').addClass('alert alert-danger control-group');
      $('#error15').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_accidente2')[0].files[0];
    $('#error16').empty();
    $('#error16').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error16').addClass('alert alert-danger control-group');
      $('#error16').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error16').addClass('alert alert-danger control-group');
      $('#error16').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_furat3')[0].files[0];
    $('#error17').empty();
    $('#error17').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error17').addClass('alert alert-danger control-group');
      $('#error17').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error17').addClass('alert alert-danger control-group');
      $('#error17').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_investigacion_acc3')[0].files[0];
    $('#error18').empty();
    $('#error18').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error18').addClass('alert alert-danger control-group');
      $('#error18').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error18').addClass('alert alert-danger control-group');
      $('#error18').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_leccion3')[0].files[0];
    $('#error19').empty();
    $('#error19').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error19').addClass('alert alert-danger control-group');
      $('#error19').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error19').addClass('alert alert-danger control-group');
      $('#error19').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_testigos3')[0].files[0];
    $('#error20').empty();
    $('#error20').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error20').addClass('alert alert-danger control-group');
      $('#error20').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error20').addClass('alert alert-danger control-group');
      $('#error20').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_incapacidad_acc_laboral3')[0].files[0];
    $('#error21').empty();
    $('#error21').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error21').addClass('alert alert-danger control-group');
      $('#error21').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error21').addClass('alert alert-danger control-group');
      $('#error21').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_carta_eps3')[0].files[0];
    $('#error22').empty();
    $('#error22').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error22').addClass('alert alert-danger control-group');
      $('#error22').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error22').addClass('alert alert-danger control-group');
      $('#error22').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_carta_ministerio3')[0].files[0];
    $('#error23').empty();
    $('#error23').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error23').addClass('alert alert-danger control-group');
      $('#error23').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error23').addClass('alert alert-danger control-group');
      $('#error23').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_accidente3')[0].files[0];
    $('#error24').empty();
    $('#error24').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error24').addClass('alert alert-danger control-group');
      $('#error24').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error24').addClass('alert alert-danger control-group');
      $('#error24').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_incidente1')[0].files[0];
    $('#error25').empty();
    $('#error25').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error25').addClass('alert alert-danger control-group');
      $('#error25').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error25').addClass('alert alert-danger control-group');
      $('#error25').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_investigacion_inc1')[0].files[0];
    $('#error26').empty();
    $('#error26').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error26').addClass('alert alert-danger control-group');
      $('#error26').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error26').addClass('alert alert-danger control-group');
      $('#error26').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_incidente1')[0].files[0];
    $('#error27').empty();
    $('#error27').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error27').addClass('alert alert-danger control-group');
      $('#error27').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error27').addClass('alert alert-danger control-group');
      $('#error27').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_incidente2')[0].files[0];
    $('#error28').empty();
    $('#error28').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error28').addClass('alert alert-danger control-group');
      $('#error28').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error28').addClass('alert alert-danger control-group');
      $('#error28').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_investigacion_inc2')[0].files[0];
    $('#error29').empty();
    $('#error29').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error29').addClass('alert alert-danger control-group');
      $('#error29').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error29').addClass('alert alert-danger control-group');
      $('#error29').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_incidente2')[0].files[0];
    $('#error30').empty();
    $('#error30').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error30').addClass('alert alert-danger control-group');
      $('#error30').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error30').addClass('alert alert-danger control-group');
      $('#error30').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_incidente3')[0].files[0];
    $('#error31').empty();
    $('#error31').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error31').addClass('alert alert-danger control-group');
      $('#error31').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error31').addClass('alert alert-danger control-group');
      $('#error31').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_investigacion_inc3')[0].files[0];
    $('#error32').empty();
    $('#error32').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error32').addClass('alert alert-danger control-group');
      $('#error32').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error32').addClass('alert alert-danger control-group');
      $('#error32').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_incidente3')[0].files[0];
    $('#error33').empty();
    $('#error33').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error33').addClass('alert alert-danger control-group');
      $('#error33').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error33').addClass('alert alert-danger control-group');
      $('#error33').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_adj_licencias')[0].files[0];
    $('#error34').empty();
    $('#error34').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error34').addClass('alert alert-danger control-group');
      $('#error34').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error34').addClass('alert alert-danger control-group');
      $('#error34').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_adj_memorandos')[0].files[0];
    $('#error35').empty();
    $('#error35').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error35').addClass('alert alert-danger control-group');
      $('#error35').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error35').addClass('alert alert-danger control-group');
      $('#error35').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_adj_suspensiones')[0].files[0];
    $('#error36').empty();
    $('#error36').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error36').addClass('alert alert-danger control-group');
      $('#error36').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error36').addClass('alert alert-danger control-group');
      $('#error36').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_adj_incapacidades')[0].files[0];
    $('#error37').empty();
    $('#error37').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error37').addClass('alert alert-danger control-group');
      $('#error37').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error37').addClass('alert alert-danger control-group');
      $('#error37').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_epp')[0].files[0];
    $('#error38').empty();
    $('#error38').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error38').addClass('alert alert-danger control-group');
      $('#error38').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error38').addClass('alert alert-danger control-group');
      $('#error38').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_formato_epp')[0].files[0];
    $('#error39').empty();
    $('#error39').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error39').addClass('alert alert-danger control-group');
      $('#error39').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error39').addClass('alert alert-danger control-group');
      $('#error39').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_OyA')[0].files[0];
    $('#error40').empty();
    $('#error40').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error40').addClass('alert alert-danger control-group');
      $('#error40').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error40').addClass('alert alert-danger control-group');
      $('#error40').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_formato_OyA')[0].files[0];
    $('#error41').empty();
    $('#error41').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error41').addClass('alert alert-danger control-group');
      $('#error41').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error41').addClass('alert alert-danger control-group');
      $('#error41').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_act1')[0].files[0];
    $('#error42').empty();
    $('#error42').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error42').addClass('alert alert-danger control-group');
      $('#error42').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error42').addClass('alert alert-danger control-group');
      $('#error42').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act1_1')[0].files[0];
    $('#error43').empty();
    $('#error43').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error43').addClass('alert alert-danger control-group');
      $('#error43').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error43').addClass('alert alert-danger control-group');
      $('#error43').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act1_2')[0].files[0];
    $('#error44').empty();
    $('#error44').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error44').addClass('alert alert-danger control-group');
      $('#error44').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error44').addClass('alert alert-danger control-group');
      $('#error44').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act1_3')[0].files[0];
    $('#error45').empty();
    $('#error45').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error45').addClass('alert alert-danger control-group');
      $('#error45').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error45').addClass('alert alert-danger control-group');
      $('#error45').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_act2')[0].files[0];
    $('#error46').empty();
    $('#error46').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error46').addClass('alert alert-danger control-group');
      $('#error46').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error46').addClass('alert alert-danger control-group');
      $('#error46').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act2_1')[0].files[0];
    $('#error47').empty();
    $('#error47').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error47').addClass('alert alert-danger control-group');
      $('#error47').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error47').addClass('alert alert-danger control-group');
      $('#error47').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act2_2')[0].files[0];
    $('#error48').empty();
    $('#error48').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error48').addClass('alert alert-danger control-group');
      $('#error48').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error48').addClass('alert alert-danger control-group');
      $('#error48').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act2_3')[0].files[0];
    $('#error49').empty();
    $('#error49').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error49').addClass('alert alert-danger control-group');
      $('#error49').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error49').addClass('alert alert-danger control-group');
      $('#error49').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_act3')[0].files[0];
    $('#error50').empty();
    $('#error50').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error50').addClass('alert alert-danger control-group');
      $('#error50').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error50').addClass('alert alert-danger control-group');
      $('#error50').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act3_1')[0].files[0];
    $('#error51').empty();
    $('#error51').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error51').addClass('alert alert-danger control-group');
      $('#error51').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error51').addClass('alert alert-danger control-group');
      $('#error51').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act3_2')[0].files[0];
    $('#error52').empty();
    $('#error52').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error52').addClass('alert alert-danger control-group');
      $('#error52').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error52').addClass('alert alert-danger control-group');
      $('#error52').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act3_3')[0].files[0];
    $('#error53').empty();
    $('#error53').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error53').addClass('alert alert-danger control-group');
      $('#error53').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error53').addClass('alert alert-danger control-group');
      $('#error53').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_act4')[0].files[0];
    $('#error54').empty();
    $('#error54').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error54').addClass('alert alert-danger control-group');
      $('#error54').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error54').addClass('alert alert-danger control-group');
      $('#error54').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act4_1')[0].files[0];
    $('#error55').empty();
    $('#error55').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error55').addClass('alert alert-danger control-group');
      $('#error55').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error55').addClass('alert alert-danger control-group');
      $('#error55').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act4_2')[0].files[0];
    $('#error56').empty();
    $('#error56').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error56').addClass('alert alert-danger control-group');
      $('#error56').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error56').addClass('alert alert-danger control-group');
      $('#error56').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act4_3')[0].files[0];
    $('#error57').empty();
    $('#error57').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error57').addClass('alert alert-danger control-group');
      $('#error57').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error57').addClass('alert alert-danger control-group');
      $('#error57').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_act5')[0].files[0];
    $('#error58').empty();
    $('#error58').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error58').addClass('alert alert-danger control-group');
      $('#error58').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error58').addClass('alert alert-danger control-group');
      $('#error58').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act5_1')[0].files[0];
    $('#error59').empty();
    $('#error59').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error59').addClass('alert alert-danger control-group');
      $('#error59').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error59').addClass('alert alert-danger control-group');
      $('#error59').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act5_2')[0].files[0];
    $('#error60').empty();
    $('#error60').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error60').addClass('alert alert-danger control-group');
      $('#error60').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error60').addClass('alert alert-danger control-group');
      $('#error60').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act5_3')[0].files[0];
    $('#error61').empty();
    $('#error61').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error61').addClass('alert alert-danger control-group');
      $('#error61').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error61').addClass('alert alert-danger control-group');
      $('#error61').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_act6')[0].files[0];
    $('#error62').empty();
    $('#error62').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error62').addClass('alert alert-danger control-group');
      $('#error62').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error62').addClass('alert alert-danger control-group');
      $('#error62').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act6_1')[0].files[0];
    $('#error63').empty();
    $('#error63').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error63').addClass('alert alert-danger control-group');
      $('#error63').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error63').addClass('alert alert-danger control-group');
      $('#error63').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act6_2')[0].files[0];
    $('#error64').empty();
    $('#error64').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error64').addClass('alert alert-danger control-group');
      $('#error64').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error64').addClass('alert alert-danger control-group');
      $('#error64').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act6_3')[0].files[0];
    $('#error65').empty();
    $('#error65').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error65').addClass('alert alert-danger control-group');
      $('#error65').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error65').addClass('alert alert-danger control-group');
      $('#error65').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_act7')[0].files[0];
    $('#error66').empty();
    $('#error66').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error66').addClass('alert alert-danger control-group');
      $('#error66').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error66').addClass('alert alert-danger control-group');
      $('#error66').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act7_1')[0].files[0];
    $('#error67').empty();
    $('#error67').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error67').addClass('alert alert-danger control-group');
      $('#error67').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error67').addClass('alert alert-danger control-group');
      $('#error67').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act7_2')[0].files[0];
    $('#error68').empty();
    $('#error68').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error68').addClass('alert alert-danger control-group');
      $('#error68').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error68').addClass('alert alert-danger control-group');
      $('#error68').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act7_3')[0].files[0];
    $('#error69').empty();
    $('#error69').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error69').addClass('alert alert-danger control-group');
      $('#error69').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error69').addClass('alert alert-danger control-group');
      $('#error69').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_act8')[0].files[0];
    $('#error70').empty();
    $('#error70').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error70').addClass('alert alert-danger control-group');
      $('#error70').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error70').addClass('alert alert-danger control-group');
      $('#error70').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act8_1')[0].files[0];
    $('#error71').empty();
    $('#error71').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error71').addClass('alert alert-danger control-group');
      $('#error71').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error71').addClass('alert alert-danger control-group');
      $('#error71').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act8_2')[0].files[0];
    $('#error72').empty();
    $('#error72').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error72').addClass('alert alert-danger control-group');
      $('#error72').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error72').addClass('alert alert-danger control-group');
      $('#error72').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act8_3')[0].files[0];
    $('#error73').empty();
    $('#error73').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error73').addClass('alert alert-danger control-group');
      $('#error73').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error73').addClass('alert alert-danger control-group');
      $('#error73').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_act9')[0].files[0];
    $('#error74').empty();
    $('#error74').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error74').addClass('alert alert-danger control-group');
      $('#error74').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error74').addClass('alert alert-danger control-group');
      $('#error74').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act9_1')[0].files[0];
    $('#error75').empty();
    $('#error75').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error75').addClass('alert alert-danger control-group');
      $('#error75').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error75').addClass('alert alert-danger control-group');
      $('#error75').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act9_2')[0].files[0];
    $('#error76').empty();
    $('#error76').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error76').addClass('alert alert-danger control-group');
      $('#error76').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error76').addClass('alert alert-danger control-group');
      $('#error76').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act9_3')[0].files[0];
    $('#error77').empty();
    $('#error77').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error77').addClass('alert alert-danger control-group');
      $('#error77').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error77').addClass('alert alert-danger control-group');
      $('#error77').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_act10')[0].files[0];
    $('#error78').empty();
    $('#error78').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error78').addClass('alert alert-danger control-group');
      $('#error78').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error78').addClass('alert alert-danger control-group');
      $('#error78').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act10_1')[0].files[0];
    $('#error79').empty();
    $('#error79').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error79').addClass('alert alert-danger control-group');
      $('#error79').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error79').addClass('alert alert-danger control-group');
      $('#error79').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act10_2')[0].files[0];
    $('#error80').empty();
    $('#error80').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error80').addClass('alert alert-danger control-group');
      $('#error80').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error80').addClass('alert alert-danger control-group');
      $('#error80').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act10_3')[0].files[0];
    $('#error81').empty();
    $('#error81').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error81').addClass('alert alert-danger control-group');
      $('#error81').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error81').addClass('alert alert-danger control-group');
      $('#error81').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_act11')[0].files[0];
    $('#error82').empty();
    $('#error82').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error82').addClass('alert alert-danger control-group');
      $('#error82').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error82').addClass('alert alert-danger control-group');
      $('#error82').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act11_1')[0].files[0];
    $('#error83').empty();
    $('#error83').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error83').addClass('alert alert-danger control-group');
      $('#error83').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error83').addClass('alert alert-danger control-group');
      $('#error83').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act11_2')[0].files[0];
    $('#error84').empty();
    $('#error84').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error84').addClass('alert alert-danger control-group');
      $('#error84').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error84').addClass('alert alert-danger control-group');
      $('#error84').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act11_3')[0].files[0];
    $('#error85').empty();
    $('#error85').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error85').addClass('alert alert-danger control-group');
      $('#error85').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error85').addClass('alert alert-danger control-group');
      $('#error85').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_evidencia_act12')[0].files[0];
    $('#error86').empty();
    $('#error86').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error86').addClass('alert alert-danger control-group');
      $('#error86').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error86').addClass('alert alert-danger control-group');
      $('#error86').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act12_1')[0].files[0];
    $('#error87').empty();
    $('#error87').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error87').addClass('alert alert-danger control-group');
      $('#error87').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error87').addClass('alert alert-danger control-group');
      $('#error87').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act12_2')[0].files[0];
    $('#error88').empty();
    $('#error88').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error88').addClass('alert alert-danger control-group');
      $('#error88').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error88').addClass('alert alert-danger control-group');
      $('#error88').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_anexo_act12_3')[0].files[0];
    $('#error89').empty();
    $('#error89').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error89').addClass('alert alert-danger control-group');
      $('#error89').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error89').addClass('alert alert-danger control-group');
      $('#error89').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_registro_antes1')[0].files[0];
    $('#error90').empty();
    $('#error90').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error90').addClass('alert alert-danger control-group');
      $('#error90').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error90').addClass('alert alert-danger control-group');
      $('#error90').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_registro_despues1')[0].files[0];
    $('#error91').empty();
    $('#error91').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error91').addClass('alert alert-danger control-group');
      $('#error91').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error91').addClass('alert alert-danger control-group');
      $('#error91').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_registro_antes2')[0].files[0];
    $('#error92').empty();
    $('#error92').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error92').addClass('a85rt alert-danger control-group');
      $('#error92').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error92').addClass('alert alert-danger control-group');
      $('#error92').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_registro_despues2')[0].files[0];
    $('#error93').empty();
    $('#error93').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error93').addClass('alert alert-danger control-group');
      $('#error93').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error93').addClass('alert alert-danger control-group');
      $('#error93').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_registro_antes3')[0].files[0];
    $('#error94').empty();
    $('#error94').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error94').addClass('alert alert-danger control-group');
      $('#error94').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error94').addClass('alert alert-danger control-group');
      $('#error94').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_registro_despues3')[0].files[0];
    $('#error95').empty();
    $('#error95').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error95').addClass('alert alert-danger control-group');
      $('#error95').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error95').addClass('alert alert-danger control-group');
      $('#error95').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_registro_antes4')[0].files[0];
    $('#error96').empty();
    $('#error96').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error96').addClass('alert alert-danger control-group');
      $('#error96').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error96').addClass('alert alert-danger control-group');
      $('#error96').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_registro_despues4')[0].files[0];
    $('#error97').empty();
    $('#error97').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error97').addClass('alert alert-danger control-group');
      $('#error97').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error97').addClass('alert alert-danger control-group');
      $('#error97').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_registro_antes5')[0].files[0];
    $('#error98').empty();
    $('#error98').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error98').addClass('alert alert-danger control-group');
      $('#error98').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error98').addClass('alert alert-danger control-group');
      $('#error98').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('#id_registro_despues5')[0].files[0];
    $('#error99').empty();
    $('#error99').removeClass();

    if (file && file.size > 5 * 1024 * 1024) {
      $('#error99').addClass('alert alert-danger control-group');
      $('#error99').append("El archivo " + file.name + " es muy pesado");
      $('#oculto').show();
      return false;
    }

    if (file && file.type != 'application/pdf') {
      $('#error99').addClass('alert alert-danger control-group');
      $('#error99').append("Solo se permiten archivos PDF");
      $('#oculto').show();
      return false;
    }
  }
});

/* Fin validaciones tamaño y tipo del archivo adjunto */

/*
 * Función para mostrar/ocultar divs de accidentes
 * con teclado
 */
$('#id_acc_laboral').keyup(function() {
  var valor = $(this).val();

  switch(valor) {
    case '1':
      $('#ocultoAL1').show();
      $('#ocultoAL2').hide();
      $('#ocultoAL3').hide();
      break;
    case '2':
      $('#ocultoAL1').show();
      $('#ocultoAL2').show();
      $('#ocultoAL3').hide();
      break;
    case '3':
      $('#ocultoAL1').show();
      $('#ocultoAL2').show();
      $('#ocultoAL3').show();
      break;
    default:
      $('#ocultoAL1').hide();
      $('#ocultoAL2').hide();
      $('#ocultoAL3').hide();
      break;
  }
}).keyup();

/*
 * Función para mostrar/ocultar divs de accidentes
 * con mouse
 */
$('#id_acc_laboral').click(function() {
  var valor = $(this).val();

  switch(valor) {
    case '1':
      $('#ocultoAL1').show();
      $('#ocultoAL2').hide();
      $('#ocultoAL3').hide();
      break;
    case '2':
      $('#ocultoAL1').show();
      $('#ocultoAL2').show();
      $('#ocultoAL3').hide();
      break;
    case '3':
      $('#ocultoAL1').show();
      $('#ocultoAL2').show();
      $('#ocultoAL3').show();
      break;
    default:
      $('#ocultoAL1').hide();
      $('#ocultoAL2').hide();
      $('#ocultoAL3').hide();
      break;
  }
});

/*
 * Función para mostrar/ocultar divs de incidentes
 * con teclado
 */
$('#id_inc_laboral').keyup(function() {
  var valor = $(this).val();

  switch(valor) {
    case '1':
      $('#ocultoIL1').show();
      $('#ocultoIL2').hide();
      $('#ocultoIL3').hide();
      break;
    case '2':
      $('#ocultoIL1').show();
      $('#ocultoIL2').show();
      $('#ocultoIL3').hide();
      break;
    case '3':
      $('#ocultoIL1').show();
      $('#ocultoIL2').show();
      $('#ocultoIL3').show();
      break;
    default:
      $('#ocultoIL1').hide();
      $('#ocultoIL2').hide();
      $('#ocultoIL3').hide();
      break;
  }
}).keyup();

/*
 * Función para mostrar/ocultar divs de incidentes
 * con mouse
 */
$('#id_inc_laboral').click(function() {
  var valor = $(this).val();

  switch(valor) {
    case '1':
      $('#ocultoIL1').show();
      $('#ocultoIL2').hide();
      $('#ocultoIL3').hide();
      break;
    case '2':
      $('#ocultoIL1').show();
      $('#ocultoIL2').show();
      $('#ocultoIL3').hide();
      break;
    case '3':
      $('#ocultoIL1').show();
      $('#ocultoIL2').show();
      $('#ocultoIL3').show();
      break;
    default:
      $('#ocultoIL1').hide();
      $('#ocultoIL2').hide();
      $('#ocultoIL3').hide();
      break;
  }
});

/*
 * Función para mostrar/ocultar div de adjuntos licencias
 * con teclado
 */
$('#id_licencias').keyup(function() {
  var valor = $(this).val();

  if (valor > 0) {
    $('#ocultoLicencias').show();
  }
  else {
    $('#ocultoLicencias').hide();
  }
}).keyup();

/*
 * Función para mostrar/ocultar div de adjuntos licencias
 * con mouse
 */
$('#id_licencias').click(function() {
  var valor = $(this).val();

  if (valor > 0) {
    $('#ocultoLicencias').show();
  }
  else {
    $('#ocultoLicencias').hide();
  }
});

/*
 * Función para mostrar/ocultar div de adjuntos memorandos
 * con teclado
 */
$('#id_memorandos').keyup(function() {
  var valor = $(this).val();

  if (valor > 0) {
    $('#ocultoMemorandos').show();
  }
  else {
    $('#ocultoMemorandos').hide();
  }
}).keyup();

/*
 * Función para mostrar/ocultar div de adjuntos memorandos
 * con mouse
 */
$('#id_memorandos').click(function() {
  var valor = $(this).val();

  if (valor > 0) {
    $('#ocultoMemorandos').show();
  }
  else {
    $('#ocultoMemorandos').hide();
  }
});

/*
 * Función para mostrar/ocultar div de adjuntos suspensiones
 * con teclado
 */
$('#id_suspensiones').keyup(function() {
  var valor = $(this).val();

  if (valor > 0) {
    $('#ocultoSuspensiones').show();
  }
  else {
    $('#ocultoSuspensiones').hide();
  }
}).keyup();

/*
 * Función para mostrar/ocultar div de adjuntos suspensiones
 * con mouse
 */
$('#id_suspensiones').click(function() {
  var valor = $(this).val();

  if (valor > 0) {
    $('#ocultoSuspensiones').show();
  }
  else {
    $('#ocultoSuspensiones').hide();
  }
});

/*
 *Función para mostrar/ocultar div de pregunta incapacidad
 */
$('#id_pregunta_incapacidad').change(function() {
  var opcion = $(this).val();

  if (opcion != 'SI') {
    $('#ocultoPregunta').hide();
  }
  else {
    $('#ocultoPregunta').show();
  }
});

/*
 *Función para mostrar/ocultar div de acción correctiva EPP
 */
$('#id_tipo_accion_epp').change(function() {
  var opcion = $(this).val();

  if (opcion != 'ACCION CORRECTIVA') {
    $('#ocultoEPP').hide();
  }
  else {
    $('#ocultoEPP').show();
  }
});

/*
 *Función para mostrar/ocultar div de acción correctiva OyA
 */
$('#id_tipo_accion_OyA').change(function() {
  var opcion = $(this).val();

  if (opcion != 'ACCION CORRECTIVA') {
    $('#ocultoOyA').hide();
  }
  else {
    $('#ocultoOyA').show();
  }
});

/*
 * Función para mostrar/ocultar divs de actividades
 * con teclado
 */
$('#actividades').keyup(function() {
  var valor = $(this).val();

  switch(valor) {
    case '1':
      $('#ocultoAct1').show();
      $('#ocultoAct2').hide();
      $('#ocultoAct3').hide();
      $('#ocultoAct4').hide();
      $('#ocultoAct5').hide();
      $('#ocultoAct6').hide();
      $('#ocultoAct7').hide();
      $('#ocultoAct8').hide();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '2':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').hide();
      $('#ocultoAct4').hide();
      $('#ocultoAct5').hide();
      $('#ocultoAct6').hide();
      $('#ocultoAct7').hide();
      $('#ocultoAct8').hide();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '3':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').hide();
      $('#ocultoAct5').hide();
      $('#ocultoAct6').hide();
      $('#ocultoAct7').hide();
      $('#ocultoAct8').hide();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '4':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').hide();
      $('#ocultoAct6').hide();
      $('#ocultoAct7').hide();
      $('#ocultoAct8').hide();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '5':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      $('#ocultoAct6').hide();
      $('#ocultoAct7').hide();
      $('#ocultoAct8').hide();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '6':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      $('#ocultoAct6').show();
      $('#ocultoAct7').hide();
      $('#ocultoAct8').hide();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '7':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      $('#ocultoAct6').show();
      $('#ocultoAct7').show();
      $('#ocultoAct8').hide();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '8':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      $('#ocultoAct6').show();
      $('#ocultoAct7').show();
      $('#ocultoAct8').show();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '9':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      $('#ocultoAct6').show();
      $('#ocultoAct7').show();
      $('#ocultoAct8').show();
      $('#ocultoAct9').show();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '10':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      $('#ocultoAct6').show();
      $('#ocultoAct7').show();
      $('#ocultoAct8').show();
      $('#ocultoAct9').show();
      $('#ocultoAct10').show();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '11':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      $('#ocultoAct6').show();
      $('#ocultoAct7').show();
      $('#ocultoAct8').show();
      $('#ocultoAct9').show();
      $('#ocultoAct10').show();
      $('#ocultoAct11').show();
      $('#ocultoAct12').hide();
      break;
    case '12':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      $('#ocultoAct6').show();
      $('#ocultoAct7').show();
      $('#ocultoAct8').show();
      $('#ocultoAct9').show();
      $('#ocultoAct10').show();
      $('#ocultoAct11').show();
      $('#ocultoAct12').show();
      break;
    default:
      $('#ocultoAct1').hide();
      $('#ocultoAct2').hide();
      $('#ocultoAct3').hide();
      $('#ocultoAct4').hide();
      $('#ocultoAct5').hide();
      $('#ocultoAct6').hide();
      $('#ocultoAct7').hide();
      $('#ocultoAct8').hide();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
  }
}).keyup();

/*
 * Función para mostrar/ocultar divs de actividades
 * con mouse
 */
$('#actividades').click(function() {
  var valor = $(this).val();

  switch(valor) {
    case '1':
      $('#ocultoAct1').show();
      $('#ocultoAct2').hide();
      $('#ocultoAct3').hide();
      $('#ocultoAct4').hide();
      $('#ocultoAct5').hide();
      $('#ocultoAct6').hide();
      $('#ocultoAct7').hide();
      $('#ocultoAct8').hide();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '2':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').hide();
      $('#ocultoAct4').hide();
      $('#ocultoAct5').hide();
      $('#ocultoAct6').hide();
      $('#ocultoAct7').hide();
      $('#ocultoAct8').hide();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '3':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').hide();
      $('#ocultoAct5').hide();
      $('#ocultoAct6').hide();
      $('#ocultoAct7').hide();
      $('#ocultoAct8').hide();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '4':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').hide();
      $('#ocultoAct6').hide();
      $('#ocultoAct7').hide();
      $('#ocultoAct8').hide();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '5':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      $('#ocultoAct6').hide();
      $('#ocultoAct7').hide();
      $('#ocultoAct8').hide();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '6':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      $('#ocultoAct6').show();
      $('#ocultoAct7').hide();
      $('#ocultoAct8').hide();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '7':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      $('#ocultoAct6').show();
      $('#ocultoAct7').show();
      $('#ocultoAct8').hide();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '8':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      $('#ocultoAct6').show();
      $('#ocultoAct7').show();
      $('#ocultoAct8').show();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '9':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      $('#ocultoAct6').show();
      $('#ocultoAct7').show();
      $('#ocultoAct8').show();
      $('#ocultoAct9').show();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '10':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      $('#ocultoAct6').show();
      $('#ocultoAct7').show();
      $('#ocultoAct8').show();
      $('#ocultoAct9').show();
      $('#ocultoAct10').show();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
    case '11':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      $('#ocultoAct6').show();
      $('#ocultoAct7').show();
      $('#ocultoAct8').show();
      $('#ocultoAct9').show();
      $('#ocultoAct10').show();
      $('#ocultoAct11').show();
      $('#ocultoAct12').hide();
      break;
    case '12':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      $('#ocultoAct6').show();
      $('#ocultoAct7').show();
      $('#ocultoAct8').show();
      $('#ocultoAct9').show();
      $('#ocultoAct10').show();
      $('#ocultoAct11').show();
      $('#ocultoAct12').show();
      break;
    default:
      $('#ocultoAct1').hide();
      $('#ocultoAct2').hide();
      $('#ocultoAct3').hide();
      $('#ocultoAct4').hide();
      $('#ocultoAct5').hide();
      $('#ocultoAct6').hide();
      $('#ocultoAct7').hide();
      $('#ocultoAct8').hide();
      $('#ocultoAct9').hide();
      $('#ocultoAct10').hide();
      $('#ocultoAct11').hide();
      $('#ocultoAct12').hide();
      break;
  }
});

/*
 *Función para mostrar/ocultar div de acción correctiva Actividad 1
 */
$('#id_tipo_accion_act1').change(function() {
  var opcion = $(this).val();

  if (opcion != 'ACCION CORRECTIVA') {
    $('#ocultoCausasAct1').hide();
  }
  else {
    $('#ocultoCausasAct1').show();
  }
});

/*
 *Función para mostrar/ocultar div de acción correctiva Actividad 2
 */
$('#id_tipo_accion_act2').change(function() {
  var opcion = $(this).val();

  if (opcion != 'ACCION CORRECTIVA') {
    $('#ocultoCausasAct2').hide();
  }
  else {
    $('#ocultoCausasAct2').show();
  }
});

/*
 *Función para mostrar/ocultar div de acción correctiva Actividad 3
 */
$('#id_tipo_accion_act3').change(function() {
  var opcion = $(this).val();

  if (opcion != 'ACCION CORRECTIVA') {
    $('#ocultoCausasAct3').hide();
  }
  else {
    $('#ocultoCausasAct3').show();
  }
});

/*
 *Función para mostrar/ocultar div de acción correctiva Actividad 4
 */
$('#id_tipo_accion_act4').change(function() {
  var opcion = $(this).val();

  if (opcion != 'ACCION CORRECTIVA') {
    $('#ocultoCausasAct4').hide();
  }
  else {
    $('#ocultoCausasAct4').show();
  }
});

/*
 *Función para mostrar/ocultar div de acción correctiva Actividad 5
 */
$('#id_tipo_accion_act5').change(function() {
  var opcion = $(this).val();

  if (opcion != 'ACCION CORRECTIVA') {
    $('#ocultoCausasAct5').hide();
  }
  else {
    $('#ocultoCausasAct5').show();
  }
});

/*
 *Función para mostrar/ocultar div de acción correctiva Actividad 6
 */
$('#id_tipo_accion_act6').change(function() {
  var opcion = $(this).val();

  if (opcion != 'ACCION CORRECTIVA') {
    $('#ocultoCausasAct6').hide();
  }
  else {
    $('#ocultoCausasAct6').show();
  }
});

/*
 *Función para mostrar/ocultar div de acción correctiva Actividad 7
 */
$('#id_tipo_accion_act7').change(function() {
  var opcion = $(this).val();

  if (opcion != 'ACCION CORRECTIVA') {
    $('#ocultoCausasAct7').hide();
  }
  else {
    $('#ocultoCausasAct7').show();
  }
});

/*
 *Función para mostrar/ocultar div de acción correctiva Actividad 8
 */
$('#id_tipo_accion_act8').change(function() {
  var opcion = $(this).val();

  if (opcion != 'ACCION CORRECTIVA') {
    $('#ocultoCausasAct8').hide();
  }
  else {
    $('#ocultoCausasAct8').show();
  }
});

/*
 *Función para mostrar/ocultar div de acción correctiva Actividad 9
 */
$('#id_tipo_accion_act9').change(function() {
  var opcion = $(this).val();

  if (opcion != 'ACCION CORRECTIVA') {
    $('#ocultoCausasAct9').hide();
  }
  else {
    $('#ocultoCausasAct9').show();
  }
});

/*
 *Función para mostrar/ocultar div de acción correctiva Actividad 10
 */
$('#id_tipo_accion_act10').change(function() {
  var opcion = $(this).val();

  if (opcion != 'ACCION CORRECTIVA') {
    $('#ocultoCausasAct10').hide();
  }
  else {
    $('#ocultoCausasAct10').show();
  }
});

/*
 *Función para mostrar/ocultar div de acción correctiva Actividad 11
 */
$('#id_tipo_accion_act11').change(function() {
  var opcion = $(this).val();

  if (opcion != 'ACCION CORRECTIVA') {
    $('#ocultoCausasAct11').hide();
  }
  else {
    $('#ocultoCausasAct11').show();
  }
});

/*
 *Función para mostrar/ocultar div de acción correctiva Actividad 12
 */
$('#id_tipo_accion_act12').change(function() {
  var opcion = $(this).val();

  if (opcion != 'ACCION CORRECTIVA') {
    $('#ocultoCausasAct12').hide();
  }
  else {
    $('#ocultoCausasAct12').show();
  }
});

/*
 * Función para mostrar/ocultar div de acciones
 * en inspección EPP
 */
$('#addAccionEPP').click(function() {
  $('#ocultoAccEPP').show();
});

/*
 * Función para mostrar/ocultar div de acciones
 * en inspección OyA
 */
$('#addAccionOyA').click(function() {
  $('#ocultoAccOyA').show();
});

/*
 * Función para mostrar/ocultar div de acciones
 * en la actividad 1
 */
$('#addAccionAct1').click(function() {
  $('#ocultoAccAct1').show();
});

/*
 * Función para mostrar/ocultar div de acciones
 * en la actividad 2
 */
$('#addAccionAct2').click(function() {
  $('#ocultoAccAct2').show();
});

/*
 * Función para mostrar/ocultar div de acciones
 * en la actividad 3
 */
$('#addAccionAct3').click(function() {
  $('#ocultoAccAct3').show();
});

/*
 * Función para mostrar/ocultar div de acciones
 * en la actividad 4
 */
$('#addAccionAct4').click(function() {
  $('#ocultoAccAct4').show();
});

/*
 * Función para mostrar/ocultar div de acciones
 * en la actividad 5
 */
$('#addAccionAct5').click(function() {
  $('#ocultoAccAct5').show();
});

/*
 * Función para mostrar/ocultar div de acciones
 * en la actividad 6
 */
$('#addAccionAct6').click(function() {
  $('#ocultoAccAct6').show();
});

/*
 * Función para mostrar/ocultar div de acciones
 * en la actividad 7
 */
$('#addAccionAct7').click(function() {
  $('#ocultoAccAct7').show();
});

/*
 * Función para mostrar/ocultar div de acciones
 * en la actividad 8
 */
$('#addAccionAct8').click(function() {
  $('#ocultoAccAct8').show();
});

/*
 * Función para mostrar/ocultar div de acciones
 * en la actividad 9
 */
$('#addAccionAct9').click(function() {
  $('#ocultoAccAct9').show();
});

/*
 * Función para mostrar/ocultar div de acciones
 * en la actividad 10
 */
$('#addAccionAct10').click(function() {
  $('#ocultoAccAct10').show();
});

/*
 * Función para mostrar/ocultar div de acciones
 * en la actividad 11
 */
$('#addAccionAct11').click(function() {
  $('#ocultoAccAct11').show();
});

/*
 * Función para mostrar/ocultar div de acciones
 * en la actividad 12
 */
$('#addAccionAct12').click(function() {
  $('#ocultoAccAct12').show();
});

/*
 * Función para mostrar/ocultar divs de gestión
 * del cambio con teclado
 */
$('#cambios').keyup(function() {
  var valor = $(this).val();

  switch(valor) {
    case '1':
      $('#ocultoCambio1').show();
      $('#ocultoCambio2').hide();
      $('#ocultoCambio3').hide();
      $('#ocultoCambio4').hide();
      $('#ocultoCambio5').hide();
      break;
    case '2':
      $('#ocultoCambio1').show();
      $('#ocultoCambio2').show();
      $('#ocultoCambio3').hide();
      $('#ocultoCambio4').hide();
      $('#ocultoCambio5').hide();
      break;
    case '3':
      $('#ocultoCambio1').show();
      $('#ocultoCambio2').show();
      $('#ocultoCambio3').show();
      $('#ocultoCambio4').hide();
      $('#ocultoCambio5').hide();
      break;
    case '4':
      $('#ocultoCambio1').show();
      $('#ocultoCambio2').show();
      $('#ocultoCambio3').show();
      $('#ocultoCambio4').show();
      $('#ocultoCambio5').hide();
      break;
    case '5':
      $('#ocultoCambio1').show();
      $('#ocultoCambio2').show();
      $('#ocultoCambio3').show();
      $('#ocultoCambio4').show();
      $('#ocultoCambio5').show();
      break;
    default:
      $('#ocultoCambio1').hide();
      $('#ocultoCambio2').hide();
      $('#ocultoCambio3').hide();
      $('#ocultoCambio4').hide();
      $('#ocultoCambio5').hide();
      break;
  }
}).keyup();

/*
 * Función para mostrar/ocultar divs de gestión
 * del cambio con mouse
 */
$('#cambios').click(function() {
  var valor = $(this).val();

  switch(valor) {
    case '1':
      $('#ocultoCambio1').show();
      $('#ocultoCambio2').hide();
      $('#ocultoCambio3').hide();
      $('#ocultoCambio4').hide();
      $('#ocultoCambio5').hide();
      break;
    case '2':
      $('#ocultoCambio1').show();
      $('#ocultoCambio2').show();
      $('#ocultoCambio3').hide();
      $('#ocultoCambio4').hide();
      $('#ocultoCambio5').hide();
      break;
    case '3':
      $('#ocultoCambio1').show();
      $('#ocultoCambio2').show();
      $('#ocultoCambio3').show();
      $('#ocultoCambio4').hide();
      $('#ocultoCambio5').hide();
      break;
    case '4':
      $('#ocultoCambio1').show();
      $('#ocultoCambio2').show();
      $('#ocultoCambio3').show();
      $('#ocultoCambio4').show();
      $('#ocultoCambio5').hide();
      break;
    case '5':
      $('#ocultoCambio1').show();
      $('#ocultoCambio2').show();
      $('#ocultoCambio3').show();
      $('#ocultoCambio4').show();
      $('#ocultoCambio5').show();
      break;
    default:
      $('#ocultoCambio1').hide();
      $('#ocultoCambio2').hide();
      $('#ocultoCambio3').hide();
      $('#ocultoCambio4').hide();
      $('#ocultoCambio5').hide();
      break;
  }
});