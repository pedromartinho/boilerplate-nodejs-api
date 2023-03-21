import { Example } from '../../entities/example.entity';
import ExampleService from '../../services/example.service';

describe('ExampleService', () => {
  describe('echo', () => {
    it('should work as expected', async () => {
      const example = new Example();
      example.name = 'test';
      await example.save();
      const echoName = 'echo-name';

      const echo = await  ExampleService.echo(echoName);

      expect(echo.name).toEqual(echoName);
      expect(echo.example.id).not.toEqual(example.id);
    });
  });
});
