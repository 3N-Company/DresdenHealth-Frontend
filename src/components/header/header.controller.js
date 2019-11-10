import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HeaderView from "./views/header.view";
import MenuController from "../menu/menu.controller";
import {connect} from "react-redux";
import {stateToHeaderController} from "../../services/props_mappers/header_mappers";

class HeaderController extends Component {
    constructor(props) {
        super(props);
        this.state = {isMenuOpen: false};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isMenuOpen: !state.isMenuOpen
        }));
    }

    render() {
        return (
            <HeaderView title={this.props.title}/>
        );
    }
}


HeaderController.propTypes = {
    title: PropTypes.string.isRequired
};

export default connect(stateToHeaderController)(HeaderController);
