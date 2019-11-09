import React from 'react';

const AccidentMeView = ({children}) => {
    return (
        <div>
            <h3>How much i feel bad:</h3>
            {children}
        </div>
    );
};

AccidentMeView.propTypes = {

};

export default AccidentMeView;
