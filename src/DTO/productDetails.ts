export interface ProductDetailsResponse {
  id: string;
  title: string;
  price: number;
  permalink: string;
  thumbnail: string;
  pictures: {
    url: string;
    size: string;
  }[];
  warranty: string;
  attributes: {
    id: string;
    name: string;
    value_name: string;
  }[];
}
