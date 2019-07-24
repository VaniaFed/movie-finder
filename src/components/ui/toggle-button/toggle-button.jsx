import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './toggle-button.scss';

export const ToggleButton = memo(({ label, className, checked, name }) => {
    const resultClass = classNames(className, 'toggle-button');
    return (
        <label className={resultClass}>
            <input
                className="toggle-button__input"
                type="radio"
                defaultChecked={checked || ''}
                name={name}
            />
            <span className="toggle-button__text">{label}</span>
        </label>
    );
});
ToggleButton.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    checked: PropTypes.string,
    name: PropTypes.string.isRequired
};
