import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HeaderView from "./views/header.view";

class HeaderController extends Component {
    render() {
        return (
            <HeaderView/>
        );
    }
}

HeaderController.propTypes = {};

export default HeaderController;
