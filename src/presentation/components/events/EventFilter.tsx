import React, { FC, Fragment } from "react";

const EventFilter: FC = () => {
    return (
        <Fragment>
            <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    Todos
          </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">Todos</a>
                    <a className="dropdown-item" href="/">Fot</a>
                    <a className="dropdown-item" href="/">Bas</a>
                    <a className="dropdown-item" href="/">Yee</a>
                </div>
            </div>
            <div className="input-group my-2">
                <div className="search">
                    <i className="fas fa-search"></i>
                </div>
                <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
            </div>
        </Fragment>
    )
}


export default EventFilter;