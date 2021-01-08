import { EventState, EventAction, GET_EVENTS, DELETE_EVENT, event } from "../types";

const initialState: EventState = {
    events: []
}

const eventReducer = (state: EventState = initialState, action: EventAction): EventState => {



    switch (action.type) {
        case GET_EVENTS:
            return {
                events: action.events
            }
        case DELETE_EVENT:
            let newStateEvents: event[] = state.events.map(el => el);

            console.log("toy aca");

            let deletedIndex: number = newStateEvents.findIndex(el => el.id === action.id)
            console.log(deletedIndex);

            console.log(newStateEvents);

            newStateEvents.splice(deletedIndex, 1);

            return {
                events: newStateEvents
            }

        default: return state;
    }
}

export default eventReducer;