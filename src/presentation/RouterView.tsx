import React, { FC } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import T404 from "./pages/404";
import Profile from "./pages/customer/Profile";
import EditProfile from "./pages/customer/EditProfile";
import CustomerPurchases from "./pages/reservation/Purchases";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EventList from "./pages/events/Events";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { isLogged } from "../store/reducers/customerReducer";
import Buy from "./pages/reservation/Buy"

import CreateEvent from "./pages/events/New";

const RouterView: FC = () => {
    const customerToken = useSelector((state: RootState) => state.customer.token);
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route render={props => !isLogged(customerToken) ? <Login /> : <Redirect to="/" />} path="/iniciar-sesion" exact />
            <Route render={props => !isLogged(customerToken) ? <Register /> : <Redirect to="/" />} path="/registrarse" exact />
            <Route render={props => isLogged(customerToken) ? <Route path="/comprar/:id" exact component={Buy} /> : <Redirect to="/iniciar-sesion" />} path="/comprar/:id" exact />
            <Route render={props => isLogged(customerToken) ? <Profile /> : <Redirect to="/iniciar-sesion" />} path="/perfil" exact />
            <Route render={props => isLogged(customerToken) ? <EventList /> : <Redirect to="/iniciar-sesion" />} path="/eventos" exact />

            <Route render={props => isLogged(customerToken) ? <Route path="/eventos/editar/:id" exact component={CreateEvent} /> : <Redirect to="/iniciar-sesion" />} path="/eventos/editar/:id" exact />
            <Route render={props => isLogged(customerToken) ? <Route path="/eventos/crear" exact component={CreateEvent} /> : <Redirect to="/iniciar-sesion" />} path="/eventos/crear" exact />
            <Route render={props => isLogged(customerToken) ? <EditProfile /> : <Redirect to="/iniciar-sesion" />} path="/perfil/editar" exact />
            <Route render={props => isLogged(customerToken) ? <CustomerPurchases /> : <Redirect to="/iniciar-sesion" />} path="/todas-reservas" exact />
            <Route path="/404" exact component={T404} />
            <Redirect to="/404" />
        </Switch>
    )
}


export default RouterView;