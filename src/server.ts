import { env } from './configs/env.config';
import App from './initializers/app';
import { TypeormInitializer } from './initializers/typeorm.initializer';

(async () => {
  await TypeormInitializer.init();
  App.listen(env.app.port, () => {
    console.log(`Server listening at ${env.app.host}:${env.app.port}`);
  });
})();