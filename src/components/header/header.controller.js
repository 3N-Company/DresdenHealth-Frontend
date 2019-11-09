import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HeaderView from "./views/header.view";
import MenuController from "../menu/menu.controller";

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
            <HeaderView/>
        );
    }
}


HeaderController.propTypes = {};

export default HeaderController;
