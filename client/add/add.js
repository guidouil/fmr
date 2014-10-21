Template.add.rendered=function() {
  $('#dateinput').datepicker({
    format: 'dd/mm/yyyy',
    startDate: '+1d'
  });
  $('.clockpicker').clockpicker();
}

Template.add.events({
  'click #savebutton': function (evt,tmpl) {
    evt.preventDefault();
    var titleinput = tmpl.find('#titleinput').value;
    var descinput = tmpl.find('#descinput').value;
    var emailinput = tmpl.find('#emailinput').value;
    var dateinput = tmpl.find('#dateinput').value;
    var timeinput = tmpl.find('#timeinput').value;
    var createddate = Date.now();
    check(titleinput, String);
    check(descinput, String);
    check(emailinput, String);
    check(dateinput, String);
    var eventId = Events.insert({
      title: titleinput,
      desc: descinput,
      email: emailinput,
      date: dateinput,
      time: timeinput,
      created: createddate,
      owner: Meteor.userId()
    });
    console.log(eventId);
    Router.go('home');
  }
});