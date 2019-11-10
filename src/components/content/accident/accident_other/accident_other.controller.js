import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccidentOtherView from "./accident_other/accident_other.view";
import LevelItemView from "../accident_me/views/level_item.view";
import {ROUTES} from "../../../../constants/routes";
import LevelsView from "../accident_me/views/levels.view";
import {setTitle} from "../../../../redux/actions/main";
import {connect} from "react-redux";
import HeartAttackDescription from "./accident_other/heart_attack_description";

class AccidentOtherController extends Component {

    componentDidMount() {
        this.props.dispatch(setTitle("Accident with other"))
    }



    render() {
        return (
            <AccidentOtherView>
                <LevelsView>
                    <LevelItemView
                        to={ROUTES.ACCIDENT.OTHER.HEART}
                        title={"Heart attack"}>
                        <HeartAttackDescription/>
                    </LevelItemView>
                    <LevelItemView
                        to={ROUTES.ACCIDENT.OTHER.ANIMAL}
                        title={"Animal Stings"}
                    />
                    <LevelItemView
                        to={ROUTES.ACCIDENT.OTHER.FRACTURE}
                        title={"Fracture"}
                    />
                </LevelsView>
            </AccidentOtherView>
        );
    }
}

AccidentOtherController.propTypes = {};

export default connect()(AccidentOtherController);
