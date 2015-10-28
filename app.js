/**
 * Created by Click lab
 */

 var hapi = require('hapi');
 var routes = require('./routes');
 var mongoose = require('mongoose');

 var server = new hapi.Server();

 server.connection({port:3031});

/* Route **/
server.route({
 method:'GET',
 path:'/',
 handler:function(data,reply)
 {
 reply("Hello Akash");
 }

});


/* get all Routes */

routes.forEach(function(api)
{
 server.route(api);
});

/* Start Server */
 server.start(function()
 {

  console.log("Server Started");
  mongoose.connect('mongodb://localhost/Userdata');
 	
 });