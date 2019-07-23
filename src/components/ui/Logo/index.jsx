import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './logo.scss';

export const Logo = ({ children, className }) => {
    const resultClass = classNames(className, 'logo');
    return <h1 className={resultClass}>{children}</h1>;
};

Logo.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string
};
