import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './toggle-button.scss';

export const ToggleButton = ({
    label,
    className,
    checked,
    name,
    background,
    onClick
}) => {
    const resultClass = classNames(className, 'toggle-button', {
        'toggle-button--no--background': !background
    });
    return (
        <label className={resultClass} onClick={onClick}>
            <input
                className={classNames('toggle-button__input', {
                    'toggle-button__input--no-background': !background,
                    'toggle-button__input--checked': checked
                })}
                type="radio"
                defaultChecked={checked && 'checked'}
                name={name}
            />
            <span
                className={classNames('toggle-button__text', {
                    'toggle-button__text--no--background': !background,
                    'toggle-button__text--checked': checked,
                    'toggle-button__text--no--background--checked':
                        checked && !background
                })}
            >
                {label}
            </span>
        </label>
    );
};
ToggleButton.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    checked: PropTypes.string,
    name: PropTypes.string.isRequired
};
