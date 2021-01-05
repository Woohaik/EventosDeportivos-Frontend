import React, { FC, Fragment } from 'react'
import ReservationTr from "./ReservationTr"
const ReservationTable: FC = () => {
    return (
        <Fragment>

            <div className="table-responsive">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Cliente</th>
                            <th scope="col">Evento</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>5</td>
                            <td>
                                <button className="btn btn-danger">Cancelar</button>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>

            <ReservationTr />
        </Fragment >
    )
}

export default ReservationTable