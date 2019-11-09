import React from 'react';
import PropTypes from 'prop-types';

const MenuView = ({children}) => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                {children}
            </ul>
        </div>
    );
};

MenuView.propTypes = {
    children: PropTypes.array
};

export default MenuView;
