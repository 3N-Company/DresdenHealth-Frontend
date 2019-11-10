import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../../constants/routes";

const LevelItemView = props => {

    const getLinkProps = () => {
        const p = {
            to: props.to
        }
        if (props.clickHandler !== undefined)
            p.onClick = props.clickHandler
        return p
    }

    return (
        <div className="column col-md-6 col-sm-12 mb-5">
            <h1 className={"big"}>
                <Link {...getLinkProps()}>{props.title}</Link><br/>
            </h1>
            {props.children}
        </div>
    );
};

LevelItemView.propTypes = {
    children: PropTypes.object,
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    clickHandler: PropTypes.func
};

export default LevelItemView;
