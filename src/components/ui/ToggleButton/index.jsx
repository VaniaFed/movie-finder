import React, { memo } from 'react';

import './toggleButton.scss';

export const ToggleButton = memo(({ label }) => {
    return (
        <label className="toggle-button">
            <input
                className="toggle-button__input"
                type="radio"
                name="toggle"
            />
            <span className="toggle-button__text">{label}</span>
        </label>
    );
});
