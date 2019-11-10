import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HeartView from "./views/heart.view";

class HeartController extends Component {

    handleNotify(){
        console.log("Notifying emergency")
        alert("Emergency notified")
    }

    render() {
        return (
            <HeartView handleCall={this.handleNotify}/>
        );
    }
}

HeartController.propTypes = {};

export default HeartController;
