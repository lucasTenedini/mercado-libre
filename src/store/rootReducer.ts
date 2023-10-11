import { combineReducers } from "redux";

import itemReducer from "./item/reducer";
import {  ItemsState } from "./item/types";

export interface ApplicationState {
    item: ItemsState;
}

const rootReducer = combineReducers({
    item: itemReducer,
});

export default rootReducer;