const chai = require('chai');
const chaiHttp = require('chai-http');

let server;

// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaiHttp);
// Our parent block
describe('/api/v1/meals', () => {
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
  describe('/GET meals', () => {
    it('it should GET all meals', (done) => {
      chai.request(server)
        .get('/api/v1/meals')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/POST meals', () => {
    it('it should create a new meal', (done) => {
      const meal = {
        name: "Beans",

      };
      chai.request(server)
        .post('/api/v1/meals')
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
      chai.request(server)
        .post('/api/v1/meals')
        .send(meal)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
  describe('PUT/:meal-id/name', () => {
    it('it should throw an error', (done) => {
      chai.request(server)
        .put('/api/v1/meals/10')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
    it('it should throw an error', (done) => {
      chai.request(server)
        .put('/api/v1/meals/2')
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
        .put('/api/v1/meals/1')
        .send({
          name: "doughnuts",
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  /*
* Test the /DELETE/:id route
*/
  describe('/DELETE/:id book', () => {
    it('it should DELETE succesfully', (done) => {
      chai.request(server)
        .delete('/api/v1/meals/2')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it('it should throw an error', (done) => {
      chai.request(server)
        .delete('/api/v1/meals/20')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
