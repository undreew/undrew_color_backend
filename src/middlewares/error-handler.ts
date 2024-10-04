import { APP_ERRORS, APP_ERRORS_MESSAGE } from '@configs/constants';
import { CustomError } from '@models/custom-error';
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof CustomError) {
    return res
      .status(error.statusCode)
      .send({ errors: error.serializeErrors() });
  }

  res.status(APP_ERRORS[500]).send({
    errors: [{ message: APP_ERRORS_MESSAGE[500] }],
  });
};
