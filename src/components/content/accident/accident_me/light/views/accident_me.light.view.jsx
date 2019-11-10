import React from 'react';
import PropTypes from 'prop-types';

const AccidentMeLightView = props => {
    return (
        <div>
            <h3>Light accident</h3>
            <p>
                Here some advices and text and route to nearest pharmacy
            </p>
            {props.children}
        </div>
    );
};

AccidentMeLightView.propTypes = {

};

export default AccidentMeLightView;
