import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  node: process.env.NODE_ENV || 'development',
  app: {
    name: 'example-api',
    host: process.env.APP_HOST || 'http://localhost',
    port: process.env.APP_PORT || '4000',
  },
};