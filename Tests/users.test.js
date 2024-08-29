const request = require('supertest');
const app = require('../app');

//Route test reponse bakend
it('GET /users/test', async () => {
 const res = await request(app).get('/users/test');

 expect(res.statusCode).toBe(200);
 expect(res.body.result).toEqual("Test response backend");
});

//Route test user signin
it('POST /users/signin', async () => {
    const res = await request(app).post('/users/signin').send({
      email: 'mat@hmail.com',
      password: 'mat',
    });
   
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(true);
   });
