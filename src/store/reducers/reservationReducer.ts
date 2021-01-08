import { ReservationState, GET_RESERVATIONS, ReservationAction } from "../types";

const initialState: ReservationState = {
    reservations: []
}

const reservationReducer = (state: ReservationState = initialState, action: ReservationAction): ReservationState => {
    switch (action.type) {
        case GET_RESERVATIONS:
            return {
                reservations: action.reservations
            }
        default: return state;
    }
}

export default reservationReducer;