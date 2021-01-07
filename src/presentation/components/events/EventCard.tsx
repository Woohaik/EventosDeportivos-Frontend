

import React, { FC } from 'react';
import { event } from "../../../store/types";

import futbol from "./../../../assets/deportes/futbol.jpg";

const imagenes = {
    futbol
}

interface ICardProps {
    event: event
}

const EventCard: FC<ICardProps> = (props: ICardProps) => {
    return (
        <div className="card">
            <img className="card-img-top" src={imagenes["futbol"]} alt="futbol" />
            <div className="card-body">
                <h5 className="card-title">{props.event.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default EventCard;