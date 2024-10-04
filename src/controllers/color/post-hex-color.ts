import axios from 'axios';
import { Serialif } from 'types/serialif';
import { Request, Response } from 'express';

import { BadRequestError } from '@models/bad-request-error';
import { APP_COLOR_SERIALIF_API } from '@configs/environment';

function isErrorResponse(
  response: Serialif.Response,
): response is Serialif.ErrorResponse {
  return response.status === 'error';
}

export default async (req: Request, res: Response) => {
  const { color } = req.body;

  const { data } = await axios.get<Serialif.Response>(
    `${APP_COLOR_SERIALIF_API}${color}`,
  );

  if (isErrorResponse(data)) {
    throw new BadRequestError(data.error.message);
  }

  res.status(200).json({ data: data.base.hex.value });
};
