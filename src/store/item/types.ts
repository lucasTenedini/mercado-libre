import { AxiosError } from "axios";

export interface ItemsState {
  loading: boolean
  error: boolean;
  items: Item[]
  selectedItem?: Item;
  searchQuery: string;
  categories: string[];
  author: AuthorInterface;
}

export interface ItemsReducerAction {
  loading: boolean;
  type: string;
  SearchResponse: SearchResponse;
  itemResult: ItemResponse;
  query: string;
  error: AxiosError<{ response: { data: { error: string } } }>;
}

export interface SearchResponse extends ApiResponse {
  items: Item[];
}

export interface ItemResponse extends ApiResponse {
  item: Item;
}

interface ApiResponse {
  categories: string[];
  author: AuthorInterface;
}

export interface ItemsSagaEffect {
  type: string;
  payload: {
    query: string;
    itemId: string;
  };
}

export interface AuthorInterface {
  name: string;
  lastname: string;
}

export interface Item {
  id: string;
  title: string;
  picture: string;
  condition: string;
  address: string;
  free_shipping: boolean;
  price: Price;
  description?: string;
  sold_quantity?: number;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
