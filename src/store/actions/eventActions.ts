// Actions
import { EventAction, GET_EVENTS, DELETE_EVENT, FILTER_EVENTS, Eventtype } from "../types";
// Event Types
import { event } from "../types"

import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import axiosHttp from "./http";

import { setAlert, setErrorEx } from "./alertActions";


import history from "../../router/history"


interface eventResponse {
    id: number;
    freeSpaces: number;
    name: string;
    limit: number;
    start: Date;
    finish: Date;
    eventType: number;
}




export const filterEvents = (type: any, name: string): EventAction => {
    return {
        type: FILTER_EVENTS,
        by: Eventtype[type] || 0,
        name
    }
}




export const getEventsAction = (): ThunkAction<void, RootState, null, EventAction> => {
    return async (dispatch) => {
        try {

            const theEvents = await axiosHttp.get("/event");
            const res: eventResponse[] = theEvents.data;
            const events: any[] = res.map(theEvent => ({
                id: theEvent.id,
                name: theEvent.name,
                start: new Date(theEvent.start),
                finish: new Date(theEvent.finish),
                limit: theEvent.limit,
                eventType: theEvent.eventType
            }))


            dispatch({ type: GET_EVENTS, events });


        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}


export const createEventAction = (event: event): ThunkAction<void, RootState, null, EventAction> => {
    return async (dispatch) => {
        try {
            await axiosHttp.post("/event", event);


            dispatch(setAlert("Evento Creado", "success"));
            history.push("/eventos");
        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}


export const editEventAction = (id: number, event: event): ThunkAction<void, RootState, null, EventAction> => {
    return async (dispatch) => {
        try {
            await axiosHttp.put(`/event/${id}`, event);


            dispatch(setAlert("Evento Editado", "success"));

            history.push("/eventos");

        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}


export const deleteEventAction = (id: number): ThunkAction<void, RootState, null, EventAction> => {
    return async (dispatch) => {
        try {
            await axiosHttp.delete(`/event/${id}`);

            dispatch(setAlert("Evento Borrado", "success"));
            dispatch({ type: DELETE_EVENT, id });
        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}
