import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ToggleButton } from 'components/toggle-button';

export const ToggleContainer = memo(({ data, className, name, checked }) => {
    const resultClass = classNames(className);
    let actived = false;
    const buttons = data.map(item => {
        if (checked === 'first' && !actived) {
            actived = true;
            return <ToggleButton checked="checked" label={item} name={name} />;
        }
        return <ToggleButton label={item} name={name} />;
    });
    return <div className={resultClass}>{buttons}</div>;
});

ToggleContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.string
};
