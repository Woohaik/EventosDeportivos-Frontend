import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import alertReducer from "./reducers/alertReducer";
import customerReducer from "./reducers/customerReducer";
import eventReducer from "./reducers/eventReducer";
import reservationReducer from "./reducers/reservationReducer";

const rootReducer = combineReducers({
    alert: alertReducer,
    customer: customerReducer,
    event: eventReducer,
    reservation: reservationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;