import typeormConfig from './../configs/typeorm.config';

export class TypeormInitializer {
  public static async init(): Promise<void> {
    try {
      await typeormConfig.initialize();

      console.log('Data Source has been initialized!');
    } catch (err: any) {
      console.error('Error during Data Source initialization:', err);
    }
  }
}
