import { CustomerAction, toRegisterCustomer, tologinCustomer, LOGIN_CUSTOMER, logedCustomer } from "../types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import axiosHttp from "./http";
import store from "../../store"

import { setAlert, setErrorEx } from "./alertActions";






export const registerCustomerAction = (customer: toRegisterCustomer): ThunkAction<void, RootState, null, CustomerAction> => {
    return async (dispatch) => {

        try {
            const theCusomer = await axiosHttp.post("/customer", customer);
            console.log(theCusomer);
            dispatch(setAlert("Usuario Registrado", "success"));
        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}


export const loginCustomerAction = (customer: tologinCustomer): ThunkAction<void, RootState, null, CustomerAction> => {
    return async (dispatch) => {
        try {
            const theCusomer = await axiosHttp.post("/login", customer);
            const authResponse: logedCustomer = { ...theCusomer.data }

            console.log(authResponse);
            dispatch(setAlert("Inicio de sesion correcto", "success"));
            dispatch({ type: LOGIN_CUSTOMER, logedCustomer: authResponse });

        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}


export const startAppValidations = () => {
    //  Revisa por token 
    // store.getState().customer.token

    //no esta vencia usa este

    // ESTA VENCIdo
    // buscar token en local-stora

    // NO ESTA VENCIA- USA ESTA
    // ESTA VENCIDA  - REVISA POR REFRESH Token
    // ESTA VENCIA - (toca logerar ni modo)
    // No esta , manda a pedir nuevas tokens


    // E - Revisa si esta vencida
    // E - SE BORRA Y TOCA LOGEAR
    // N - PIDE EL NUEVO USUARIO con la token 




}