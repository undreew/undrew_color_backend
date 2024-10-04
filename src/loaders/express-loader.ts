import cors from 'cors';
import 'express-async-errors';
import { Application } from 'express';
import bodyParser, { json } from 'body-parser';

import routes from '../routes';
import { APP_API_PREFIX } from '../configs/constants';
import { NotFoundError } from '../models/not-found-error';
import { errorHandler } from '../middlewares/error-handler';

export default async (app: Application): Promise<void> => {
  app.use(cors());
  app.use(json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(APP_API_PREFIX, routes());

  app.all('/*', async (req, res, next) => {
    throw new NotFoundError();
  });

  app.use(errorHandler);

  console.log('Express loaded');
};
