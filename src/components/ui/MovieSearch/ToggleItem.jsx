import React from 'react';

export const ToggleItem = ({ label }) => {
    return (
        <label className="toggle">
            <input className="toggle__input" type="radio" name="toggle" />
            <span className="toggle__text">{label}</span>
        </label>
    );
};
