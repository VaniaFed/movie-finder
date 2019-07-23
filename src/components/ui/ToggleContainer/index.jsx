import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ToggleContainer = memo(({ children, className }) => {
    const resultClass = classNames(className);
    return <div className={resultClass}>{children}</div>;
});

ToggleContainer.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string
};
