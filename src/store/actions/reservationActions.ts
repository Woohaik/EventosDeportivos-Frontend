import { ReservationAction, CREATE_RESERVATION, DELETE_RESERVATION, GET_RESERVATIONS } from "../types";


import { reservation } from "../types"

import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import axiosHttp from "./http";


import { setAlert, setErrorEx } from "./alertActions";





export const getReservationsAction = (): ThunkAction<Promise<ReservationAction | undefined>, RootState, null, ReservationAction> => {
    return async (dispatch): Promise<ReservationAction | undefined> => {
        try {
            const reservations: reservation[] = [];
            return { type: GET_RESERVATIONS, reservations }
        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}


export const createReservationsAction = (reservation: reservation): ThunkAction<void, RootState, null, ReservationAction> => {
    return async (dispatch) => {
        try {
            dispatch(setAlert("Compra Realizada", "success"));
        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}


export const deleteReservationsAction = (id: number): ThunkAction<void, RootState, null, ReservationAction> => {
    return async (dispatch) => {
        try {
            dispatch(setAlert("Reserva Borrada", "success"));
        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }

}


