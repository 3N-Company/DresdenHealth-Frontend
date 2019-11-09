import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function MenuItemView(props) {
    return (
        <li className="nav-item active">
            <Link className="nav-link" to={props.link}>{props.name}</Link>
        </li>
    );
}

MenuItemView.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};


export default MenuItemView;
