import React from 'react';

export const ToggleButton = ({ label }) => {
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
};
