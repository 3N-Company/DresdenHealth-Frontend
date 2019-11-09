import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const AccidentOtherView = props => {
    return (
        <div className="header_title">
            <div className="container">
                <div className="row">
                    <div className="column col-7 offset-">
                        <h6>I understand.</h6>
                        <h1>Please choose what happend?</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

AccidentOtherView.propTypes = {

};

export default AccidentOtherView;
