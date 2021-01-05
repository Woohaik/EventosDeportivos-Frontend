import React, { FC } from 'react'



const Login: FC = () => {
    return (
        <form className="form-container">
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">Garantizamos que vendemos tus datos admenos 3% menos que la
          competencia</small>
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary">Inicia sesión</button>
        </form>

    );
}

export default Login;