import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MapRenderer} from "../../../services/map/MapRenderer";

class MapController extends Component {

    componentDidMount() {
        const mapRenderer = new MapRenderer(
            this.props.mapId,
            this.props.data,
            this.props.icon
        )
        mapRenderer.renderData()
        if (this.props.renderWithUserPosition) {
            mapRenderer.withUserPosition(mapRenderer.bindCallbacksToThis(
                mapRenderer.renderNearest
            ))
        }
    }

    render() {
        return <div className={"map_container_small"} id={this.props.mapId}/>
    }
}

MapController.propTypes = {
    icon: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    mapId: PropTypes.object.isRequired,
    renderWithUserPosition: PropTypes.bool.isRequired
};

export default MapController;
