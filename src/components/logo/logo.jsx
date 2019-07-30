import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './logo.scss';

export const Logo = ({ text, className }) => {
    const resultClass = classNames(className, 'logo');
    return <h1 className={resultClass}>{text}</h1>;
};

Logo.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};
