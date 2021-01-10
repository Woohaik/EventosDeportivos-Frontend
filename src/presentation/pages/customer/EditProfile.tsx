import React, { FC, FormEvent, useState } from 'react'
import { customer } from "../../../store/types"
import { editCustomerAction } from "../../../store/actions/customerActions";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const EditProfile: FC = () => {
    const dispatch = useDispatch();
    const customerProfile = useSelector((state: RootState) => state.customer.customer);



    const initialForm: customer = {
        id: customerProfile.id,
        name: customerProfile.name,
        lastname: customerProfile.lastname,

        dni: customerProfile.dni,
        email: customerProfile.email
    }

    const [formInfo, setFormInfo] = useState<customer>(initialForm);


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(editCustomerAction(formInfo))
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
            <h1>Editar Perfil</h1>
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

            </div>

            <div className="form-footer">
                <button type="submit" className="btn btn-primary">Editar</button>

            </div>
        </form>


    );
}

export default EditProfile;