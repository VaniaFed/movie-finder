import React from 'react';
import classNames from 'classnames';
import './button.scss';

interface ButtonProps {
    text: string;
    className: string;
    onClick: any;
}
export const Button = ({ text, className, onClick }: ButtonProps) => {
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
