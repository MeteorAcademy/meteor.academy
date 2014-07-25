Router.configure({
   layoutTemplate: 'layout',
   yieldTemplate: {
      header: {
         to: 'header'
      },
      footer: {
         to: 'footer'
      }
   }
});
