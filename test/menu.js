import { should as _should, use, request } from 'chai';
import chaiHttp from 'chai-http';

let server;

// eslint-disable-next-line no-unused-vars
const should = _should();

use(chaiHttp);
// Our parent block
describe('/api/v1/menu', () => {
  beforeEach((done) => { // Before each test we empty the database
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line global-require
    server = require('../app');
    done();
  });
  afterEach(() => {
    server.close();
  });
  /*
  * Test the /GET route
  */
  describe('/GET menu', () => {
    it('it should GET all menu', (done) => {
      request(server)
        .get('/api/v1/menu')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/POST menu', () => {
    it('it should create a new meal', (done) => {
      const meal = {
        name: "Beans",

      };
      request(server)
        .post('/api/v1/menu')
        .send(meal)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it('validation logic should kick in', (done) => {
      const meal = {
        name: "T",
      };
      request(server)
        .post('/api/v1/menu')
        .send(meal)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
