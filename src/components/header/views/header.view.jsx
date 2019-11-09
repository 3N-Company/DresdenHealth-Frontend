import React from 'react';
import PropTypes from 'prop-types';
import MenuController from "../../menu/menu.controller";
import MenuButtonController from "../../menu/menuButton.controller";
import { Link} from "react-router-dom";


const HeaderView = props => {
    return (
        <header className="header">
            <div className="header_top container">
                <div className="header_logo float_left">
                    <Link to={'/'}>
                        <img src="https://www.dropbox.com/s/dff4ofuslr4dezq/hearty.svg?raw=1" alt="" className="logo_dark"/>
                        <img src="assets/img/logo-white.png" alt="" className="logo_white"/>
                    </Link>
                </div>

                <MenuButtonController/>
            </div>
        </header>
    );
};

HeaderView.propTypes = {};

export default HeaderView;
