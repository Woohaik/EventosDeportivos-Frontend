import React, { FC, FormEvent, useState } from 'react'
import { toRegisterCustomer } from "../../store/types"
import { Link } from "react-router-dom";
import { registerCustomerAction } from "../../store/actions/customerActions";
import { useDispatch } from "react-redux";

const Register: FC = () => {


    const dispatch = useDispatch();
    const initialForm: toRegisterCustomer = {
        name: "wilfredo",
        lastname: "Mangote",
        password: "1234",
        dni: "sfgsqerdv",
        email: "wilfredogmail.com"
    }


    const [formInfo, setFormInfo] = useState<toRegisterCustomer>(initialForm);



    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(registerCustomerAction(formInfo))
    }


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        const partial = {
            ...formInfo,
            [name]: value
        };

        setFormInfo(partial);
    }


    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>Registrate</h1>
            <div className="form-group">
                <label>Nombre</label>
                <input onChange={handleInputChange} required name="name" type="text" value={formInfo.name} className="form-control"
                    placeholder="Nombre" />

            </div>

            <div className="form-group">
                <label>Apellido</label>
                <input onChange={handleInputChange} required name="lastname" value={formInfo.lastname} type="text" className="form-control"
                    placeholder="Apellido" />

            </div>

            <div className="form-group">
                <label>DNI</label>
                <input onChange={handleInputChange} required name="dni" value={formInfo.dni} type="text" className="form-control"
                    placeholder="DNI" />

            </div>

            <div className="form-group">
                <label>Correo Electronico</label>
                <input onChange={handleInputChange} required name="email" value={formInfo.email} type="email" className="form-control" aria-describedby="emailHelp"
                    placeholder="Correo Electronico" />
                <small className="form-text text-muted">Garantizamos que vendemos tus datos admenos 3% menos que la
          competencia</small>
            </div>
            <div className="form-group">
                <label >Contraseña</label>
                <input onChange={handleInputChange} required name="password" value={formInfo.password} type="password" className="form-control" placeholder="Contraseña" />
            </div>
            <div className="form-check">
                <input onChange={handleInputChange} type="checkbox" className="form-check-input" />
                <label className="form-check-label" >Acepto el correo Spam</label>
            </div>
            <div className="form-footer">
                <button type="submit" className="btn btn-primary">Continuar</button>
                <span className="form-text text-muted ">¿Ya tienes cuenta?    < Link to="/iniciar-sesion"> Inicia Sesion </Link> </span>
            </div>
        </form>


    );
}

export default Register;