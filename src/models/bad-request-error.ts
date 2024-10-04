import { CustomError } from './custom-error';
import { APP_ERRORS } from '@configs/constants';

export class BadRequestError extends CustomError {
  statusCode = APP_ERRORS[400];

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
