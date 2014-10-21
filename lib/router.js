Router.configure({
  layoutTemplate: 'layout'
});

var mustBeSignedIn = function(pause) {
    AccountsEntry.signInRequired(this);
};
Router.onBeforeAction(mustBeSignedIn, {
    except: ['entrySignIn', 'entrySignUp', 'entryForgotPassword', 'entryResetPassword', 'entryError', 'home']
});

Router.map( function () {
  this.route('home', {
    path: '/'
  });
  this.route('add', {
    path: '/add'
  });
  this.route('edit', {
    path: '/edit/:_id',
    data: function() {
      return Events.findOne({_id: this.params._id});
    }
  });
  this.route('register', {
    path: '/register/:_id',
    data: function() {
      return Events.findOne({_id: this.params._id});
    }
  });
});