import React, { FC } from 'react'

import ReservationTable from "../components/reservations/ReservationTable";

const Purchases: FC = () => {


    return (
        <div className="container">
            <h1>Reservas</h1>
            <ReservationTable />
        </div>
    )

}

export default Purchases;