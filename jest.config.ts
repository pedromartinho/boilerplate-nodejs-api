import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'node',
  modulePathIgnorePatterns: [
    'node_modules',
    'dist',
  ],
  testTimeout: 10000,
  preset: 'ts-jest',
  globalSetup: `./src/api/tests/globalSetup.ts`,
  setupFilesAfterEnv: [
    `./src/api/tests/jest.setup.ts`,
    "./src/api/tests/testsSetup.ts"
  ],
};

export default config;
