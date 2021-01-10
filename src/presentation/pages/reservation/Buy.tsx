import React, { FC, Fragment, FormEvent, useState } from 'react'
import FUTBOL from "./../../../assets/deportes/futbol.jpg";
import BALONCESTO from "./../../../assets/deportes/baloncesto.jpg";
import VOLEIBOL from "./../../../assets/deportes/voleibol.jpg";
import ATLETISMO from "./../../../assets/deportes/atletismo.jpg";
import http from "../../../store/actions/http";
import { dateFormater } from "../../../utils";
import { Eventtype } from "../../../store/types";

import { createReservationsAction } from "../../../store/actions/reservationActions";

import { useDispatch } from "react-redux";


let initialForm = {
    quantity: 1,
}

interface eventResponse {
    id: number;
    freeSpaces: number;
    name: string;
    limit: number;
    start: Date;
    finish: Date;
    eventType: number;
}

let initialEvent: eventResponse = {
    id: 0,
    freeSpaces: 0,
    name: "",
    limit: 0,
    start: new Date(),
    finish: new Date(),
    eventType: 0
}

const imagenes: any = {
    FUTBOL,
    BALONCESTO,
    VOLEIBOL,
    ATLETISMO
}

const Buy: FC = (props: any) => {
    const dispatch = useDispatch();

    const id = props.match.params.id;

    const [theEvent, setTheEvent] = useState<eventResponse>(initialEvent);

    React.useEffect(() => {
        http.get(`/event/${id}`).then(res => {
            let event: eventResponse = res.data
            setTheEvent(event);
        })
    }, [])

    const [formInfo, setFormInfo] = useState<any>(initialForm);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        let target = e.target;
        let value = target.value;
        setFormInfo({
            quantity: value,
        })
    }



    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(createReservationsAction(id, formInfo.quantity));
    }


    return (
        <Fragment>
            <h1>Comprar Entradas</h1>
            <div className="row mt-4">
                <div className="col-md-6 ">
                    <img className="img-fluid" alt={imagenes[Eventtype[theEvent.eventType]]} src={imagenes[Eventtype[theEvent.eventType]
                    ]} />
                    <div className="mt-4 row">
                        <div className="col-6">
                            <p>
                                <b className="pr-1">Inicio:</b> {dateFormater(new Date(theEvent.start))}
                            </p>
                            <p>
                                <b className="pr-1">Disponibles:  </b> <i> {theEvent.freeSpaces}</i></p>
                        </div>
                        <div className="col-6">
                            <p> <b className="pr-1">Fin:</b> {dateFormater(new Date(theEvent.finish))}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className="form-container">
                        <h2>{theEvent.name}</h2>
                        <div className="form-group">
                            <label>Cantidad</label>
                            <input type="number" min="1" className="form-control"
                                required
                                onChange={handleInputChange}
                                value={formInfo.quantity}
                                placeholder="Cantidad a reservar." />
                        </div>
                        <div className="form-footer">
                            <button type="submit" className="btn btn-primary">Comprar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default Buy;