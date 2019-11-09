import React from 'react';
import PropTypes from 'prop-types';
import MenuController from "../../menu/menu.controller";
import { Link} from "react-router-dom";


const HeaderView = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to={'/'}>Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <MenuController/>
        </nav>
    );
};

HeaderView.propTypes = {};

export default HeaderView;
