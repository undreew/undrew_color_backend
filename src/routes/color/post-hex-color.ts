import { Router } from 'express';
import { body } from 'express-validator';

import postHexColor from '@controllers/color/post-hex-color';

export default (router: Router) => {
  router.post('/hex-color', postHexColor);
};
