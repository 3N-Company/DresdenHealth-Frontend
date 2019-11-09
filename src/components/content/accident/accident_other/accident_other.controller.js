import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccidentOtherView from "./accident_other/accident_other.view";

class AccidentOtherController extends Component {
    render() {
        return (
            <div>
                <AccidentOtherView/>
            </div>
        );
    }
}

AccidentOtherController.propTypes = {};

export default AccidentOtherController;
