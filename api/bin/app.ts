import * as Hapi from 'hapi';
import * as inert from 'inert';
import * as Path from 'path';
import * as Config from '../conf';

// Create a app with a host and port
const app = new Hapi.Server();

app.connection({
  host: Config.HOST,
  port: Config.PORT,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, '..', 'public')
    }
  }
});

// Add the route
app.route({
  method: 'GET',
  path: '/api',
  handler: function (request, reply) {
    return reply({ 'message': 'Hello world from Hapi!' });
  }
});

app.register(inert, (err) => {
  if (err) {
    throw err;
  }

  // Route static files and Angular routes
  app.route({
    method: 'GET',
    path: '/{file*}',
    handler: function (req, reply, next) {
      // Supported static files
      const reg = /\.(js|css|eot|woff|ttf|svg|png|jpg|jpeg|ico)$/i;

      if (req.params['file'] && reg.test(req.params['file'])) {
        reply.file(req.params['file']);
      } else {
        reply.file('index.html');
      }
    }
  });
});

// Start the app
app.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Running at:', app.info.uri);
});

export { app };
