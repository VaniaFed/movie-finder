import React from 'react';
import { storiesOf } from '@storybook/react';

import { ToggleContainer } from './index';
import { ToggleButton } from '../ToggleButton';

storiesOf('ToggleContainer', module).add('regular', () => (
    <ToggleContainer>
        <ToggleButton label="hello" name="specificButtonGroup" />
        <ToggleButton label="world" name="specificButtonGroup" />
        <ToggleButton label="world2" name="specificButtonGroup" />
    </ToggleContainer>
));
