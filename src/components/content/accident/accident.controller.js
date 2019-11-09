import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccidentView from "./views/accident.view";
import AccidentRouter from "./accident.router";

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
