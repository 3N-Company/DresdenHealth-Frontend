import React from 'react';

const AccidentMeLightView = props => {
    return (
        <div>
            <div className="header_title">
                <div className="container">
                    <div className="row">
                        <div className="column col-lg-7 col-sm-11 offset-1">
                            <h6>Light Accedent</h6>
                            <h2>Below you can found some useful information and info about nearest pharmicy</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="gap_100"/>

                    <div className="row">
                        <div className="column col-4 offset-1">
                            <h6>What I should do?</h6>
                            <p className="lead">We recommend to visit your Hausartz. </p>
                        </div>
                        <div className="column col-4">
                            <h5>Services</h5>

                            <p>
                                UI/UX Design<br/>
                                Brand Identity<br/>
                                Animation & Motion Graphics<br/>
                                Web Design<br/>
                                Photography<br/>
                                Illustration<br/>
                                Art Direction
                            </p>
                        </div>
                        <div className="column col-3">
                            <h5>Awards</h5>

                            <p>
                                8 x <strong>Site of the Day</strong> Awwwards<br/>
                                4 x <strong>Site of the Day</strong> CSS Award<br/>
                                2 x <strong>Red Dot</strong> Award<br/>
                                1 x <strong>Fwa</strong> Award<br/>
                                1 x <strong>Site of the Month</strong> Awwwards
                            </p>
                        </div>
                    </div>

                    <div className="gap_100"/>
                </div>

            </div>

            {props.children}
        </div>
    );
};

AccidentMeLightView.propTypes = {

};

export default AccidentMeLightView;
