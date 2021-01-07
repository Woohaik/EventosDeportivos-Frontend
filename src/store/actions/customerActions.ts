import { CustomerAction, REGISTER_CUSTOMER, toRegisterCustomer, tologinCustomer } from "../types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import axiosHttp from "./http"

import { setAlert, setErrorEx } from "./alertActions"

export const registerCustomerAction = (customer: toRegisterCustomer): ThunkAction<void, RootState, null, CustomerAction> => {
    return async (dispatch) => {

        try {
            const theCusomer = await axiosHttp.post("/customer", customer);
            console.log(theCusomer);
            dispatch(setAlert("Usuario Registrado", "success"));
            dispatch({ type: REGISTER_CUSTOMER, toRegisterCustomer: customer }); // TODO cambiarlo a return 

        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}


export const loginCustomerAction = (customer: tologinCustomer): ThunkAction<void, RootState, null, CustomerAction> => {
    return async (dispatch) => {
        try {
            const theCusomer = await axiosHttp.post("/login", customer);
            console.log(theCusomer);
            dispatch(setAlert("Inicio de sesion correcto", "success"));

        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}