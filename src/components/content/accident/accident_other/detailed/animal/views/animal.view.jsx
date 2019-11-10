import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../../../../constants/routes";

const AnimalView = props => {
    return (
        <div>
            <p>
                Вызвать скорую: <button onClick={props.handleCall}>Send emergency request</button>
            </p>
            <p>
                <Link to={ROUTES.FARMACIES.H}>Nearest pharamcy</Link>
            </p>
            Animal insurance guide
        </div>
    );
};

AnimalView.propTypes = {
    handleCall: PropTypes.func.isRequired
};

export default AnimalView;
