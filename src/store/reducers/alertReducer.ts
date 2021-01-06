import { AlertState, AlertAction, SET_ALERT, CLOSE_ALERT } from "../types";
import { Reducer } from "redux"

const initialState: AlertState = {
    color: "",
    message: "",
    visible: false
}


const alertReducer = (state = initialState, action: AlertAction): AlertState => {


    switch (action.type) {
        case SET_ALERT:
            return {
                message: action.payload,
                color: action.color,
                visible: true,
            }
        case CLOSE_ALERT:
            return {
                ...initialState,
                visible: false,
            }
        default: return state;
    }

}

export default alertReducer;