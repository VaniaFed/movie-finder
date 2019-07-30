import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ToggleButton } from 'components/toggle-button';
import { ToggleLoyout } from 'components/toggle-loyout';

export const ToggleContainer = ({ data, name, background }) => {
    const [checked, check] = useState(data[0].key);

    const buttons = data.map(item => (
        <ToggleButton
            key={item.key}
            checked={item.key === checked}
            label={item.text}
            name={name}
            onClick={() => check(item.key)}
            background={background}
        />
    ));
    return <ToggleLoyout>{buttons}</ToggleLoyout>;
};

ToggleContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    background: PropTypes.string
};
