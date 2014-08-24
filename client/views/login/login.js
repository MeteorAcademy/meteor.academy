Template.login.events({
   'click .login': function() {
      // event.preventDefault();

      Meteor.loginWithMeteorDeveloperAccount(function(error) {
         if (error) {
            console.log('ERROR:  User is not logged in!');
         }
         else {
            console.log('SUCCESS:  User is logged in.');
         }
      });

      // Router.go('home');
   }
})
