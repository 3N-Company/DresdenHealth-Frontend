import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MapRenderer} from "../../../services/map/MapRenderer";
import farm_img from "../../../assets/img/farmacy.png";
import FarmaciesService from "../../../services/farmacies/FarmaciesService";
import MapController from "../map/map.controller";

class FarmaciesController extends Component {
    constructor(props) {
        super(props)
        this.id = 'farmacies_map'
    }

    render() {
        return <MapController
            icon={farm_img}
            data={FarmaciesService.loadJson()}
            mapId={this.id}
            renderWithUserPosition={true}/>
    }
}

FarmaciesController.propTypes = {};

export default FarmaciesController;
