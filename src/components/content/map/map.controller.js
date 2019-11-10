import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MapRenderer} from "../../../services/map/MapRenderer";

class MapController extends Component {

    renderMap(renderWithUserPosition) {
        const mapRenderer = new MapRenderer(
            this.props.mapId,
            this.props.data,
            this.props.icon
        )
        mapRenderer.renderData()
        if (renderWithUserPosition) {
            mapRenderer.withUserPosition(mapRenderer.bindCallbacksToThis(
                mapRenderer.renderNearest
            ))
        }
        return mapRenderer
    }

    componentDidMount() {
        this.mapRenderer = this.renderMap(this.props.renderWithUserPosition)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.renderWithUserPosition &&
            prevProps.renderWithUserPosition !== this.props.renderWithUserPosition) {
            this.mapRenderer.withUserPosition(this.mapRenderer.bindCallbacksToThis(
                this.mapRenderer.renderNearest
            ))
        }
    }

    render() {
        return <div
            className={this.props.big ? "map_container_big" : "map_container_small"}
            id={this.props.mapId}
        />
    }
}

MapController.propTypes = {
    icon: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    mapId: PropTypes.string.isRequired,
    renderWithUserPosition: PropTypes.bool.isRequired,
    big: PropTypes.bool
};

export default MapController;
