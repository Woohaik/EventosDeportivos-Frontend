import React, { FC, Fragment } from 'react'

// components

import EventCard from "./../components/events/EventCard";
import EventFilter from "./../components/events/EventFilter";
import { setAlert } from "../../store/actions/alertActions"
import { useDispatch } from "react-redux"
const ttt: number[] = [1, 2, 45, 5, 4, 1, 4];


const Home: FC = () => {
    const dispatch = useDispatch();
    return (
        <Fragment>
            <div className="title">
                <h1>Eventos</h1>
                <EventFilter />
            </div>
            <button onClick={() => dispatch(setAlert("Hola papi", "danger"))}>MOSTRAR</button>
            <div className="row">
                {ttt.map(el => (
                    <div className="col-md-4 my-3">
                        <EventCard />
                    </div>
                ))}
            </div>
        </Fragment>
    );
}

export default Home;