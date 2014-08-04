Template.login.events({
   'submit .login': function(event, template) {
      event.preventDefault();
      Router.go('home');
   }
})
