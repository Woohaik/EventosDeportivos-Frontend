import { EventState, EventAction, GET_EVENTS } from "../types";

const initialState: EventState = {
    events: []
}

const eventReducer = (state: EventState = initialState, action: EventAction): EventState => {


    switch (action.type) {
        case GET_EVENTS:
            return {
                events: action.events
            }
        default: return state;
    }
}

export default eventReducer;