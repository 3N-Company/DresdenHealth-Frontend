import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const LevelItemView = props => {
    return (
        <div>
            <Link to={props.to}>{props.title}</Link>
        </div>
    );
};

LevelItemView.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default LevelItemView;
