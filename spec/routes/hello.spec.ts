import { expect } from 'chai';
import { app } from '../../bin/app';

describe('GET /api ', () => {
  it('should return hello world', () => {
    return app.inject({ method: 'GET', url: '/api' })
      .then(res => {
        expect(res.statusCode).to.eql(200);
        expect(res.payload).to.eql('{"message":"Hello world from Hapi!"}');
      });
  });
});
