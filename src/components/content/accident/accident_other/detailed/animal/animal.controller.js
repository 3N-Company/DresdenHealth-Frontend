import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AnimalView from "./views/animal.view";

class AnimalController extends Component {

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

export default AnimalController;
