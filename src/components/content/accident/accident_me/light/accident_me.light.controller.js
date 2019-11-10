import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccidentMeLightView from "./views/accident_me.light.view";
import FarmaciesController from "../../../farmacies/farmacies.controller";
import {setTitle} from "../../../../../redux/actions/main";
import {connect} from "react-redux";

class AccidentMeLightController extends Component {

    componentDidMount() {
        this.props.dispatch(setTitle("Light Accident"))
    }

    render() {
        return (
            <AccidentMeLightView>
                <FarmaciesController
                    big={true}
                    auto={true}
                    control={false}
                />
            </AccidentMeLightView>
        );
    }
}

AccidentMeLightController.propTypes = {};


export default connect() (AccidentMeLightController);
