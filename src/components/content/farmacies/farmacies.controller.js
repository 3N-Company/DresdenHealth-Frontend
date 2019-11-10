import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MapRenderer} from "../../../services/map/MapRenderer";
import farm_img from "../../../assets/img/farmacy.png";
import FarmaciesService from "../../../services/farmacies/FarmaciesService";
import MapController from "../map/map.controller";
import deff_img from "../../../assets/img/mark.png";
import DeffibrilatorsService from "../../../services/deffibrilators/DeffibrilatorsService";
import DeffibrilatorsView from "../deffibrilators/views/deffibrilators.view";
import FarmaciesView from "./views/farmacies.view";
import {connect} from "react-redux";
import {setTitle} from "../../../redux/actions/main";

class FarmaciesController extends Component {

    constructor(props) {
        super(props)
        this.id = 'farmacies_map'
        this.state = {
            controlEnabled: true,
            auto: props.auto,
        }
    }

    componentDidMount() {
        if(this.props.setTitle){
            this.props.dispatch(setTitle("Farmacies"))
        }
    }

    setControlEnabled(controlEnabled) {
        this.setState({controlEnabled})
    }

    findNearest() {
        this.setControlEnabled(false)
        this.setState({auto: true})
    }

    render() {
        return (
            <FarmaciesView
                control={this.props.control}
                controlEnabled={this.state.controlEnabled}
                onFindClick={this.findNearest.bind(this)}>
                <MapController
                    icon={farm_img}
                    big={this.props.big}
                    data={FarmaciesService.loadJson()}
                    mapId={this.id}
                    renderWithUserPosition={this.state.auto}/>

            </FarmaciesView>
        )
    }
}

FarmaciesController.propTypes = {
    setTitle: PropTypes.bool,
    auto: PropTypes.bool.isRequired,
    big: PropTypes.bool.isRequired,
    control: PropTypes.bool.isRequired
};

export default connect()(FarmaciesController);
