const chai = require('chai');
const chaiHttp = require('chai-http');

let server;

// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaiHttp);
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
      chai.request(server)
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
      chai.request(server)
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
      chai.request(server)
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
      chai.request(server)
        .put('/api/v1/orders/10')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
    it('it should throw an error', (done) => {
      chai.request(server)
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
      chai.request(server)
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
