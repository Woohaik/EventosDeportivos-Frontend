import React, { Fragment, FC } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import RouterView from "./RouterView"
import NavBar from "./components/Navbar";
const App: FC = () => {
  return (
    <Fragment >
      <Router>
        <NavBar />
        <div className="container">
          <RouterView />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
