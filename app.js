/**
 * Created by Click lab
 */

 var hapi = require('hapi');
 var routes = require('./routes');
//var path = require('path');
 var mongoose = require('mongoose');
var Plugins = require('./plugins');
 var server = new hapi.Server();

 server.connection({port:3032});
mongoose.connect('mongodb://localhost/Userdata');
//console.log(Plugins);
/* Route **/
server.route({
 method:'GET',
 path:'/',
 handler:function(data,reply)
 {
 reply("Hello Akash");
 }

});

/**
 * Plugins
 */
/*
server.register(Plugins, function (err) {
 if (err) {
  server.error('Error while loading plugins : ' + err)
 } else {
  server.log('info', 'Plugins Loaded')
 }
 server.start(function () {
  server.log('info', 'Server running at: ' + server.info.uri);
 });
});*/



/* get all Routes */

routes.forEach(function(api)
{
 server.route(api);
});

/* Start Server */
 server.start(function()
 {

  console.log("Server Started",server.info.uri);


 });


