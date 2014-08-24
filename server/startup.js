Meteor.startup(function() {
   Accounts.loginServiceConfiguration.remove({
      service: 'meteor-developer'
   });

   Accounts.loginServiceConfiguration.insert({
      service: 'meteor-developer',
      clientId: 'HqBrJkT6D8u2osBES',
      secret: 'sc9ba5HNx5M6jxDhTFLomdN4PRotnMXLnA'
   });
});
