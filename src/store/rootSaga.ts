import { all, fork } from "redux-saga/effects";

import apiSaga from "./item/saga";

export function* rootSaga() {
  yield all([fork(apiSaga)]);
}