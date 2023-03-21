import supertest from 'supertest';
import { DataSource } from 'typeorm';

import app from '../../initializers/app';
import typeormConfig from '../../configs/typeorm.config';

const request = supertest(app);

let connection: DataSource;

beforeAll(async () => {
  connection = await typeormConfig.initialize();
});

afterAll(async () => {
  if (connection) {
    await connection.destroy();
  }
});

export default request;
