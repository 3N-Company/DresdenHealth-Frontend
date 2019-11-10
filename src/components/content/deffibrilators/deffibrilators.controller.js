import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {MapRenderer} from "../../../services/map/MapRenderer";
import DeffibrilatorsService from "../../../services/deffibrilators/DeffibrilatorsService";
import deff_img from "../../../assets/img/mark.png";
import MapController from "../map/map.controller";
import DeffibrilatorsView from "./views/deffibrilators.view";
import {connect} from "react-redux";
import {setTitle} from "../../../redux/actions/main";

class DeffibrilatorsController extends Component {

    constructor(props) {
        super(props)
        this.id = 'deffibrilator_map'
        this.state = {
            controlEnabled: true,
            auto: props.auto
        }
    }

    componentDidMount() {
        if(this.props.setTitle){
            this.props.dispatch(setTitle("Defibrillators"))
        }
    }


    setControlEnabled(controlEnabled) {
        this.setState({controlEnabled})
    }

    findNearest(){
        this.setControlEnabled(false)
        this.setState({auto: true})
        this.forceUpdate()
    }

    render() {
        return (
            <DeffibrilatorsView
                control={this.props.control}
                controlEnabled={this.state.controlEnabled}
                onFindClick={this.findNearest.bind(this)}>
                <MapController
                    big={this.props.big}
                    icon={deff_img}
                    data={DeffibrilatorsService.loadJson()}
                    mapId={this.id}
                    renderWithUserPosition={this.state.auto}
                />
            </DeffibrilatorsView>
        )
    }
}

DeffibrilatorsController.propTypes = {
    setTitle: PropTypes.bool,
    auto: PropTypes.bool.isRequired,
    big: PropTypes.bool.isRequired,
    control: PropTypes.bool.isRequired
};

export default connect()(DeffibrilatorsController);
