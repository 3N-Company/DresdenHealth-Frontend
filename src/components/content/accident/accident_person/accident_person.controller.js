import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccidentPersonView from "./views/accident_person.view";
import {setTitle} from "../../../../redux/actions/main";
import {connect} from "react-redux";

class AccidentPersonController extends Component {

    componentDidMount() {
        this.props.dispatch(setTitle("Accident"))
    }

    render() {
        return (
            <AccidentPersonView/>
        );
    }
}

AccidentPersonController.propTypes = {};

export default connect()(AccidentPersonController);
