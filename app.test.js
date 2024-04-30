const request = require('supertest');
const { app, server } = require('./app');

afterAll(() => {
  server.close(); // Ensure the server closes after tests
});

describe('GET /todo', () => {
  it('should fetch todos', async () => {
    const res = await request(app).get('/todo');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(expect.any(Object)); // Add more specific checks based on your expected response structure
  });
});

describe('POST /todo', () => {
    it('should respond with not implemented status', async () => {
      const res = await request(app)
        .post('/todo')
        .send({ task: 'Write Integration Test', completed: false });
      expect(res.statusCode).toBe(501);
      expect(res.body).toEqual({ error: 'Not implemented yet' });
    });
  });
  
  describe('PUT /todo/:id', () => {
    it('should respond with not implemented status', async () => {
      const res = await request(app)
        .put('/todo/1')
        .send({ task: 'Update Integration Test', completed: true });
      expect(res.statusCode).toBe(501);
      expect(res.body).toEqual({ error: 'Not implemented yet' });
    });
  });
  
  describe('DELETE /todo/:id', () => {
    it('should respond with not implemented status', async () => {
      const res = await request(app)
        .delete('/todo/1');
      expect(res.statusCode).toBe(501);
      expect(res.body).toEqual({ error: 'Not implemented yet' });
    });
  });