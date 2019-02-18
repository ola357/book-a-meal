import { should as _should, use, request } from 'chai';
import chaiHttp from 'chai-http';

let server;

// eslint-disable-next-line no-unused-vars
const should = _should();

use(chaiHttp);
// Our parent block
describe('/api/v1/orders', () => {
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
  describe('/GET orders', () => {
    it('it should GET all orders', (done) => {
      request(server)
        .get('/api/v1/orders')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/POST orders', () => {
    it('it should create a new order', (done) => {
      const order = {
        name: "Beans",

      };
      request(server)
        .post('/api/v1/orders')
        .send(order)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it('validation logic should kick in', (done) => {
      const order = {
        name: "T",
      };
      request(server)
        .post('/api/v1/orders')
        .send(order)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
  describe('PUT/:order-id/name', () => {
    it('it should throw an error', (done) => {
      request(server)
        .put('/api/v1/orders/10')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
    it('it should throw an error', (done) => {
      request(server)
        .put('/api/v1/orders/2')
        .send({
          name: "m",
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('it should PUT succesfully', (done) => {
      request(server)
        .put('/api/v1/orders/1')
        .send({
          name: "doughnuts",
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
