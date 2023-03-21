import { Echo } from "../entities/echo.entity";
import { Example } from "../entities/example.entity";

/**
 * Example class responsible for example logic
 */
export default class ExampleService {
  /**
   * Method that returns an echoed message
   * @param {string} echoMessage - Message to echo
   * @returns {{echo: string}} - Echo response
   */
  public static async echo(echoMessage: string): Promise<Echo> {
    const example = new Example();
    example.name = 'test';
    await example.save();
    const echo = new Echo();
    echo.name = echoMessage;
    echo.example = example;

    return await echo.save();
  }
}
