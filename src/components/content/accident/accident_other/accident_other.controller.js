import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccidentOtherView from "./accident_other/accident_other.view";
import LevelItemView from "../accident_me/views/level_item.view";
import {ROUTES} from "../../../../constants/routes";
import LevelsView from "../accident_me/views/levels.view";
import {setTitle} from "../../../../redux/actions/main";
import {connect} from "react-redux";

class AccidentOtherController extends Component {

    componentDidMount() {
        this.props.dispatch(setTitle("Accident with other"))
    }

    render() {
        return (
            <AccidentOtherView>
                <LevelsView>
                    <LevelItemView
                        to={ROUTES.ACCIDENT.ME.LEVELS.URGENT}
                        title={"Heart attack"}
                    />
                    <LevelItemView
                        to={ROUTES.ACCIDENT.ME.LEVELS.LIGHT}
                        title={"Animal Stings"}
                    />
                    <LevelItemView
                        to={ROUTES.ACCIDENT.ME.LEVELS.LIGHT}
                        title={"Fracture"}
                    />
                </LevelsView>
            </AccidentOtherView>
        );
    }
}

AccidentOtherController.propTypes = {};

export default connect()(AccidentOtherController);
