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
});