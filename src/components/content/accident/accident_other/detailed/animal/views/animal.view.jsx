import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../../../../constants/routes";
import DeffibrilatorsController from "../../../../../deffibrilators/deffibrilators.controller";
import FarmaciesController from "../../../../../farmacies/farmacies.controller";

const AnimalView = props => {
    return (
        <div>
            <div className="header_title">
                <div className="container">
                    <div className="row">
                        <div className="column col-lg-7 col-sm-11 offset-1">
                            <h6>Animal injure</h6>
                            <h2>Below you can find the information on what to do if someone is beaten</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="gap_100"/>

                    <div className="row">
                        <div className="column col-lg-6 offset-1 col-sm-11">
                            <h5>What should I  do?</h5>
                            <p className="lead">
                                First of all you need to inform the ambulance about the accident.
                                You can do this with the button below (it will send all the needed info).
                            </p>
                            <button onClick={props.handleCall}>Send emergency request</button>
                        </div>
                        <div className="column col-lg-5 col-sm-11">
                            <h5>Follow these steps</h5>
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
                big={true}
                control={false}
            />
        </div>
    );
};

AnimalView.propTypes = {
    handleCall: PropTypes.func.isRequired
};

export default AnimalView;
