import express, { Application } from 'express';
import { APP_PORT } from '@configs/environment';

interface ServerArguments {
  loaders: (app: Application) => Promise<void>;
}

export const startServer = async (args: ServerArguments) => {
  const { loaders } = args;

  const app: Application = express();

  await loaders(app);

  app.listen(APP_PORT, () =>
    console.log(`Server running on port ${APP_PORT}`),
  );
};
