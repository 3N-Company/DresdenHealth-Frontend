import React, {Component} from 'react';
import {connect} from "react-redux";
import ActuallView from "./views/actuall.view";
import {setTitle} from "../../../redux/actions/main";

class ActuallController extends Component {

    componentDidMount() {
        this.props.dispatch(setTitle("Actuall"))
    }


    render() {
        return (
            <ActuallView/>
        )
    }
}

ActuallController.propTypes = {};
export default connect()(ActuallController);
