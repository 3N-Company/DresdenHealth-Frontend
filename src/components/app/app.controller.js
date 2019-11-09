import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import HeaderController from "../header/header.controller";
import AppRouter from "./app.router";
import AppView from "./views/app.view";

class AppController extends Component {
    render() {
        return (
            <AppView>
                <HeaderController/>
                <AppRouter/>
            </AppView>
        );
    }
}

AppController.propTypes = {};

export default AppController;
