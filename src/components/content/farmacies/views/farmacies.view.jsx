import React from 'react';
import PropTypes from 'prop-types';

const FarmaciesView = props => {

    const controlButtons = props.control ? (
        <button onClick={props.onFindClick}
                disabled={!props.controlEnabled}>
            Find nearest farmacies
        </button>
    ) : ""


    return (
        <div className="text_center">
            {controlButtons}
            {props.children}
        </div>
    );
};

FarmaciesView.propTypes = {
    children: PropTypes.object,
    control: PropTypes.bool.isRequired,
    controlEnabled: PropTypes.bool.isRequired,
    onFindClick: PropTypes.func.isRequired
};

export default FarmaciesView;
