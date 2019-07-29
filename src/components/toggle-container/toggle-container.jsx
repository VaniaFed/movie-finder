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
            return (
                <ToggleButton
                    key={item.key}
                    checked="checked"
                    label={item.text}
                    name={name}
                    onClick={item.onClick}
                />
            );
        }
        return (
            <ToggleButton
                key={item.key}
                label={item.text}
                name={name}
                onClick={item.onClick}
            />
        );
    });
    return <div className={resultClass}>{buttons}</div>;
});

ToggleContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.string
};
