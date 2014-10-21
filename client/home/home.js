Template.home.helpers({
  Events: function () {
    return Events.find().fetch();
  },
  isOwner: function (eventId) {
    var oEvent = Events.findOne({_id: eventId});
    if (oEvent.owner === Meteor.userId()) {
      return true;
    };
    return false;
  },
  attendees: function (eventId) {
    return Attendees.find({event: eventId}).count();
  }
});
Template.home.events({
  'click .register': function (evt, tmpl) {
    evt.preventDefault();
    var eventId = evt.currentTarget.attributes.id.value;
    console.log(eventId);
  }
});