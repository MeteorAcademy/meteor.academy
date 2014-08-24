Meteor.startup(function() {
   Accounts.loginServiceConfiguration.remove({
      service: 'meteor-developer'
   });

   Accounts.loginServiceConfiguration.insert({
      service: 'meteor-developer',
      credentialToken: 'HqBrJkT6D8u2osBES',
      credentialSecret: 'sc9ba5HNx5M6jxDhTFLomdN4PRotnMXLnA'
   });
});
