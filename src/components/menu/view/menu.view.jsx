import React from 'react';
import PropTypes from 'prop-types';
import MenuCloseController from "../menuClose.controller";

const MenuView = ({children}) => {

    return (
        <div className="main_nav" id={"menu"}>
            <ul className="menu">
                {children}
            </ul>
            <MenuCloseController/>
        </div>
    );
};

MenuView.propTypes = {
    children: PropTypes.array
};

export default MenuView;
