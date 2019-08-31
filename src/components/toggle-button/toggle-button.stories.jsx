import React from 'react';
import { storiesOf } from '@storybook/react';

import { ToggleButton } from './index';

storiesOf('ToggleButton', module)
    .add('Regular', () => (
        <ToggleButton name="someButtonGroup" label="Press me!" background />
    ))
    .add('Regular actived', () => (
        <ToggleButton
            name="someButtonGroup"
            label="Press me!"
            background
            checked
        />
    ))
    .add('No-background', () => (
        <ToggleButton name="someButtonGroup" label="Press me!" />
    ))

    .add('No-background actived', () => (
        <ToggleButton name="someButtonGroup" label="Press me!" checked />
    ));
