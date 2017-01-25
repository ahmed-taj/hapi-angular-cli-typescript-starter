import test from 'ava';
import { app } from '../../bin/app';


test('GET /api', t => {
  const request = {
    method: 'GET',
    url: '/api'
  };

  return app.inject(request)
    .then(response => {
      t.is(response.statusCode, 200);
      t.is(JSON.parse(response.payload).message, 'Hello world from Hapi!');
    });
});
