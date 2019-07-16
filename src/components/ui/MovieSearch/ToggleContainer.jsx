import React from 'react';
import { ToggleItem } from './ToggleItem';

export const ToggleContainer = () => {
    return (
        <ul className="searchBy__radios">
            <ToggleItem label="Title" />
            <ToggleItem label="Genre" />
        </ul>
    );
};
