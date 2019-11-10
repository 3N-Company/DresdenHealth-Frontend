import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccidentMeView from "./views/accident_me.view";
import LevelsView from "./views/levels.view";
import LevelItemView from "./views/level_item.view";
import {ROUTES} from "../../../../constants/routes";
import {setTitle} from "../../../../redux/actions/main";
import {connect} from "react-redux";

class AccidentMeController extends Component {

    imDyingClick(){

    }

    componentDidMount() {
        this.props.dispatch(setTitle("Accident with me"))
    }

    render() {
        return (
            <AccidentMeView>
                <LevelsView>
                    <LevelItemView
                        to={ROUTES.ACCIDENT.ME.LEVELS.URGENT}
                        title={"I'm dying bro"}
                    />
                    <LevelItemView
                        to={ROUTES.ACCIDENT.ME.LEVELS.LIGHT}
                        title={"That is okay"}
                    />
                </LevelsView>
            </AccidentMeView>
        );
    }
}

AccidentMeController.propTypes = {};

export default connect()(AccidentMeController);
