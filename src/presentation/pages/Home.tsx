import React, { FC, Fragment } from 'react'
import { useDispatch } from "react-redux";
import { Dispatch } from 'redux';

// Custom


import { getEventsAction } from "../../store/actions/eventActions";


// components

import EventFilter from "./../components/events/EventFilter";
import CardBlock from "./../components/events/CardBlock";
const Home: FC = () => {

    const dispatch: Dispatch<any> = useDispatch();

    dispatch(getEventsAction());

    return (
        <Fragment>
            <div className="title">
                <h1>Eventos</h1>
                <EventFilter />
            </div>


            <div className="row">
                <CardBlock />
            </div>
        </Fragment>
    );
}

export default Home;