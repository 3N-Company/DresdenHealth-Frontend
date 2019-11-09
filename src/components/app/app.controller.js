import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import HeaderController from "../header/header.controller";
import AppRouter from "./app.router";
import AppView from "./views/app.view";
import MenuController from "../menu/menu.controller";

class AppController extends Component {
    render() {
        return (
            <AppView>
                <HeaderController/>
                <MenuController/>
                <div className="main_overlay" id={"overlay"}/>
                <AppRouter/>
            </AppView>
        );
    }
}

AppController.propTypes = {};

export default AppController;
