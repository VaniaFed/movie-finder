import React from 'react';

export const ToggleContainer = ({ children, className = '' }) => {
    return <ul className={className}>{children}</ul>;
};
