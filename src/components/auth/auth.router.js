import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from "react-router";
import {ROUTES} from "../../constants/routes";
import LoginController from "./login/login.controller";

const AuthRouter = props => {
    return (
        <Switch>
            <Route exact to={ROUTES.AUTH.H} component={LoginController}/>
            <Route to={ROUTES.AUTH.LOGIN} component={LoginController}/>
        </Switch>
    );
};

AuthRouter.propTypes = {

};

export default AuthRouter;
