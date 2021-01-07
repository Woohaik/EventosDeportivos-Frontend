import { SET_ALERT, AlertAction, CLOSE_ALERT } from "../types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";

export const setAlert = (message: string, color: string): ThunkAction<void, RootState, null, AlertAction> => {
    return async (dispatch) => {
        setTimeout(() => {
            dispatch({ type: CLOSE_ALERT });
        }, 3000);
        dispatch({
            type: SET_ALERT,
            color,
            payload: message,
        });

    }
}


export const setErrorEx = (error: any): ThunkAction<void, RootState, null, AlertAction> => {
    return async (dispatch) => {
        console.log(error.response);
        const theEx = error.response.data;
        dispatch(setAlert(theEx.exList.length === 0 ? theEx.mainMessage : theEx.exList[0], "danger"));
    }
}










