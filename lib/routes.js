FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { top: 'Header', main: 'Home', bottom: 'Footer' } );
  },
  name: 'Home'
});

FlowRouter.route( '/overview', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { top: 'Header', main: 'Overview', bottom: 'Footer' } );
  },
  name: 'Overview'
});

FlowRouter.route( '/login', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'Login' } );
  },
  name: 'Login'
});

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render( 'applicationLayout', {main: 'Error404'} );
  },
  name: 'Error404'
};
