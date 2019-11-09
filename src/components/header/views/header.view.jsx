import React from 'react';
import PropTypes from 'prop-types';
import MenuController from "../../menu/menu.controller";

const HeaderView = props => {
    return (
        <div>
            Header
            <MenuController />
        </div>
    );
};

HeaderView.propTypes = {

};

export default HeaderView;
