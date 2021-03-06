import React, { FC, Fragment } from 'react'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { Dispatch } from 'redux';


// Custom
import { getEventsAction } from "../../../store/actions/eventActions";

// Components
import EventTable from "../../components/events/EventTable"

const Events: FC = () => {

    const dispatch: Dispatch<any> = useDispatch();

    dispatch(getEventsAction());

    return (
        <Fragment>
            <div className="title">
                <h1>Lista de Eventos</h1>
                <Link to="/eventos/crear">
                    <button className="btn btn-success">Crear Evento</button>
                </Link>
            </div>
            <EventTable />
        </Fragment>

    );
}

export default Events;