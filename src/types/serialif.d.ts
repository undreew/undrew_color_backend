export declare namespace Serialif {
  type StatusType = 'success' | 'error';

  interface ColorComposition {
    red: number | string;
    green: number | string;
    blue: number | string;
    alpha?: number | string;
  }

  interface HexColor {
    value: string;
    composition: ColorComposition;
  }

  interface BaseData {
    keyword: string;
    hex: HexColor;
  }

  interface SuccessResponse {
    status: StatusType;
    base: BaseData; // most relevant part
  }

  interface ErrorDetails {
    type: string;
    value: string;
    message: string;
  }

  interface ErrorResponse {
    status: StatusType;
    error: ErrorDetails;
  }

  type Response = SuccessResponse | ErrorResponse;
}
