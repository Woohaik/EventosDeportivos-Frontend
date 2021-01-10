import { ReservationAction, GET_RESERVATIONS, Eventtype, DELETE_RESERVATION } from "../types";

import { reservation } from "../types"

import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import axiosHttp from "./http";

import { setAlert, setErrorEx } from "./alertActions";

import history from "../../router/history";

import store from "../../store"

interface Reservation {
    id: number;
    reservationCustomer: ReservationCustomer;
    reservationEvent: ReservationEvent;
    quantity: number;
    boughtTime: Date;
}

interface ReservationCustomer {
    id: number;
    name: string;
    lastname: string;
    email: string;
    dni: string;
}

interface ReservationEvent {
    id: number;
    freeSpaces: number;
    name: string;
    limit: number;
    start: Date;
    finish: Date;
    eventType: number;
}



export const getReservationsAction = (): ThunkAction<void, RootState, null, ReservationAction> => {
    return async (dispatch) => {
        try {

            const reservations = await axiosHttp.get("/reservation");

            const res: Reservation[] = reservations.data;

            console.log(res);

            let theReservations: reservation[] = res.map((reser): reservation => {
                return {
                    id: reser.id,
                    boughtTime: new Date(reser.boughtTime),
                    quantity: reser.quantity,
                    reservationCustomer: reser.reservationCustomer,
                    reservationEvent: reser.reservationEvent
                }
            });

            console.log(theReservations);

            dispatch({ type: GET_RESERVATIONS, reservations: theReservations });

        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}

export const createReservationsAction = (eventId: number, quantity: number): ThunkAction<void, RootState, null, ReservationAction> => {
    return async (dispatch) => {
        try {

            const reservation = {
                customerId: store.getState().customer.customer.id,
                eventId,
                quantity
            }

            await axiosHttp.post(`/reservation`, reservation);

            dispatch(setAlert("Compra Realizada", "success"));
            history.push("/");
        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}


export const deleteReservationsAction = (id: number): ThunkAction<void, RootState, null, ReservationAction> => {
    return async (dispatch) => {
        try {
            const response = await axiosHttp.delete(`/reservation/${id}`);
            console.log(response);
            dispatch(setAlert("Reserva Borrada", "success"));
            dispatch({ type: DELETE_RESERVATION, id });
        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }

}
