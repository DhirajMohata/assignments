const app = require("../02-ratelimitter");

const request = require('supertest');
const assert = require('assert');
describe('GET /user', function () {
  const userID = 'testId'
  it('One request responds back correctly', function(done) {
    request(app)
      .get('/user')
      .set('user-id', userID)
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });

  it('Four request responds back correctly', function(done) {
      for (let i = 0; i<3; i++) {
        request(app).get('/user').set('user-id', userID).then();
      }
      request(app).get('/user').set('user-id', 'dhiraj').then();
      request(app)
        .get('/user')
        .set('user-id', userID)
        .then((response) => {
          expect(response.status).toBe(200);
          done();
        });
  });

  it('5 or more requests and waiting returns a 200', function(done) {
      for (let i = 0; i<5; i++) {
        request(app).get('/user').set('user-id', userID).then();
      }
      setTimeout(function() {
      request(app)
        .get('/user')
        .set('user-id', userID)
        .then((response) => {
          expect(response.status).toBe(200);
          done();
        });
      }, 2000);
  });
});

