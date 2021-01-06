import React, { FC } from 'react'
import { useSelector } from "react-redux";

import { RootState } from "../../store";


const Alert: FC = () => {

    const alertMsg = useSelector((state: RootState) => state.alert.message);
    const alertColor = useSelector((state: RootState) => state.alert.color);
    const alertVisibility = useSelector((state: RootState) => state.alert.visible);

    return (
        <div className={`alert alert-${alertColor}`} style={{ display: alertVisibility ? "block" : "none" }} role="alert">
            {alertMsg}
        </div>
    );
}



export default Alert;