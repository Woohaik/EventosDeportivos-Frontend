import { CustomerAction, REGISTER_CUSTOMER, toRegisterCustomer, tologinCustomer } from "../types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import axiosHttp from "./http"

import { setAlert } from "./alertActions"

export const registerCustomerAction = (customer: toRegisterCustomer): ThunkAction<void, RootState, null, CustomerAction> => {
    return async (dispatch) => {

        try {
            const theCusomer = await axiosHttp.post("/customer", customer);
            console.log(theCusomer);
            dispatch({ type: REGISTER_CUSTOMER, toRegisterCustomer: customer });
            dispatch(setAlert("Usuario Registrado", "success"));
        } catch (error: any) {
            const theEx = error.response.data;
            dispatch(setAlert(theEx.exList.length === 0 ? theEx.mainMessage : theEx.exList[0], "danger"));

        }
    }
}


export const loginCustomer = (customer: tologinCustomer): ThunkAction<void, RootState, null, CustomerAction> => {
    return async (dispatch) => {
        try {
            const theCusomer = await axiosHttp.post("/login", customer);
            console.log(theCusomer);
            dispatch(setAlert("Inicio de sesion correcto", "success"));

        } catch (error: any) {
            console.log(error.response);
            const theEx = error.response.data;
            dispatch(setAlert(theEx.exList.length === 0 ? theEx.mainMessage : theEx.exList[0], "danger"));
        }
    }
}