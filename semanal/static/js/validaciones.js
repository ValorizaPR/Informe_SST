/*
 *Función que valida el tamaño y tipo del archivo adjunto
 */
$("form#formInforme").submit(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var file = $('input[type="file"]')[0].files[0];
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