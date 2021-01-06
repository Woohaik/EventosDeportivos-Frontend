import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import alertReducer from "./reducers/alertReducer"

import customerActions from "./reducers/customerReducer"


const rootReducer = combineReducers({ alert: alertReducer, customer: customerActions });


export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, {}, applyMiddleware(thunk));
export default store;