import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from "react-router";
import AccidentController from "../content/accident/accident.controller";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact to={"/"} component={AccidentController}/>
            <Route to={"/accident"} component={AccidentController}/>
        </Switch>
    );
};

AppRouter.propTypes = {};

export default AppRouter;
