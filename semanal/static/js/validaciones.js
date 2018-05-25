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
    var file = $('#id_furat2')[0].files[0];
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
    var file = $('#id_investigacion_acc2')[0].files[0];
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
    var file = $('#id_leccion2')[0].files[0];
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
    var file = $('#id_testigos2')[0].files[0];
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
    var file = $('#id_incapacidad_acc_laboral2')[0].files[0];
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
    var file = $('#id_carta_eps2')[0].files[0];
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
    var file = $('#id_carta_ministerio2')[0].files[0];
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
    var file = $('#id_furat3')[0].files[0];
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
    var file = $('#id_investigacion_acc3')[0].files[0];
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
    var file = $('#id_leccion3')[0].files[0];
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
    var file = $('#id_testigos3')[0].files[0];
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
    var file = $('#id_incapacidad_acc_laboral3')[0].files[0];
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
    var file = $('#id_carta_eps3')[0].files[0];
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
    var file = $('#id_carta_ministerio3')[0].files[0];
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
    var file = $('#id_incidente1')[0].files[0];
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
    var file = $('#id_investigacion_inc1')[0].files[0];
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
    var file = $('#id_incidente2')[0].files[0];
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
    var file = $('#id_investigacion_inc2')[0].files[0];
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
    var file = $('#id_incidente3')[0].files[0];
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
    var file = $('#id_investigacion_inc3')[0].files[0];
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
    var file = $('#id_adj_licencias')[0].files[0];
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
    var file = $('#id_adj_memorandos')[0].files[0];
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
    var file = $('#id_adj_suspensiones')[0].files[0];
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
    var file = $('#id_evidencia_epp')[0].files[0];
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
    var file = $('#id_evidencia_OyA')[0].files[0];
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
    var file = $('#id_evidencia_act1')[0].files[0];
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
    var file = $('#id_evidencia_act2')[0].files[0];
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
    var file = $('#id_evidencia_act3')[0].files[0];
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
    var file = $('#id_evidencia_act4')[0].files[0];
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
    var file = $('#id_evidencia_act5')[0].files[0];
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
    var file = $('#id_registro_antes1')[0].files[0];
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
    var file = $('#id_registro_despues1')[0].files[0];
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
    var file = $('#id_registro_antes2')[0].files[0];
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
    var file = $('#id_registro_despues2')[0].files[0];
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
    var file = $('#id_registro_antes3')[0].files[0];
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
    var file = $('#id_registro_despues3')[0].files[0];
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
      break;
    case '2':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').hide();
      $('#ocultoAct4').hide();
      $('#ocultoAct5').hide();
      break;
    case '3':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').hide();
      $('#ocultoAct5').hide();
      break;
    case '4':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').hide();
      break;
    case '5':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      break;
    default:
      $('#ocultoAct1').hide();
      $('#ocultoAct2').hide();
      $('#ocultoAct3').hide();
      $('#ocultoAct4').hide();
      $('#ocultoAct5').hide();
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
      break;
    case '2':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').hide();
      $('#ocultoAct4').hide();
      $('#ocultoAct5').hide();
      break;
    case '3':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').hide();
      $('#ocultoAct5').hide();
      break;
    case '4':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').hide();
      break;
    case '5':
      $('#ocultoAct1').show();
      $('#ocultoAct2').show();
      $('#ocultoAct3').show();
      $('#ocultoAct4').show();
      $('#ocultoAct5').show();
      break;
    default:
      $('#ocultoAct1').hide();
      $('#ocultoAct2').hide();
      $('#ocultoAct3').hide();
      $('#ocultoAct4').hide();
      $('#ocultoAct5').hide();
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
 * Función para mostrar/ocultar divs de incidentes
 * con teclado
 */
$('#cambios').keyup(function() {
  var valor = $(this).val();

  switch(valor) {
    case '1':
      $('#ocultoCambio1').show();
      $('#ocultoCambio2').hide();
      $('#ocultoCambio3').hide();
      break;
    case '2':
      $('#ocultoCambio1').show();
      $('#ocultoCambio2').show();
      $('#ocultoCambio3').hide();
      break;
    case '3':
      $('#ocultoCambio1').show();
      $('#ocultoCambio2').show();
      $('#ocultoCambio3').show();
      break;
    default:
      $('#ocultoCambio1').hide();
      $('#ocultoCambio2').hide();
      $('#ocultoCambio3').hide();
      break;
  }
}).keyup();

/*
 * Función para mostrar/ocultar divs de incidentes
 * con mouse
 */
$('#cambios').click(function() {
  var valor = $(this).val();

  switch(valor) {
    case '1':
      $('#ocultoCambio1').show();
      $('#ocultoCambio2').hide();
      $('#ocultoCambio3').hide();
      break;
    case '2':
      $('#ocultoCambio1').show();
      $('#ocultoCambio2').show();
      $('#ocultoCambio3').hide();
      break;
    case '3':
      $('#ocultoCambio1').show();
      $('#ocultoCambio2').show();
      $('#ocultoCambio3').show();
      break;
    default:
      $('#ocultoCambio1').hide();
      $('#ocultoCambio2').hide();
      $('#ocultoCambio3').hide();
      break;
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