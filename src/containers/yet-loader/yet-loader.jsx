import React from 'react';

export const YetLoader = ({ condition, children, Cap }) => {
    if (condition) {
        return children;
    }
    return <Cap />;
};
