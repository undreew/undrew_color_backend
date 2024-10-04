import {
  ValidationError,
  FieldValidationError,
} from 'express-validator';
import { CustomError } from './custom-error';
import { APP_ERRORS } from '@configs/constants';

export class RequestValidationError extends CustomError {
  statusCode = APP_ERRORS[400];

  constructor(public errors: ValidationError[]) {
    super('Invalid request paramaters');

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((item) => {
      const _item = item as FieldValidationError;
      return {
        message: _item.msg,
        field: _item.path,
      };
    });
  }
}
