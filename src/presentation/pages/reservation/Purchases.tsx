import React, { FC } from 'react';
import { useDispatch } from "react-redux";
import { Dispatch } from 'redux';
// Custom 
import { getReservationsAction } from "../../../store/actions/reservationActions";

// Components
import ReservationTable from "../../components/reservations/ReservationTable";

const Purchases: FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    dispatch(getReservationsAction());
    return (
        <div className="container">
            <h1>Reservas</h1>
            <ReservationTable />
        </div>
    )

}

export default Purchases;