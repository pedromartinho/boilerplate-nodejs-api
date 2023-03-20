import {ObjectSchema} from 'joi';
import { Request, Response, NextFunction } from 'express';

export default class ValidatorMiddleware {
  /**
   * @summary function for validating properties from query params against the provided schema
   * @param schema - Joi schema object for validation
   * @returns a middleware function for validating request query params against the provided schema
   */
  public static properties(schema: ObjectSchema): (req: Request, res: Response, next: NextFunction) => void {
    return (req: Request, res: Response, next: NextFunction) => {
      const validationResult = schema.validate(req.query);
      if (validationResult.error){
        next(validationResult.error);
      }
      next();
    };
  }
}
