import React, { FC } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import T404 from "./pages/404";
import Profile from "./pages/customer/Profile";
import EditProfile from "./pages/customer/EditProfile";
import CustomerPurchases from "./pages/Purchases";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EventList from "./pages/events/Events";
import EditEvent from "./pages/events/Edit";
import CreateEvent from "./pages/events/New";

const RouterView: FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/iniciar-sesion" exact component={Login} />
            <Route path="/registrarse" exact component={Register} />
            <Route path="/perfil" exact component={Profile} />
            <Route path="/perfil/editar" exact component={EditProfile} />
            <Route path="/todas-reservas" exact component={CustomerPurchases} />
            <Route path="/eventos" exact component={EventList} />
            <Route path="/eventos/crear" exact component={CreateEvent} />
            <Route path="/eventos/editar" exact component={EditEvent} />
            <Route path="/404" exact component={T404} />
            <Redirect to="/404" />
        </Switch>
    )
}


export default RouterView;