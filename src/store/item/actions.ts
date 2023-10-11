import { AxiosError } from "axios";
import {
  ITEM_REQUEST,
  ITEM_FAILURE,
  ITEM_SUCCESS,
  SEARCH_REQUEST,
  SEARCH_FAILURE,
  SEARCH_SUCCESS,
  LOADING_VIEW,
  RESET_QUERY,
  RESET_ITEM,
  RESET_SEARCH
} from "./actionTypes";
import { ItemResponse, SearchResponse } from "./types";

export const itemRequest = (query: string) => ({
  type: ITEM_REQUEST,
  query,
});

export const itemSuccess = (itemResult: ItemResponse) => ({
  type: ITEM_SUCCESS,
  itemResult,
});

export const itemFailure = (error: AxiosError) => ({
  type: ITEM_FAILURE,
  error,
});

export const searchRequest = (query: string) => ({
  type: SEARCH_REQUEST,
  query,
});

export const searchSuccess = (SearchResponse: SearchResponse) => ({
  type: SEARCH_SUCCESS,
  SearchResponse,
});

export const searchFailure = (error: AxiosError) => ({
  type: SEARCH_FAILURE,
  error,
});

export const loadingView = (loading: boolean) => ({
  type: LOADING_VIEW,
  loading
});

export const resetQuery = () => ({
  type: RESET_QUERY,
});

export const resetItem = () => ({
  type: RESET_ITEM,
});

export const resetSearch = () => ({
  type: RESET_SEARCH,
});