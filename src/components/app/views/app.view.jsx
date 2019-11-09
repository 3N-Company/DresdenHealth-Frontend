import React from 'react';
import PropTypes from 'prop-types'

const AppView = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

AppView.propTypes = {
    children: PropTypes.array
}

export default AppView;
