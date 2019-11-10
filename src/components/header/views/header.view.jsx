import React from 'react';
import PropTypes from 'prop-types';
import MenuController from "../../menu/menu.controller";
import MenuButtonController from "../../menu/menuButton.controller";
import { Link} from "react-router-dom";
import logo from '../../../assets/img/logo.svg'


const HeaderView = props => {
    return (
        <header className="header">
            <div className="header_top container">
                <div className="header_logo float_left">
                    <Link to={'/'}>
                        <img src={logo} alt="" className="logo_dark"/>
                        <img src="assets/img/logo-white.png" alt="" className="logo_white"/>
                    </Link>
                    <h1 className="mt-lg-5 logo-text">{props.title}</h1>
                </div>

                <MenuButtonController/>
            </div>
        </header>
    );
};

HeaderView.propTypes = {
    title: PropTypes.string.isRequired
};

export default HeaderView;
