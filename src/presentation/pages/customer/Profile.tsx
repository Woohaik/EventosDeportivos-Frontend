import React, { FC, Fragment } from 'react'

import { Link } from "react-router-dom"

const Profile: FC = () => {
    return (
        <Fragment>
            <div> Hi im the profile</div>
            <Link to="/perfil/editar">
                <button className="btn btn-warning">Editar</button>
            </Link>
            <button className="btn btn-danger">Borrar Cuenta</button>
        </Fragment>


    );
}

export default Profile;