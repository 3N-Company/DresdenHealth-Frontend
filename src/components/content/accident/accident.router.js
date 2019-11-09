import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from "react-router";
import AccidentPersonController from "./accident_person/accident_person.controller";
import AccidentMeController from "./accident_me/accident_me.controller";
import AccidentOtherController from "./accident_other/accident_other.controller";
import {ROUTES} from "../../../constants/routes";
import AccidentMeRouter from "./accident_me/accident_me.router";

function AccidentRouter() {
    return (
        <Switch>
            <Route path={ROUTES.ACCIDENT.ME.H} component={AccidentMeRouter}/>
            <Route path={ROUTES.ACCIDENT.OTHER.H} component={AccidentOtherController}/>
            <Route exact path={[ROUTES.ACCIDENT.H, ROUTES.H]} component={AccidentPersonController}/>
        </Switch>
    );
}

export default AccidentRouter;
