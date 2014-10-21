Template.edit.events({
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
    var valid = true;
    if(!validateEmail(emailinput)) {
      // email faux !
      $('#mail').addClass('has-error');
      $('#emailinput').focus();
      growl('Erreur', 'Adresse email invalide');
      var valid = false;
    };
    if (valid === true) {
      var eventId = Router.current().params._id;
      Events.update({_id: eventId}, { $set: {
        title: titleinput,
        desc: descinput,
        email: emailinput,
        date: dateinput,
        time: timeinput
      }});
      growl('OK', 'Event succesfully updated', 'success');
      Router.go('home');
    };
  }
});