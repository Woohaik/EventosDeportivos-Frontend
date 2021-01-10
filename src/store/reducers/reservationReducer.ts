import { ReservationState, GET_RESERVATIONS, ReservationAction, DELETE_RESERVATION, reservation } from "../types";

const initialState: ReservationState = {
    reservations: []
}

const reservationReducer = (state: ReservationState = initialState, action: ReservationAction): ReservationState => {
    switch (action.type) {
        case GET_RESERVATIONS:
            return {
                reservations: action.reservations
            }
        case DELETE_RESERVATION:



            let newStateReservation: reservation[] = state.reservations.map(el => el);
            let deletedIndex: number = newStateReservation.findIndex(el => el.id === action.id);


            newStateReservation.splice(deletedIndex, 1);

            return {
                reservations: newStateReservation
            }

        default: return state;
    }
}

export default reservationReducer;