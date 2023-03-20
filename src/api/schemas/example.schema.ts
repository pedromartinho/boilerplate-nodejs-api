import Joi from 'joi';

export const exampleSchema = Joi.object({
  echo: Joi.string().required(),
});
