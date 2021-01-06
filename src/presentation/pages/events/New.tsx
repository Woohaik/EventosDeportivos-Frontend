import React, { FC, Fragment } from 'react'



const New: FC = () => {
    return (
        <Fragment>

            <form className="form-container">
                <h1>Nuevo Evento</h1>
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control"
                        placeholder="Enter email" />

                </div>

                <div className="form-group">
                    <label>Limite</label>
                    <input type="text" className="form-control"
                        placeholder="Enter email" />

                </div>

                <div className="form-group">
                    <label>Fecha de inicio</label>
                    <input type="text" className="form-control"
                        placeholder="Enter email" />

                </div>

                <div className="form-group">
                    <label>Fecha de Fin</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp"
                        placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">Garantizamos que vendemos tus datos admenos 3% menos que la
competencia</small>
                </div>
                <div className="form-group">
                    <label >Tipo de Evento</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary">Registrarme</button>
            </form>
        </Fragment>
    );
}

export default New;