import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccidentMeView from "./views/accident_me.view";

class AccidentMeController extends Component {
    render() {
        return (
            <div>
                <AccidentMeView/>
            </div>
        );
    }
}

AccidentMeController.propTypes = {};

export default AccidentMeController;
