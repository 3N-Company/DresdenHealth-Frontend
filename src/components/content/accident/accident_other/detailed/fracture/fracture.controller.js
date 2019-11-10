import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FractureView from "./views/fracture.view";

class FractureController extends Component {

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

export default FractureController;
