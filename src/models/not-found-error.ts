import { CustomError } from './custom-error';
import { APP_ERRORS, APP_ERRORS_MESSAGE } from '@configs/constants';

export class NotFoundError extends CustomError {
  statusCode = APP_ERRORS[404];

  constructor() {
    super('Route not found');
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: APP_ERRORS_MESSAGE[404] }];
  }
}
