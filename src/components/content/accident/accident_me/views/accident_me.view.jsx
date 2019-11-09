import React from 'react';

const AccidentMeView = ({children}) => {
    return (
        <div>
            <div className="header_title">
                <div className="container">
                    <div className="row">
                        <div className="column col-12 text_center">
                            <h6>Okay.</h6>
                            <h1>How bad are you?</h1>
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

AccidentMeView.propTypes = {};

export default AccidentMeView;
