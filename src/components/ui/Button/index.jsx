import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button.scss';

export const Button = ({ children, className, onClick }) => {
    const resultClass = classNames(className, 'button');
    return (
        <button className={resultClass} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
};
