import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from "react-router";
import AccidentController from "../content/accident/accident.controller";
import {ROUTES} from "../../constants/routes";
import DeffibrilatorsController from "../content/deffibrilators/deffibrilators.controller";
import FarmaciesController from "../content/farmacies/farmacies.controller";
import ActuallController from "../content/actuall/actuall.controller";

const AppRouter = () => {

    const withBigAutoProps = () => {
        return {
            big: true,
            auto: false,
            control: true,
            setTitle: true
        }
    }

    return (
        <Fragment>
            <Route path={ROUTES.ACCIDENT.H} component={AccidentController}/>
            <Route exact path={ROUTES.H} component={AccidentController}/>
            <Route exact
                   path={ROUTES.DEFFIBRILATORS.H}
                   component={() => <DeffibrilatorsController {...withBigAutoProps()} />}
            />
            <Route exact
                   path={ROUTES.FARMACIES.H}
                   component={() => <FarmaciesController {...withBigAutoProps()} />}
            />
            <Route exact
                   path={ROUTES.ACTUALL.H}
                   component={() => <ActuallController {...withBigAutoProps()} />}
            />
        </Fragment>
    );
};

AppRouter.propTypes = {};

export default AppRouter;
