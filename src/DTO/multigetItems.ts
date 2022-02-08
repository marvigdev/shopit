import { ProductDetailsResponse } from './productDetails';

export type MultigetItemsResponse = {
  code: number;
  body: ProductDetailsResponse;
}[];
