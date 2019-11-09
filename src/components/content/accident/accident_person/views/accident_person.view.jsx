import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../../constants/routes";

function AccidentPersonView(props) {
    return (
        <div>
            <Link to={ROUTES.ACCIDENT.ME.H}>Me</Link><br/>
            <Link to={ROUTES.ACCIDENT.OTHER.H}>Other</Link>
        </div>
    );
}

AccidentPersonView.propTypes = {

};

export default AccidentPersonView;
