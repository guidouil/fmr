Template.register.events({
  'click #registerbutton': function (evt, tmpl) {
    evt.preventDefault();
    var emailinput = tmpl.find('#emailinput').value;
    var valid = true;
    if(!validateEmail(emailinput)) {
      // email faux !
      $('#mail').addClass('has-error');
      $('#emailinput').focus();
      growl('Erreur', 'Adresse email invalide');
      var valid = false;
    };
    if (valid === true) {
      //@todo check duplicate email
      var eventId = Router.current().params._id;
      Attendees.insert({
        event: eventId,
        email: emailinput
      });
      swal("Great !", "You are now registered", "success");
      Router.go('home');
    };
  }
});