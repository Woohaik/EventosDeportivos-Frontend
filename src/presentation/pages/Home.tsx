import React, { FC, Fragment } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from 'redux';

// Custom
import { setAlert } from "../../store/actions/alertActions";
import { RootState } from "../../store";
import { getEventsAction } from "../../store/actions/eventActions";
// components
import EventCard from "./../components/events/EventCard";
import EventFilter from "./../components/events/EventFilter";

const Home: FC = () => {

    const dispatch: Dispatch<any> = useDispatch();
    const allTheEvents = useSelector((state: RootState) => state.event.events);
    dispatch(getEventsAction());
    return (
        <Fragment>
            <div className="title">
                <h1>Eventos</h1>
                <EventFilter />
            </div>

            <button onClick={() => dispatch(setAlert("Mensaje pro", "danger"))}>MOSTRAR</button>
            <div className="row">
                {
                    allTheEvents.map(cardEvent =>
                    (
                        <div className="col-md-6 col-lg-4 col-sm-12 my-3">
                            <EventCard event={cardEvent} />
                        </div>
                    ))
                }
            </div>
        </Fragment>
    );
}

export default Home;