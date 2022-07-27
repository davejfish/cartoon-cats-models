const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('cats routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/cats should return a list of cats', async () => {
    const res = await request(app).get('/cats');
    
    expect(res.body.length).toEqual(4);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
    });
  });

  it('/cats/:id should return detail of a cat', async () => {
    const res = await request(app).get('/cats/1');
    
    expect(res.body).toEqual({
      id: '1',
      name: 'doug',
      type: 'black cat',
    });
  });
  

  afterAll(() => {
    pool.end();
  });
});
