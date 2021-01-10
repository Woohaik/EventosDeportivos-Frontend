import React, { FC, Fragment, useState } from "react";
import { filterEvents } from "../../../store/actions/eventActions"

import { useDispatch } from "react-redux";

const EventFilter: FC = () => {
    const dispatch = useDispatch();
    const [filterBy, setFilter] = useState("Todos");
    const [text, setText] = useState("");


    const handleFilterChange = (by: string) => {
        setFilter(by);
        dispatch(filterEvents(by, text))
    }


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setText(e.target.value);
        
        dispatch(filterEvents(filterBy, e.target.value));

    }



    return (
        <Fragment>
            <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    {filterBy}
                </button>

                <div className="dropdown-menu">
                    <div onClick={() => handleFilterChange("TODOS")} className="dropdown-item"> TODOS</div>
                    <div onClick={() => handleFilterChange("FUTBOL")} className="dropdown-item"> FUTBOL</div>
                    <div onClick={() => handleFilterChange("BALONCESTO")} className="dropdown-item">  BALONCESTO</div>
                    <div onClick={() => handleFilterChange("VOLEIBOL")} className="dropdown-item">VOLEIBOL</div>
                    <div onClick={() => handleFilterChange("ATLETISMO")} className="dropdown-item">ATLETISMO</div>

                </div>
            </div>
            <div className="input-group my-2">
                <div className="search">
                    <i className="fas fa-search"></i>
                </div>
                <input onChange={handleInputChange} type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
            </div>
        </Fragment >
    )
}


export default EventFilter;