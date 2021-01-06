import React, { FC, Fragment } from 'react'
import { Link } from "react-router-dom"
const EventTable: FC = () => {
    return (
        <Fragment>
            <div className="table-responsive">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Limite</th>
                            <th scope="col">Comienzo</th>
                            <th scope="col">Fin</th>


                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>PArtidaso de mango vs cebolla</td>
                            <td>27/05/11 15:44</td>
                            <td>27/05/11 15:44</td>
                            <td>5</td>
                            <td>FUTBOL</td>
                            <td>
                                <Link to="/eventos/editar">
                                    <button className="btn btn-warning">Editar</button>
                                </Link>
                                <button className="btn btn-danger">Cancelar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>


        </Fragment >
    )
}

export default EventTable