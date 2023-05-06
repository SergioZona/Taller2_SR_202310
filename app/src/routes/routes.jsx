import { Route, Router } from "react-router-dom";
import React from 'react';
import Home from "../pages/home/home";
import Login from "../pages/logIn/login";

const Routes = () => (
    <Router>
        <Route exact path="/sessionstate1" component={Home} />
        <Route exact path="/sessionstate2" component={Login} />
        {/* <Route exact path="/sessionstate3" component={Template3}/> */}
    </Router>
);

export default Routes;