import ExampleService from '../../services/example.service';

describe('ExampleService', () => {
  describe('echo', () => {
    it('should work as expected', async () => {
      const echo = ExampleService.echo('test');

      expect(echo).toEqual({echo: 'test'});
    });
  });
});
