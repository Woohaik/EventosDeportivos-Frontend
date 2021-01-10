// Actions
import { EventAction, GET_EVENTS, DELETE_EVENT } from "../types";
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


            console.log(events);

            //   let events = fakeEvents;

            dispatch({ type: GET_EVENTS, events });


        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}


export const createEventAction = (event: event): ThunkAction<void, RootState, null, EventAction> => {
    return async (dispatch) => {
        try {
            const response = await axiosHttp.post("/event", event);
            console.log(response);

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
            const response = await axiosHttp.put(`/event/${id}`, event);
            console.log(response);

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
            const response = await axiosHttp.delete(`/event/${id}`);
            console.log(response);
            dispatch(setAlert("Evento Borrado", "success"));
            dispatch({ type: DELETE_EVENT, id });
        } catch (error: any) {
            dispatch(setErrorEx(error));
        }
    }
}
