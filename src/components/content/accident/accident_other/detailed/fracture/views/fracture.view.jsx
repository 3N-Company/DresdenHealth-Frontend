import React from 'react';
import PropTypes from 'prop-types';
import {ROUTES} from "../../../../../../../constants/routes";
import {Link} from "react-router-dom";

const FractureView = props => {
    return (
        <div>
            <p>
                Вызвать скорую: <button onClick={props.handleCall}>Send emergency request</button>
            </p>
            <p>
                <Link to={ROUTES.FARMACIES.H}>Nearest pharamcy</Link>
            </p>
            Fracture insurance guide
        </div>
    );
};

FractureView.propTypes = {
    handleCall: PropTypes.func.isRequired
};

export default FractureView;
