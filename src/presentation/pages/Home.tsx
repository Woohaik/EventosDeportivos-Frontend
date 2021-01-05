import React, { FC, Fragment } from 'react'

// components

import EventCard from "./../components/events/EventCard";
import EventFilter from "./../components/events/EventFilter";
const ttt: number[] = [1, 2, 45, 5, 4, 1, 4];


const Home: FC = () => {
    return (
        <Fragment>
            <div className="title">
                <h1>Eventos</h1>
                <EventFilter />
            </div>
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