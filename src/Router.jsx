import React from "react";
import {Switch, Route} from "react-router";
import {Login, Home} from "./templates";
// import Home from "./templates/Home";
// import Login from "./templates/Login";

const Router = () => {
    return(
        <Switch>
            <Route exact path = {"/login"} component = {Login}/>
            {/* /があってもなくても行ける */}
            <Route exact path = {"(/)?"} component = {Home}/>
        </Switch>
    )
}

export default Router;