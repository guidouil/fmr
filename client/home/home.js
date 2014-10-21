Template.home.helpers({
  Events: function () {
    return Events.find().fetch();
  }
});
Template.home.events({
  'click .register': function (evt, tmpl) {
    evt.preventDefault();
    var eventId = evt.currentTarget.attributes.id.value;
    console.log(eventId);
  }
});