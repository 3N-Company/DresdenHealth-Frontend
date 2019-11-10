import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AnimalView from "./views/animal.view";
import {connect} from "react-redux";
import {setTitle} from "../../../../../../redux/actions/main";

class AnimalController extends Component {

    componentDidMount() {
        this.props.dispatch(setTitle("Animal Sting"))
    }

    handleNotify(){
        console.log("Notifying emergency")
        alert("Emergency notified")
    }

    render() {
        return (
            <AnimalView handleCall={this.handleNotify}/>
        );
    }
}

AnimalController.propTypes = {};

export default connect() ( AnimalController);
