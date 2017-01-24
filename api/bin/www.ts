import { server } from '../app';

// Start the server
server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Running at:', server.info.uri);
});
