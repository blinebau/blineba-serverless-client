import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import AppliedRoute from "./components/AppliedRoute";

/*
In React JSX
Props with no assignment is equivalent to a
"true" string value
e.g. exact => exact="true"
*/
export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps}/>
        <AppliedRoute path="/login" exact component={Login} props={childProps}/>
        <AppliedRoute path="/signup" exact component={Signup} props={childProps}/>
        <AppliedRoute path="/notes/new" exact component={NewNote} props={childProps}/>
        {/* Catch all for unmatched routes*/}
        <Route component={NotFound}/>
    </Switch>;