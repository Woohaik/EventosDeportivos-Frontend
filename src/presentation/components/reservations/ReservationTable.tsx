import React, { FC, Fragment } from 'react'
import { RootState } from "../../../store";
import { useSelector } from "react-redux";

import { deleteReservationsAction } from "../../../store/actions/reservationActions";
import { reservation } from '../../../store/types';
import { useDispatch } from "react-redux";

import { dateFormater } from "../../../utils"

const ReservationTable: FC = () => {
    const dispatch = useDispatch();
    const allReservations: reservation[] = useSelector((state: RootState) => state.reservation.reservations);

    return (
        <Fragment>
            <div className="table-responsive">

                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Cliente</th>
                            <th scope="col">Evento</th>
                            <th scope="col">N Tickets</th>
                            <th scope="col">Fecha de Compra</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allReservations.length === 0 ? (<h2>Aun No Hay reservas</h2>) :
                                allReservations.map(reservation =>
                                (
                                    <tr key={reservation.id}>
                                        <td>{reservation.reservationCustomer?.name} {reservation.reservationCustomer?.lastname}</td>
                                        <td>{reservation.reservationEvent?.name}</td>
                                        <td>{reservation.quantity}</td>
                                        <td>{ dateFormater(reservation.boughtTime)}</td>
                                        <td>
                                            <button onClick={() => dispatch(deleteReservationsAction(reservation.id))} className="btn btn-danger">Cancelar Reserva</button>
                                        </td>
                                    </tr>

                                )

                                )
                        }




                    </tbody>
                </table>

            </div>
        </Fragment >
    )
}

export default ReservationTable