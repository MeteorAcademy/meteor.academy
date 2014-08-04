Template.login.events({
   'submit .login': function(event, template) {
      event.preventDefault();

      var email = template.find('.log-email').value;
      var password = template.find('.log-password').value;

      Meteor.loginWithPassword(email, password, function(error) {
         if (error) {
            console.log('ERROR:  User is not logged in!');
         }
         else {
            console.log('User is logged in.');
         }
      });

      Router.go('home');
   }
})
