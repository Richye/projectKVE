FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { top: 'Header', main: 'Home', bottom: 'Footer' } );
  },
  name: 'Home',
  title: 'KVE Project | Home'
});

FlowRouter.route( '/overview', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { top: 'Header', main: 'Overview', bottom: 'Footer'} );
  },
  name: 'Overview',
  title: 'KVE Project | Overview'
});

FlowRouter.route( '/login', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'Login' } );
  },
  name: 'Login',
  title: 'Login'
});

FlowRouter.route( '/profile', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { top: 'Header', main: 'Profile', bottom: 'Footer' } );
  },
  name: 'Profile',
  title: 'Mans profils'
});

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'Error404' } );
  },
  name: 'Error404',
  title: 'Something goes wrong...'
};
