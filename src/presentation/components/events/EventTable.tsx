import React, { FC, Fragment } from 'react'
import { Link } from "react-router-dom"
import { RootState } from "../../../store";
import { useSelector } from "react-redux";

import { event, Eventtype } from '../../../store/types';
import { dateFormater } from "../../../utils"


const EventTable: FC = () => {
    const allTheEvents: event[] = useSelector((state: RootState) => state.event.events);
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
                        {
                            allTheEvents.map(event =>
                            (
                                <tr>
                                    <td>{event.name}</td>
                                    <td>{Eventtype[event.eventType]}</td>
                                    <td>{event.limit}</td>
                                    <td>{dateFormater(event.start)}</td>
                                    <td>{dateFormater(event.finish)}</td>
                                    <td>
                                        <Link to="/eventos/editar">
                                            <button className="btn btn-warning">Editar</button>
                                        </Link>
                                        <button className="btn btn-danger">Cancelar</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Fragment >
    )
}

export default EventTable