import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import HeaderController from "../header/header.controller";
import AppRouter from "./app.router";

class AppController extends Component {
    render() {
        return (
            <Fragment>
                <HeaderController/>
                <AppRouter/>
            </Fragment>
        );
    }
}

AppController.propTypes = {};

export default AppController;
