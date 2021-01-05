import React, { FC, Fragment } from 'react'



const New: FC = () => {
    return (
        <Fragment>
            <h1>Nuevo Evento</h1>
            <form className="form-container">

                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control"
                        placeholder="Enter email" />

                </div>

                <div className="form-group">
                    <label>Apellido</label>
                    <input type="text" className="form-control"
                        placeholder="Enter email" />

                </div>

                <div className="form-group">
                    <label>DNI</label>
                    <input type="text" className="form-control"
                        placeholder="Enter email" />

                </div>

                <div className="form-group">
                    <label>Correo Electronico</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp"
                        placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">Garantizamos que vendemos tus datos admenos 3% menos que la
competencia</small>
                </div>
                <div className="form-group">
                    <label >Contraseña</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Acepto el correo Spam</label>
                </div>

                <button type="submit" className="btn btn-primary">Registrarme</button>
            </form>
        </Fragment>
    );
}

export default New;