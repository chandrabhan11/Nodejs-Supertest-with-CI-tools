
const request = require('supertest');
const app = 'http://0.0.0.0:3000';
const expect = require('chai').expect;

describe('API Tests', () => {
    describe('GET /user/list', () => {
        it('should return two users', (done) => {
            request(app)
                .get('/user/list')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.body.data).to.be.an('array');
                    expect(res.body.total).to.equal(2);
                    done();
                });
        });
    });

    describe('POST /users/create', () => {
        it('should create a new user', (done) => {
            request(app)
                .post('/user/create')
                .send({
                    name: 'John Doe',
                    email: 'johndoe@example.com',
                })
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.body.message).to.equal('Create successfully');
                    expect(res.body.data.name).to.equal('John Doe');
                    expect(res.body.data.email).to.equal('johndoe@example.com');
                    done();
                });
        });
    });

    describe('GET /user/list', () => {
        it('should return 3 users', (done) => {
            request(app)
                .get('/user/list')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.body.data).to.be.an('array');
                    expect(res.body.total).to.equal(3);
                    done();
                });
        });
    });
});
