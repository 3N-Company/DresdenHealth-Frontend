import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MapRenderer} from "../../../services/map/MapRenderer";
import DeffibrilatorsService from "../../../services/deffibrilators/DeffibrilatorsService";
import deff_img from "../../../assets/img/mark.png";

class DeffibrilatorsController extends Component {

    constructor(props) {
        super(props)
        this.id = 'deffibrilator_map'
    }

    componentDidMount() {
        const mapRenderer = new MapRenderer(
            this.id,
            DeffibrilatorsService.loadJson(),
            deff_img
        )
        mapRenderer
            .renderData()
            .withUserPosition(mapRenderer.bindCallbacksToThis(
                mapRenderer.renderNearest
            ))
    }

    render() {
        return (
            <div id={this.id}/>
        );
    }
}

DeffibrilatorsController.propTypes = {};

export default DeffibrilatorsController;
