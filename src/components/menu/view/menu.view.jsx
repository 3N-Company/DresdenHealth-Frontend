import React from 'react';
import PropTypes from 'prop-types';

const MenuView = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

MenuView.propTypes = {
    children: PropTypes.array
};

export default MenuView;
