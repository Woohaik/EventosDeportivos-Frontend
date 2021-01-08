import React, { FC, Fragment } from 'react'
import { Link } from "react-router-dom"
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { deleteEventAction } from "../../../store/actions/eventActions";
import { event, Eventtype } from '../../../store/types';
import { dateFormater } from "../../../utils"
import { useDispatch } from "react-redux";

const EventTable: FC = () => {
    const dispatch = useDispatch();
    const allTheEvents: event[] = useSelector((state: RootState) => state.event.events);

    const handleCancel = (id: number = 0) => {
        dispatch(deleteEventAction(id));
    }
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
                                <tr key={event.id}>
                                    <td>{event.name}</td>
                                    <td>{Eventtype[event.eventType]}</td>
                                    <td>{event.limit}</td>
                                    <td>{dateFormater(event.start)}</td>
                                    <td>{dateFormater(event.finish)}</td>
                                    <td>
                                        <Link to={`/eventos/editar/${event.id}`}>
                                            <button className="btn btn-warning">Editar</button>
                                        </Link>
                                        <button type="button" onClick={() => handleCancel(event.id)} className="btn btn-danger">Cancelar</button>
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