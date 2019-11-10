import React from 'react';
import PropTypes from 'prop-types';
import DeffibrilatorsController from "../../../../../deffibrilators/deffibrilators.controller";

const HeartView = props => {
    return (
        <div>
            <p>
                Вызвать скорую: <button onClick={props.handleCall}>Send emergency request</button>
            </p>
            2) Другой пункт <br/>
            3) Хуярьте его деффибрилятором
            <DeffibrilatorsController
                auto={true}
                big={false}
                control={false}
            />
        </div>
    );
};

HeartView.propTypes = {
    handleCall: PropTypes.func.isRequired
};

export default HeartView;
