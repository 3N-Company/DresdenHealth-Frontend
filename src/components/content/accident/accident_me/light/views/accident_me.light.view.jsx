import React from 'react';
import FarmaciesController from "../../../../farmacies/farmacies.controller";

const AccidentMeLightView = props => {
    return (
        <div>
            <div className="header_title">
                <div className="container">
                    <div className="row">
                        <div className="column col-lg-7 col-sm-11 offset-1">
                            <h6>Light</h6>
                            <h2>Below you can found useful information what to do if someone is beaten</h2>
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
                            <p className="lead">
                                First of all, try to keep calm. You can find some useful tips
                                on our website. There is also an information about the
                                pharmacies and hospitals next to you. Call you friends or family and inform them about
                                your condition and location, so they can help you.
                            </p>
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
            {props.children}
        </div>

    );
};

AccidentMeLightView.propTypes = {};

export default AccidentMeLightView;
