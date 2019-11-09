import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MapService, {MapBuilder} from "../../../services/map/MapService";
import DeffibrilatorsService from "../../../services/deffibrilators/DeffibrilatorsService";

class DeffibrilatorsController extends Component {

    componentDidMount() {
        (new MapBuilder())
            .withUserPosition()
            .withData(DeffibrilatorsService.loadJson())
    }

    render() {
        return (
            <div id={"map"}/>
        );
    }
}

DeffibrilatorsController.propTypes = {};

export default DeffibrilatorsController;
