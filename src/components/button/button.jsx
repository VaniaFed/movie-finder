import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

export const Button = ({ text, className, onClick }) => {
    const resultClass = classNames(className, 'button');
    return (
        <button
            className={resultClass}
            onClick={onClick}
            type="button"
            data-button="search-page__button-search"
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
};
