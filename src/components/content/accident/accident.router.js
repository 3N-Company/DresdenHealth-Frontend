import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from "react-router";
import AccidentPersonController from "./accident_person/accident_person.controller";
import AccidentMeController from "./accident_me/accident_me.controller";
import AccidentOtherController from "./accident_other/accident_other.controller";
import {ROUTES} from "../../../constants/routes";
import AccidentMeRouter from "./accident_me/accident_me.router";
import HeartController from "./accident_other/detailed/heart/heart.controller";
import FractureController from "./accident_other/detailed/fracture/fracture.controller";
import AnimalController from "./accident_other/detailed/animal/animal.controller";

function AccidentRouter() {
    return (
        <Switch>
            <Route path={ROUTES.ACCIDENT.ME.H} component={AccidentMeRouter}/>
            <Route exact path={ROUTES.ACCIDENT.OTHER.H} component={AccidentOtherController}/>
            <Route path={ROUTES.ACCIDENT.OTHER.HEART} component={HeartController}/>
            <Route path={ROUTES.ACCIDENT.OTHER.FRACTURE} component={FractureController}/>
            <Route path={ROUTES.ACCIDENT.OTHER.ANIMAL} component={AnimalController}/>
            <Route exact path={[ROUTES.ACCIDENT.H, ROUTES.H]} component={AccidentPersonController}/>
        </Switch>
    );
}

export default AccidentRouter;
