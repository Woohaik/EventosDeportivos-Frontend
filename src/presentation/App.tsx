import React, { Fragment, FC } from 'react';
import { Router } from "react-router-dom";
import RouterView from "./RouterView"
import NavBar from "./components/Navbar";
import history from '../router/history';
import Alert from "./components/Alert"
import { authCustomerAction } from "../store/actions/customerActions";
import { useDispatch } from "react-redux";



const App: FC = () => {
  const dispatch = useDispatch();
  dispatch(authCustomerAction())


  return (
    <Fragment >
      <Router history={history}>
        <NavBar />
        <div id="app-container" className="container">
          <Alert />
          <RouterView />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
