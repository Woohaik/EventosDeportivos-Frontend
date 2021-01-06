import React, { Fragment, FC } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import RouterView from "./RouterView"
import NavBar from "./components/Navbar";

import Alert from "./components/Alert"
const App: FC = () => {
  return (
    <Fragment >
      <Router>
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
