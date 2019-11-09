import React from 'react';
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const AppView = ({children}) => {
    return (
        <div>
            <Link to={"/"}>GOI</Link>
            {children}
        </div>
    );
};

AppView.propTypes = {
    children: PropTypes.array
}

export default AppView;
