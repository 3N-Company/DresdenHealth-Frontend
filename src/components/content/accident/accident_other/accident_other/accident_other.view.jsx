import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const AccidentOtherView = ({children}) => {
    return (
        <div>
            <div className="header_title">
                <div className="container">
                    <div className="gap_150"/>
                    <div className="row">
                        <div className="column col-12 text_center">
                            <h6>I see.</h6>
                            <h1>Please choose what happend.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="gap_150"/>
                    <div className="row offset-1">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

AccidentOtherView.propTypes = {};

export default AccidentOtherView;
