import React, { FC } from 'react'
import pattern from "./../../assets/patron.jpeg"


const T404: FC = () => {
    return (

        <div className="container">
            <div className="e404">

                <div style={{ backgroundImage: `url(${pattern})` }} className="e404__header">
                    404
                </div>
                <div className="e404_body">
                    Página no Encontrada
                </div>
            </div>
        </div>
    );
}

export default T404;