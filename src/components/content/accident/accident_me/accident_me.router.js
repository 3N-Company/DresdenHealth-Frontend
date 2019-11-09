import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from "react-router";
import {ROUTES} from "../../../../constants/routes";
import AccidentMeController from "./accident_me.controller";
import AccidentMeUrgentController from "./urgent/accident_me.urgent.controller";
import AccidentMeLightController from "./light/accident_me.light.controller";

const AccidentMeRouter = props => {
    return (
        <Switch>
            <Route exact path={ROUTES.ACCIDENT.ME.H} component={AccidentMeController}/>
            <Route path={ROUTES.ACCIDENT.ME.LEVELS.URGENT} component={AccidentMeUrgentController}/>
            <Route path={ROUTES.ACCIDENT.ME.LEVELS.LIGHT} component={AccidentMeLightController}/>
        </Switch>
    );
};

AccidentMeRouter.propTypes = {

};

export default AccidentMeRouter;
