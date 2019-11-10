import React from 'react';
import PropTypes from 'prop-types';
import {ROUTES} from "../../../../../../../constants/routes";
import {Link} from "react-router-dom";
import FarmaciesController from "../../../../../farmacies/farmacies.controller";

const FractureView = props => {
    return (
        <div>
            <div className="header_title">
                <div className="container">
                    <div className="row">
                        <div className="column col-lg-7 col-sm-11 offset-1">
                            <h6> Fracture insurance guide</h6>
                            <h2>Below you can found  useful information what to do if someone was injured</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="gap_100"/>

                    <div className="row">
                        <div className="column col-lg-6 offset-1 col-sm-11">
                            <h5>What I should do?</h5>
                            <p className="lead">First of all you need to call the ambulance about insure.
                                You can do this with this button (it will send all needed info).
                            </p>
                            <button onClick={props.handleCall}>Send emergency request</button>
                        </div>
                        <div className="column col-lg-5 col-sm-11">
                            <h5>Next folow these steps</h5>
                            <ol style={{listStyle: "inside decimal-leading-zero"}}>
                                <li>Call the ambulance</li>
                                <li>Find nearest pharmacy (see map below)</li>
                                <li>First help</li>
                                <li>Wait for medicals</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap_100"/>
            <FarmaciesController
                auto={true}
                big={false}
                control={false}
            />
        </div>
    );
};

FractureView.propTypes = {
    handleCall: PropTypes.func.isRequired
};

export default FractureView;
