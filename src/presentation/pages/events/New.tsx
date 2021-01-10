import React, { FC, FormEvent, Fragment, useState } from 'react'
import { event } from "../../../store/types"
import { useDispatch } from "react-redux";
import { editEventAction, createEventAction } from "../../../store/actions/eventActions";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";


const New: FC = (props: any) => {
    const dispatch = useDispatch();


    let isEdit: boolean = false;

    const id = props.match.params.id;

    if (id) isEdit = true;


    let toEditEvent: event[] = useSelector((state: RootState) => state.event.events);






    let initialForm: event = {
        name: "",
        limit: 1,
        eventType: 0,
        start: new Date(),
        finish: new Date(),
    }




    const [formInfo, setFormInfo] = useState<any>(id ? toEditEvent.find(ev => ev.id === +id) : initialForm);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        const partial = {
            ...formInfo,
            [name]: value
        };
        setFormInfo(partial);
    }

    const handleStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const partial = {
            ...formInfo,
            start: new Date(e.target.value)
        };
        setFormInfo(partial);
    }

    const handleFinishDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const partial = {
            ...formInfo,
            finish: new Date(e.target.value)
        };
        setFormInfo(partial);
    }



    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        id ? handleSubmitEdit() : handleSubmitCreate();
    }


    const handleSubmitEdit = () => {

        dispatch(editEventAction(id, formInfo))
    }
    const handleSubmitCreate = () => {

        dispatch(createEventAction(formInfo))
    }


    return (
        <Fragment>
            <form onSubmit={handleSubmit} className="form-container">
                <h1>{isEdit ? "Editar" : "Crear"} Evento</h1>
                <div className="form-group">
                    <label>Nombre</label>
                    <input name="name" type="text" className="form-control"
                        required
                        onChange={handleInputChange}
                        placeholder="Nombre de evento" value={formInfo.name} />

                </div>

                <div className="form-group">
                    <label>Limite</label>
                    <input type="number" min="1" className="form-control"
                        required
                        onChange={handleInputChange}
                        name="limit"
                        value={formInfo.limit}
                        placeholder="Limite de asistencia." />

                </div>

                <div className="form-group">
                    <label>Fecha de Inicio</label>
                    <input required onChange={handleStartDate} name="start" className="form-control" type="datetime-local" />

                </div>

                <div className="form-group">
                    <label>Fecha de Fin</label>
                    <input required onChange={handleFinishDate} name="finish" className="form-control" type="datetime-local" />
                </div>
                <div className="form-group">
                    <label >Tipo de Evento</label>
                    <select required value={formInfo.eventType} onChange={handleInputChange} name="eventType" className="form-control">
                        <option value="">Tipo de evento</option>
                        <option value="1">Futbol</option>
                        <option value="2">Baloncesto</option>
                        <option value="3">Voleibol </option>
                        <option value="4">Atletismo</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">{isEdit ? "Editar" : "Crear"}</button>
            </form>
        </Fragment>
    );
}

export default New;