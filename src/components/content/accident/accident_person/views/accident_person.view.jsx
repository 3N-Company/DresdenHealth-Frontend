import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../../constants/routes";

function AccidentPersonView(props) {
    return (
        <div className="about">
            <div className="container">
                <div className="gap_150"></div>
                <div className="row offset-1">
                    <div className="column col-md-6 col-sm-12">
                        <h6>When do you need help click here</h6>
                        <h1> <Link to={ROUTES.ACCIDENT.ME.H}>I'm in trouble</Link><br/></h1>
                    </div>
                    <div className="column col-md-6 col-sm-12">
                        <h6>If anyone need help click here</h6>
                        <h1><Link to={ROUTES.ACCIDENT.OTHER.H}>Somebody in trouble</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

AccidentPersonView.propTypes = {

};

export default AccidentPersonView;
