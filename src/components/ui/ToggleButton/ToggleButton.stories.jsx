import React from 'react';
import { storiesOf } from '@storybook/react';

import { ToggleButton } from './index';

storiesOf('ToggleButton', module).add('regular', () => (
    <ToggleButton label="Press me!" />
));
