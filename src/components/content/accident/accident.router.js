import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from "react-router";
import AccidentPersonController from "./accident_person/accident_person.controller";
import AccidentMeController from "./accident_me/accident_me.controller";
import AccidentOtherController from "./accident_other/accident_other.controller";

function AccidentRouter() {
    return (
        <Switch>
            <Route exact to={"/"} component={AccidentPersonController}/>
            <Route exact to={"/me"} component={AccidentMeController}/>
            <Route exact to={"/other"} component={AccidentOtherController}/>
        </Switch>
    );
}

export default AccidentRouter;
