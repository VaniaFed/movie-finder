import React from 'react';
import { storiesOf } from '@storybook/react';

import { ToggleContainer } from './index';
import { ToggleButton } from '../ToggleButton';

storiesOf('ToggleContainer', module).add('regular', () => (
    <ToggleContainer>
        <ToggleButton label="hello" />
        <ToggleButton label="world" />
        <ToggleButton label="world2" />
    </ToggleContainer>
));
