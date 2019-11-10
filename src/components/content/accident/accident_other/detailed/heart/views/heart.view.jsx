import React from 'react';
import PropTypes from 'prop-types';
import DeffibrilatorsController from "../../../../../deffibrilators/deffibrilators.controller";

const HeartView = props => {
    return (
        <div>
            1) Скорая вызвана <br/>
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

};

export default HeartView;
