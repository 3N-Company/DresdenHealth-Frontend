import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from "react-router";
import AccidentController from "../content/accident/accident.controller";
import {ROUTES} from "../../constants/routes";

const AppRouter = () => {
    return (
        <Fragment>
            <Route path={ROUTES.ACCIDENT.H} component={AccidentController}/>
            <Route exact path={ROUTES.H} component={AccidentController}/>
        </Fragment>
    );
};

AppRouter.propTypes = {};

export default AppRouter;
