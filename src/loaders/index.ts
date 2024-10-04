import { Application } from 'express';
import expressLoader from './express-loader';

export default async (app: Application): Promise<void> => {
  await expressLoader(app);
};
