import React, { FC, Fragment } from 'react'

import { Link } from "react-router-dom"

const Profile: FC = () => {
    return (
        <Fragment>
            <div className="card-container">
                <div className="title">
                    <h1>Mi Perfil</h1>
                    <Link to="/perfil/editar">
                        <button className="btn btn-warning">Editar</button>
                    </Link>
                </div>

                <div className="mt-4">
                    <p>
                        <b className="pr-1">Nombre:</b> Wilfredo Hernandez
                </p>
                    <p>
                        <b className="pr-1">Apellidos:</b>Hernandez Argueta
                </p>
                    <p>
                        <b className="pr-1">Correo Electronico:</b> Misupercorreo@mail.xyz
                </p>

                    <p> <b className="pr-1">DNI:</b>t445154-4</p>


                </div>

                <button className="btn btn-danger">Borrar Cuenta</button>
            </div>

        </Fragment>


    );
}

export default Profile;