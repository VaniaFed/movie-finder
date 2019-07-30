import React from 'react';
import { storiesOf } from '@storybook/react';

import { ToggleContainer } from './index';

const data = [
    { key: 'release date', text: 'Release date', onClick: f => f },
    { key: 'rating', text: 'Rating', onClick: f => f }
];
storiesOf('ToggleContainer', module)
    .add('regular', () => (
        <ToggleContainer data={data} name="specificButtonGroup" background />
    ))
    .add('No-background', () => (
        <ToggleContainer data={data} name="specificButtonGroup" />
    ));
