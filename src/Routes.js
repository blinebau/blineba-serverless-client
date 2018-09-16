import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
/*
In React JSX
Props with no assignment is equivalent to a
"true" string value
e.g. exact => exact="true"
*/
export default () =>
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        {/* Catch all for unmatched routes*/}
        <Route component={NotFound}/>
    </Switch>;