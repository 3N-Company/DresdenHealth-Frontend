import React, {Component} from 'react';
import AccidentMeView from "./views/accident_me.urgent.view";
import {connect} from "react-redux";
import {setTitle} from "../../../../../redux/actions/main";

class AccidentMeUrgentController extends Component {
    componentDidMount() {
        this.props.dispatch(setTitle("Urgent Accident"))
    }

    render() {
        return (
            <AccidentMeView>
            </AccidentMeView>
        );
    }
}

AccidentMeUrgentController.propTypes = {};

export default connect()(AccidentMeUrgentController);
