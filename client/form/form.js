Template.form.rendered=function() {
  $('#dateinput').datepicker({
    format: 'dd/mm/yyyy',
    startDate: '+1d'
  });
  $('.clockpicker').clockpicker();
}