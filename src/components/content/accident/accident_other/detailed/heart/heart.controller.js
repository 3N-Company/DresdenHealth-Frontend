import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HeartView from "./views/heart.view";
import {connect} from "react-redux";
import {setTitle} from "../../../../../../redux/actions/main";

class HeartController extends Component {
    componentDidMount() {
        this.props.dispatch(setTitle("Heart Attack"))
    }
    handleNotify(){
        console.log("Notifying emergency");
        alert("Emergency notified")
    }

    render() {
        return (
            <HeartView handleCall={this.handleNotify}/>
        );
    }
}

HeartController.propTypes = {};

export default connect()  (HeartController);
