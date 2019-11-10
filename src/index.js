import React from 'react';

import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import "leaflet/dist/leaflet.css"

import { render } from "react-dom"

import AppController from './components/app/app.controller';
import * as serviceWorker from './serviceWorker';
import store, {history} from "./redux/store";
import {ConnectedRouter} from "connected-react-router";
import { Provider, ReactReduxContext } from 'react-redux'

const target = document.querySelector("#root");

render(
    <Provider store={store} context={ReactReduxContext}>
        <ConnectedRouter history={history} context={ReactReduxContext}>
            <AppController/>
        </ConnectedRouter>
    </Provider>,
    target
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
