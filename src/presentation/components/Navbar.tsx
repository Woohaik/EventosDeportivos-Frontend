import React, { FC } from 'react';

import { Link, useHistory } from "react-router-dom";

import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";


import { logoutCustomerAction } from "../../store/actions/customerActions";
import { isLogged } from "../../store/reducers/customerReducer";

import { Dispatch } from 'redux';



const Navbar: FC = () => {
    let history = useHistory();
    const customerToken = useSelector((state: RootState) => state.customer.token);
    const dispatch: Dispatch<any> = useDispatch();

    const handleLogout = () => {
        history.push("/");
        dispatch(logoutCustomerAction())
    }

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

                    {!isLogged(customerToken) ? (<div className="navbar-nav  ml-auto">
                        <Link className="nav-item nav-link active" to="/iniciar-sesion">Inicia Sesion</Link>
                        <Link className="nav-item nav-link" to="/registrarse">Registrate</Link>
                    </div>) : (<div className="dropdown ml-auto">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Nombre Usuario <i className="fas fa-user"></i>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="/perfil">Perfil</Link>
                            <Link className="dropdown-item" to="/eventos">Eventos</Link>
                            <button type="button" onClick={handleLogout} className="btn btn-danger ml-3 ">
                                Cerrar Sesion
                                        </button>
                        </div>
                    </div>)}
                </div>
            </div>
        </nav >
    );
}

export default Navbar;