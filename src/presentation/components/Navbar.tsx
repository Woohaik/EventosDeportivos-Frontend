import React, { FC } from 'react'

import { Link } from "react-router-dom"

const Navbar: FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3">
            <div className="container">
                <Link className="navbar-brand" to="/">Supra-Event</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">Home</Link>
                        <Link className="nav-item nav-link active" to="/todas-reservas">Reservas</Link>
                    </div>
                    <div className="navbar-nav  ml-auto">
                        <Link className="nav-item nav-link active" to="/iniciar-sesion">Inicia Sesion</Link>
                        <Link className="nav-item nav-link" to="/registrarse">Registrate</Link>
                    </div>
                    <div className="dropdown ml-auto">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Nombre Usuario <i className="fas fa-user"></i>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="/perfil">Perfil</Link>
                            <Link className="dropdown-item" to="/eventos">Eventos</Link>
                            <div className="btn btn-danger ">
                                Cerrar Sesion
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;