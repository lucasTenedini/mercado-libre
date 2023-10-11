import {
  ITEM_REQUEST,
  ITEM_SUCCESS,
  ITEM_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  LOADING_VIEW,
  RESET_ITEM,
  RESET_SEARCH,
  RESET_QUERY,
} from "./actionTypes";

import { Item, ItemsReducerAction, ItemsState } from "./types";

const initialState: ItemsState = {
  loading: true,
  error: false,
  searchQuery: '',
  selectedItem: {} as Item,
  items: [],
  categories: [],
  author: {
    name: '',
    lastname: ''
  }
};

const reducers = (state = initialState, action: ItemsReducerAction) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        searchQuery: action.query,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        items: action.SearchResponse.items,
        categories: action.SearchResponse.categories,
        author: action.SearchResponse.author,
        loading: false,
        error: false
      };

    case ITEM_REQUEST:
      return {
        ...state,
        searchQuery: action.query,
      };
    case ITEM_SUCCESS:
      return {
        ...state,
        selectedItem: action.itemResult.item,
        categories: action.itemResult.categories,
        author: action.itemResult.author,
        loading: false,
        error: false
      };
    case ITEM_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case LOADING_VIEW:
      return {
        ...state,
        loading: action.loading,
      };
    case RESET_ITEM:
      return {
        ...state,
        selectedItem: {},
        categories: []
      };
    case RESET_SEARCH:
      return {
        ...state,
        items: [],
        categories: []
      };
    case RESET_QUERY:
      return {
        ...state,
        searchQuery: '',
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;