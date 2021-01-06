import React, { FC, Fragment } from 'react'
import { Link } from "react-router-dom"
import EventTable from "../../components/events/EventTable"


const Events: FC = () => {
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