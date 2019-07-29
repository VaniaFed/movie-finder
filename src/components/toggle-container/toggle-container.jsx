import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ToggleButton } from 'components/toggle-button';

export const ToggleContainer = ({ data, className, name, background }) => {
    const [checked, check] = useState(data[0].key);

    const resultClass = classNames(className);
    const buttons = data.map(item => {
        return (
            <ToggleButton
                key={item.key}
                checked={item.key === checked}
                label={item.text}
                name={name}
                onClick={() => check(item.key)}
                background={background}
            />
        );
    });
    return <div className={resultClass}>{buttons}</div>;
};

ToggleContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.string
};
