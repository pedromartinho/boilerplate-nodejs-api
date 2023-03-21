import { DataSource } from 'typeorm';
import { env } from './env.config';

export default new DataSource({
  type: 'postgres',
  host: env.db.host,
  port: env.db.port,
  username: env.db.username,
  password: env.db.password,
  database: env.db.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: ['dist/database/migrations/*.js'],
  logging: ['error'],
  synchronize: false,
});
