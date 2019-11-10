import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FractureView from "./views/fracture.view";
import {setTitle} from "../../../../../../redux/actions/main";
import {connect} from "react-redux";

class FractureController extends Component {
    componentDidMount() {
        this.props.dispatch(setTitle("Fracture"))
    }

    handleNotify(){
        console.log("Notifying emergency")
        alert("Emergency notified")
    }

    render() {
        return (
            <FractureView handleCall={this.handleNotify}/>
        );
    }
}

FractureController.propTypes = {};

export default connect()(FractureController);
