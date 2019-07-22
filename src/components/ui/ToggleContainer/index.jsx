import React from 'react';
import classNames from 'classnames';

export const ToggleContainer = ({ children, className }) => {
    return <div className={classNames(className)}>{children}</div>;
};
