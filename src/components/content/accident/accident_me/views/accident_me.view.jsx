import React from 'react';

const AccidentMeView = ({children}) => {
    return (
        <div className="header_title">
            <div className="container">
                <div className="row">
                    <div className="column col-7 offset-">
                        <h6>Okay.</h6>
                        <h1>How bad are you?</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

AccidentMeView.propTypes = {

};

export default AccidentMeView;
