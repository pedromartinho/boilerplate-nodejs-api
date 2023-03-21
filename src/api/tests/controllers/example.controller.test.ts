import request from '../jest.setup';

describe('ExampleController', () => {
  describe('echo', () => {
    it('should return an echo', async () => {
      const res = await request.get('/api/example');

      expect(res.body).toHaveProperty('echo');
      expect(res.status).toEqual(200);
    });
  });
});