/**
 * Example class responsible for example logic
 */
export default class ExampleService {
  /**
   * Method that returns an echoed message
   * @param {string} echoMessage - Message to echo
   * @returns {{echo: string}} - Echo response
   */
  public static echo(echoMessage: string): {echo: string} {
    return {echo: echoMessage};
  }
}
