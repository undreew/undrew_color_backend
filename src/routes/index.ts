import { Router } from 'express';
import postHexColor from './color/post-hex-color';

export default (): Router => {
  const router = Router();

  postHexColor(router);

  return router;
};
