import typeormConfig from '../../configs/typeorm.config';

module.exports = async () => {
  const connection = await typeormConfig.initialize();

  await connection.dropDatabase();
  await connection.runMigrations();
  await connection.destroy();
};
