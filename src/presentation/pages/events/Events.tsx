import React, { FC, Fragment } from 'react'
import { Link } from "react-router-dom"



const Events: FC = () => {
    return (
        <Fragment>
            <h1>Lista de Eventos</h1>

            <Link to="/eventos/crear">

                <button className="btn btn-success">Crear Evento</button>
            </Link>

            <Link to="/eventos/editar">
                <button className="btn btn-warning">Editar</button>
            </Link>

            <button className="btn btn-danger">Borrar</button>

        </Fragment>

    );
}

export default Events;