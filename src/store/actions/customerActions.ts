import { CustomerAction, toRegisterCustomer, tologinCustomer, LOGIN_CUSTOMER, logedCustomer, LOGOUT_CUSTOMER, customer, EDIT_CUSTOMER, DELETE_CUSTOMER } from "../types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import axiosHttp from "./http";

import { isJwtExpired } from "../../utils"

import { setAlert, setErrorEx } from "./alertActions";


import history from "../../router/history"




export const registerCustomerAction = (customer: toRegisterCustomer): ThunkAction<void, RootState, null, CustomerAction> => {
    return async (dispatch) => {

        try {
            await axiosHttp.post("/customer", customer);

            dispatch(setAlert("Usuario Registrado", "success"));
            history.push("/");

        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}


export const editCustomerAction = (customer: customer): ThunkAction<void, RootState, null, CustomerAction> => {
    return async (dispatch) => {

        try {


            await axiosHttp.put(`/customer/${customer.id}`, customer);
            dispatch({ type: EDIT_CUSTOMER, toEditCustomer: customer });

            dispatch(setAlert("Usuario Editado", "success"));
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

            dispatch(setAlert("Inicio de sesion correcto", "success"));
            dispatch({ type: LOGIN_CUSTOMER, logedCustomer: authResponse });
            history.push("/");

        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}

export const logoutCustomerAction = (): ThunkAction<void, RootState, null, CustomerAction> => {
    return async (dispatch) => {
        dispatch(setAlert("Sesion cerrada", "success"));
        dispatch({ type: LOGOUT_CUSTOMER });
    }
}


export const deleteCustomerAction = (id: number = 0): ThunkAction<void, RootState, null, CustomerAction> => {
    return async (dispatch) => {
        try {
            if (id === 0) throw new Error("No hay cliente")
            await axiosHttp.delete(`/customer/${id}`);
            dispatch(setAlert("Usuario Eliminado", "success"));
            history.push("/");
            dispatch({ type: DELETE_CUSTOMER });
        } catch (error) {
            dispatch(setErrorEx(error));
        }

    }
}


export const authCustomerAction = (id: number = 0): ThunkAction<void, RootState, null, CustomerAction> => {
    //  Revisa por token 
    return async (dispatch) => {
        try {

            let storageRefreshToken: any = localStorage.getItem("customer-refresh-token") || "";
            let tokenToDecode = localStorage.getItem("customer-token") || "";
            if (!tokenToDecode) throw new Error("No hay token a loguerse");

            // vamos por el refresh token
            let isRefreshExpired = isJwtExpired(storageRefreshToken);

            console.log("A Refrescar Tokens");
            if (isRefreshExpired) throw new Error("No hay refresh valida ni modo a logear");
            // Se pide authenticacion con la refresh
            axiosHttp.defaults.headers.common["sportToken"] = storageRefreshToken;


            let res = await axiosHttp.post("/refresh")

            axiosHttp.defaults.headers.common["sportToken"] = res.data.token;


            const authResponse: logedCustomer = { ...res.data }


            dispatch({ type: LOGIN_CUSTOMER, logedCustomer: authResponse });



        } catch (error) {
            console.log(error);

            console.log(error.response || error.message);


        }

    }
}









