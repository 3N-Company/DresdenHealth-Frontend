import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../../constants/routes";

const LevelItemView = props => {
    return (
        <div className="column col-md-6 col-sm-12 mb-5">
            <h1 className={"big"}><Link to={props.to}>{props.title}</Link><br/></h1>
        </div>
    );
};

LevelItemView.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default LevelItemView;
