import React from 'react';
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
