import { AxiosError } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  itemFailure,
  itemSuccess,
  loadingView,
  resetQuery,
  searchFailure,
  searchSuccess,
} from "./actions";
import { ITEM_REQUEST, SEARCH_REQUEST } from "./actionTypes";
import { ItemResponse, ItemsReducerAction, SearchResponse } from "./types";
import { findItem, searchItems } from "../../service/api";



function* searchSaga(action: ItemsReducerAction) {
  try {
    yield put(loadingView(true));

    const response: SearchResponse = yield call(searchItems, action.query);
    yield put(searchSuccess(response));
  } catch (error) {
    yield put(
      searchFailure(error as AxiosError)
    );
  }
}

function* itemSaga(action: any) {
  try {
    yield put(loadingView(true));
    yield put(resetQuery());
    const response: ItemResponse = yield call(findItem, action.query);

    yield put(itemSuccess(response));
  } catch (error) {
    yield put(itemFailure(error as AxiosError))
  }
}

function* apiSaga() {
  yield all([takeLatest(SEARCH_REQUEST, searchSaga)]);
  yield all([takeLatest(ITEM_REQUEST, itemSaga)]);
}

export default apiSaga;