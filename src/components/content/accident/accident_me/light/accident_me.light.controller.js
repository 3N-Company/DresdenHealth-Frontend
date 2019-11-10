import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccidentMeLightView from "./views/accident_me.light.view";
import FarmaciesController from "../../../farmacies/farmacies.controller";

class AccidentMeLightController extends Component {
    render() {
        return (
            <AccidentMeLightView>
                <FarmaciesController
                    big={false}
                    auto={true}
                    control={false}
                />
            </AccidentMeLightView>
        );
    }
}

AccidentMeLightController.propTypes = {};

export default AccidentMeLightController;
