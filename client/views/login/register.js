Template.register.events({
   'submit .register': function(event, template) {
      event.preventDefault();

      var email = template.find('.reg-email').value;
      var password = template.find('.reg-password').value;

      Accounts.createUser({email: email, password: password}, function(error) {
         if (error) {
            console.log('User was not registered.');
         }
         else {
            console.log('User was registered successfully.');
         }
      });

      Router.go('home');
   }
});
