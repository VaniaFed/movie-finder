import React from 'react';

export const YetLoader = ({ condition, children, cap }) => {
    if (condition) {
        return children;
    }
    return cap;
};
