import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HeartView from "./views/heart.view";

class HeartController extends Component {
    render() {
        return (
            <HeartView/>
        );
    }
}

HeartController.propTypes = {};

export default HeartController;
