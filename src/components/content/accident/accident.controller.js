import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccidentView from "./views/accident.view";
import AccidentRouter from "./accident.router";
import {connect} from "react-redux";
import {setTitle} from "../../../redux/actions/main";

class AccidentController extends Component {

    render() {
        return (
            <AccidentView>
                <AccidentRouter/>
            </AccidentView>
        );
    }
}

AccidentController.propTypes = {};

export default AccidentController;
