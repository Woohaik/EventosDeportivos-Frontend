import React, { FC, Fragment } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { Link } from "react-router-dom"
import { deleteCustomerAction } from "../../../store/actions/customerActions";

const Profile: FC = () => {
    const dispatch = useDispatch();

    const customerProfile = useSelector((state: RootState) => state.customer.customer);
    const name = useSelector((state: RootState) => state.customer.customer.name);
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
                        <b className="pr-1">Nombre:</b>{name}
                    </p>
                    <p>
                        <b className="pr-1">Apellidos:</b>{customerProfile.lastname}
                    </p>
                    <p>
                        <b className="pr-1">Correo Electronico:</b> {customerProfile.email}
                    </p>

                    <p> <b className="pr-1">DNI:</b>{customerProfile.dni}</p>


                </div>

                <button onClick={() => dispatch(deleteCustomerAction(customerProfile.id))} className="btn btn-danger">Borrar Cuenta</button>
            </div>

        </Fragment>


    );
}

export default Profile;