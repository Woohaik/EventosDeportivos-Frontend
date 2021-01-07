// Actions
import { EventAction, GET_EVENTS, CREATE_EVENT, EDIT_EVENT, DELETE_EVENT } from "../types";
// Event Types
import { event, Eventtype } from "../types"

import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "..";
import axiosHttp from "./http";

import { setAlert, setErrorEx } from "./alertActions";


const fakeEvents: event[] = [
    {
        id: 0,
        name: "Super Evento de supre event",
        Finish: new Date(),
        start: new Date(),
        limit: 8,
        eventType: Eventtype.FUTBOL
    },
    {
        id: 1,
        name: "OLV ESTO ES MAS PRO",
        Finish: new Date(),
        start: new Date(),
        limit: 8,
        eventType: Eventtype.FUTBOL
    },
    {
        id: 2,
        name: "Dale bien perro",
        Finish: new Date(),
        start: new Date(),
        limit: 8,
        eventType: Eventtype.FUTBOL
    }, {
        id: 3,
        name: "Otro evento fake gracias",
        Finish: new Date(),
        start: new Date(),
        limit: 8,
        eventType: Eventtype.FUTBOL
    }
]

export const getEventsAction = (): ThunkAction<void, RootState, null, EventAction> => {
    return async (dispatch) => {
        try {
            //  const theEvents = await axiosHttp.get("/event");
            //   const events: event[] = theEvents.data;

            const events: event[] = fakeEvents;
            dispatch({ type: GET_EVENTS, events: events });


        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}


export const createEventAction = (event: event): ThunkAction<void, RootState, null, EventAction> => {
    return async (dispatch) => {
        try {
            dispatch(setAlert("Evento Creado", "success"));
        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}


export const editEventAction = (event: event): ThunkAction<void, RootState, null, EventAction> => {
    return async (dispatch) => {
        try {
            dispatch(setAlert("Evento Editado", "success"));
        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}


export const deleteEventAction = (id: number): ThunkAction<void, RootState, null, EventAction> => {
    return async (dispatch) => {
        try {
            dispatch(setAlert("Evento Borrado", "success"));
        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}
