import React, { FC, Fragment } from 'react'

const ReservationTable: FC = () => {
    return (
        <Fragment>

            <div className="table-responsive">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Cliente</th>
                            <th scope="col">Evento</th>
                            <th scope="col">N Tickets</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark Maclein</td>
                            <td>PArtidaso de mango vs cebolla</td>
                            <td>5</td>
                            <td>

                                <button className="btn btn-danger">Cancelar Reserva</button>
                            </td>
                        </tr>

                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>5</td>
                            <td>

                                <button className="btn btn-danger">Cancelar Reserva</button>
                            </td>
                        </tr>

                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>5</td>
                            <td>

                                <button className="btn btn-danger">Cancelar Reserva</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>5</td>
                            <td>

                                <button className="btn btn-danger">Cancelar Reserva</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </Fragment >
    )
}

export default ReservationTable