import { ReservationAction, CREATE_RESERVATION, DELETE_RESERVATION, GET_RESERVATIONS, Eventtype } from "../types";

import { reservation } from "../types"

import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import axiosHttp from "./http";

import { setAlert, setErrorEx } from "./alertActions";

const fakeReservations: reservation[] = [
    {
        id: 0,
        boughtTime: new Date(),
        reservationCustomer: {
            id: 1,
            dni: "Y4455dgsfa",
            email: "fakewmail@Garantizamos.es",
            name: "maicol",
            lastname: "yeiyeiyei",
        },
        quantity: 20,
        reservationEvent: {
            id: 1,
            name: "Super Evento de supre event",
            finish: new Date(),
            start: new Date(),
            limit: 8,
            eventType: Eventtype.FUTBOL
        },
    }
]




export const getReservationsAction = (): ThunkAction<void, RootState, null, ReservationAction> => {
    return async (dispatch) => {
        try {
            let reservations: reservation[] = fakeReservations;
            dispatch({ type: GET_RESERVATIONS, reservations });

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
