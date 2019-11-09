import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccidentMeView from "./views/accident_me.view";
import LevelsView from "./views/levels.view";
import LevelItemView from "./views/level_item.view";
import {ROUTES} from "../../../../constants/routes";

class AccidentMeController extends Component {
    render() {
        return (
            <AccidentMeView>
                <LevelsView>
                    <LevelItemView
                        to={ROUTES.ACCIDENT.ME.LEVELS.URGENT}
                        title={"level 0"}
                    />
                    <LevelItemView
                        to={ROUTES.ACCIDENT.ME.LEVELS.LIGHT}
                        title={"level 1"}
                    />
                </LevelsView>
            </AccidentMeView>
        );
    }
}

AccidentMeController.propTypes = {};

export default AccidentMeController;
