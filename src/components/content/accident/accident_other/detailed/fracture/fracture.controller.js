import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FractureView from "./views/fracture.view";

class FractureController extends Component {
    render() {
        return (
            <FractureView/>
        );
    }
}

FractureController.propTypes = {};

export default FractureController;
