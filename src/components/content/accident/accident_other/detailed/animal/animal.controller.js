import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AnimalView from "./views/animal.view";

class AnimalController extends Component {
    render() {
        return (
            <AnimalView/>
        );
    }
}

AnimalController.propTypes = {};

export default AnimalController;
