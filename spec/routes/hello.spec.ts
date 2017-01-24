import { expect, use } from 'chai';
import chaiHttp = require('chai-http');
import * as Config from '../../conf';
import { server } from '../../app';

const base_url = `http://${Config.HOST}:${Config.PORT}`;
use(chaiHttp);

describe('GET /api ', () => {
  it('should return hello world', () => {
    return server.inject({ method: 'GET', url: '/api' })
      .then(res => {
        expect(res.statusCode).to.eql(200);
        expect(res.payload).to.eql('{"message":"Hello world from Hapi!"}');
      });
  });
});
