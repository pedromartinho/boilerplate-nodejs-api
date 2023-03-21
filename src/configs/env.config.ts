import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  node: process.env.NODE_ENV || 'development',
  app: {
    name: 'example-api',
    host: process.env.APP_HOST || 'http://localhost',
    port: process.env.APP_PORT || '3050',
  },

  db: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME || 'example_user',
    password: (process.env.NODE_ENV === 'test' && 'example_pass') || process.env.DB_PASSWORD || 'example_pass',
    database: process.env.DB_DATABASE || 'example',
  },
};
