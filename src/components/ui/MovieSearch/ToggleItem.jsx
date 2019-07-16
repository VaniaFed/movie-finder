import React from 'react';

export const ToggleItem = ({ label }) => {
    return (
        <label className="toggle">
            <input type="radio" name="toggle" />
            <span>{label}</span>
        </label>
    );
};
