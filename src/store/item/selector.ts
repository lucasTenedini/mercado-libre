import { createSelector } from "reselect";
import { ApplicationState } from "../rootReducer";


const getItemsList = (state: ApplicationState) => state.item.items;

const getSearchQuery = (state: ApplicationState) => state.item.searchQuery;

const getError = (state: ApplicationState) => state.item.error;

const getItem = (state: ApplicationState) => state.item.selectedItem;

const getItemState = (state: ApplicationState) => state.item;

const getLoading = (state: ApplicationState) => state.item.loading;

export const getItemsListSelector = createSelector(getItemsList, (items) => items);

export const getSearchQuerySelector = createSelector(getSearchQuery, (search) => search);

export const getItemSelector = createSelector(getItem, (item) => item);

export const getErrorSelector = createSelector(getError, (error) => error);

export const getItemStateSelector = createSelector(getItemState, (item) => item);

export const getLoadingSelector = createSelector(getLoading, (loading) => loading);

