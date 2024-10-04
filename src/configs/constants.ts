export const APP_API_PREFIX = '/api/v1';

// errors
export const APP_ERRORS = {
  '400': 400,
  '404': 404,
  '500': 500,
};
export const APP_ERRORS_MESSAGE = {
  [APP_ERRORS['400']]: 'Bad Request',
  [APP_ERRORS['404']]: 'Not Found',
  [APP_ERRORS['500']]: 'Something went wrong',
};
