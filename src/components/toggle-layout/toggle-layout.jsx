import React from 'react';
import PropTypes from 'prop-types';

export const ToggleLayout = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};

ToggleLayout.propTypes = {
    className: PropTypes.string
};
