import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MapRenderer} from "../../../services/map/MapRenderer";
import DeffibrilatorsService from "../../../services/deffibrilators/DeffibrilatorsService";
import deff_img from "../../../assets/img/mark.png";
import MapController from "../map/map.controller";

class DeffibrilatorsController extends Component {

    constructor(props) {
        super(props)
        this.id = 'deffibrilator_map'
    }

    render() {
        return <MapController
            icon={deff_img}
            data={DeffibrilatorsService.loadJson()}
            mapId={this.id}
            renderWithUserPosition={true} />
    }
}

DeffibrilatorsController.propTypes = {};

export default DeffibrilatorsController;
