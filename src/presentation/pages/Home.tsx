import React, { FC, Fragment } from 'react'
import { useDispatch } from "react-redux";
import { Dispatch } from 'redux';

// Custom
import { setAlert } from "../../store/actions/alertActions";

import { getEventsAction } from "../../store/actions/eventActions";
import { startAppValidations } from "../../store/actions/customerActions";
// components

import EventFilter from "./../components/events/EventFilter";
import CardBlock from "./../components/events/CardBlock";
const Home: FC = () => {

    const dispatch: Dispatch<any> = useDispatch();

    dispatch(getEventsAction());
    startAppValidations()

    return (
        <Fragment>
            <div className="title">
                <h1>Eventos</h1>
                <EventFilter />
            </div>

            <button onClick={() => dispatch(setAlert("Mensaje pro", "danger"))}>MOSTRAR</button>
            <div className="row">
                <CardBlock />
            </div>
        </Fragment>
    );
}

export default Home;