import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccidentPersonView from "./views/accident_person.view";

class AccidentPersonController extends Component {
    render() {
        return (
            <AccidentPersonView/>
        );
    }
}

AccidentPersonController.propTypes = {};

export default AccidentPersonController;
