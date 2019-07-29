import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './toggle-button.scss';

export const ToggleButton = ({
    label,
    className,
    checked,
    name,
    background
}) => {
    console.log(background);
    const resultClass = classNames(className, 'toggle-button', {
        'toggle-button--no--background': !background
    });
    return (
        <label className={resultClass}>
            <input
                className={classNames('toggle-button__input', {
                    'toggle-button__input--no--background': !background
                })}
                type="radio"
                defaultChecked={checked || ''}
                name={name}
            />
            <span
                className={classNames('toggle-button__text', {
                    'toggle-button__text--no--background': !background
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
