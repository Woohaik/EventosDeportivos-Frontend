import { EventState, EventAction, GET_EVENTS, DELETE_EVENT, event, FILTER_EVENTS } from "../types";

const initialState: EventState = {
    events: [],
    filteredEvents: [],
}

const eventReducer = (state: EventState = initialState, action: EventAction): EventState => {



    switch (action.type) {
        case FILTER_EVENTS:



            let filteredEvents = state.events.filter(el => el.name.toLowerCase().includes(action.name.toLowerCase()));

            if (action.by === 0) return {

                events: state.events,
                filteredEvents,
            }


            filteredEvents = state.events.filter(el => el.eventType === action.by);






            return {
                events: state.events,
                filteredEvents,
            }
        case GET_EVENTS:
            return {
                events: action.events,
                filteredEvents: action.events
            }
        case DELETE_EVENT:
            let newStateEvents: event[] = state.events.map(el => el);
            let deletedIndex: number = newStateEvents.findIndex(el => el.id === action.id)

            newStateEvents.splice(deletedIndex, 1);
            return {
                events: newStateEvents,
                filteredEvents: newStateEvents
            }
        default: return state;
    }
}

export default eventReducer;