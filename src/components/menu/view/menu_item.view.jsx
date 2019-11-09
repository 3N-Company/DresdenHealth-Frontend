import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function MenuItemView(props) {
    const close = function () {
        const wrapper = document.getElementById("menu");
        const overlay = document.getElementById("overlay");
        wrapper.classList.toggle('open');
        overlay.classList.toggle('open');
    };
    return (
        <li>
            <Link to={props.link} onClick={close}>{props.name}</Link>
        </li>
    );
}

MenuItemView.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};


export default MenuItemView;
