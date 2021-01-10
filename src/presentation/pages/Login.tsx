import React, { FC, FormEvent, useState } from 'react'
import { tologinCustomer } from "../../store/types"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginCustomerAction } from "../../store/actions/customerActions";
const Login: FC = () => {

    const initialForm: tologinCustomer = {
        password: "1234",
        email: "wilfredogmail.com"
    }

    const dispatch = useDispatch();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginCustomerAction(formInfo))
    }

    const [formInfo, setFormInfo] = useState<tologinCustomer>(initialForm);
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
            <h1>Inicia Sesion</h1>
            <div className="form-group">
                <label>Correo Electronico</label>
                <input required onChange={handleInputChange} value={formInfo.email} name="email" type="email" className="form-control" aria-describedby="emailHelp"
                    placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label >Contraseña</label>
                <input required onChange={handleInputChange} value={formInfo.password} name="password" type="password" className="form-control" placeholder="Password" />
            </div>

            <div className="form-footer">
                <button type="submit" className="btn btn-primary">Continuar</button>
                <span className="form-text text-muted ">¿Aun no tienes cuenta?    < Link to="/registrarse"> Registrate</Link> </span>
            </div>

        </form>

    );
}

export default Login;