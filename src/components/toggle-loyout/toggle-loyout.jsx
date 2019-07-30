import React from 'react';
import PropTypes from 'prop-types';

export const ToggleLoyout = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};

ToggleLoyout.propTypes = {
    className: PropTypes.string
};
