const request = require('supertest');
const app = require('../app');

//Route test google
it('GET /places/position/:latitude/:longitude/:radius', async () => {
    const res = await request(app).get('/places/position/51/3/20000');
   
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(true);
   });