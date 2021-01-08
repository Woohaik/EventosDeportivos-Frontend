

import React, { FC } from 'react';
import { event, Eventtype } from "../../../store/types";

import FUTBOL from "./../../../assets/deportes/futbol.jpg";
import BALONCESTO from "./../../../assets/deportes/baloncesto.jpg";
import VOLEIBOL from "./../../../assets/deportes/voleibol.jpg";
import ATLETISMO from "./../../../assets/deportes/atletismo.jpg";



import { dateFormater } from "../../../utils"

const imagenes: any = {
    FUTBOL,
    BALONCESTO,
    VOLEIBOL,
    ATLETISMO
}

interface ICardProps {
    event: event
}

const EventCard: FC<ICardProps> = (props: ICardProps) => {

    const eventtype = Eventtype[props.event.eventType]

    return (
        <div className="card event-card">
            <img className="card-img-top" src={imagenes[eventtype]}
                alt={Eventtype[props.event.eventType]} />
            <div className="card-body event-card__body">
                <h5 className="card-title">{props.event.name}</h5>
                <b className="event-card__body__type">
                    {eventtype[0]}{eventtype.substring(1).toLocaleLowerCase()}
                </b>
                <p className="event-card-text">
                    <b>Comienza:</b>  <span className="event-date">
                        {dateFormater(props.event.start)}
                    </span>
                </p>
                <p className="event-card-text">
                    <b>Finaliza:</b> <span className="event-date">
                        {dateFormater(props.event.finish)}

                    </span>
                </p>
                <a href="/" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    );
}

export default EventCard;