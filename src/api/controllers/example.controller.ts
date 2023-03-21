import { Request, Response, Router } from 'express';

import asyncMiddleware from '../middlewares/async.middleware';
import ExampleService from '../services/example.service';

/**
 * Example Controller class responsible for handling example requests.
 */
export default class ExampleController {
  public static router = Router({ mergeParams: true });

  /**
   * Register the example route
   * @returns Router - Returns the router instance for the ExampleController
   */
  public static register(): Router {
    this.router.get('/example',
      asyncMiddleware(this.dummy.bind(this))
    );

    return this.router;
  }

  /**
   * @route GET /example
   * @summary Method to get echo message.
   * @returns {Response} returns echo message.
   */
  private static async dummy(req: Request, res: Response): Promise<Response> {
    const {echo} = req.query;

    const echoEntity = await ExampleService.echo(echo as string || '');

    return res.json({echo: echoEntity}).status(200);
  }
}
