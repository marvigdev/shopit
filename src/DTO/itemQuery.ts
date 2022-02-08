export interface simplifiedItemResponse {
  id: string;
  title: string;
  price: number;
  permalink: string;
  thumbnail: string;
}

export interface itemQueryResponse {
  query: string;
  paging: {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
  };
  results: simplifiedItemResponse[];
}
