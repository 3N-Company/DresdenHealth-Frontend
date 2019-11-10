import React from 'react';
import PropTypes from 'prop-types';

const AccidentMeView = props => {
    return (
        <div>
            <div className="about">
                <div className="container">
                    <div className="gap_50"/>

                    <div className="row">
                        <div className="column col-lg-10 col-sm-11 offset-1">
                            <h6>On way</h6>
                            <h1>Ambulance is on way to you!</h1>
                        </div>
                    </div>

                    <div className="gap_50"/>

                    <div className="row">
                        <div className="column col-lg-10 col-sm-11 offset-1">
                            <h6>Your Doctor</h6>
                            <h1>Your doctor warned with all current info. </h1>
                        </div>
                    </div>

                    <div className="gap_50"/>

                    <div className="row">
                        <div className="column col-lg-10 col-sm-11 offset-1">
                            <h6>Your person</h6>

                            <h1>Your trust emergency contact was informed about situation </h1>
                        </div>
                    </div>

                    <div className="gap_50"/>
                    <div className="row">
                        <div className="column col-lg-10 col-sm-11 offset-1">
                            <h6>Don't worry</h6>

                            <h1>Try keep calm and wait for help. It will come as soon as possible!</h1>
                        </div>
                    </div>
                    <div className="gap_150"></div>

                </div>
            </div>

        </div>
    );
};

AccidentMeView.propTypes = {

};

export default AccidentMeView;
