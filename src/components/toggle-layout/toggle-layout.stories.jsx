import React from 'react';
import { storiesOf } from '@storybook/react';

import { ToggleButton } from 'components/toggle-button';
import { ToggleLoyout } from './index';

const data = [
    { key: 'release date', text: 'Release date' },
    { key: 'rating', text: 'Rating' }
];
const buttons = data.map(item => (
    <ToggleButton key={item.key} label={item.text} background />
));
const buttonsWithBackground = data.map(item => (
    <ToggleButton key={item.key} label={item.text} />
));

storiesOf('ToggleLoyout', module)
    .add('Not checked background', () => <ToggleLoyout>{buttons}</ToggleLoyout>)
    .add('Not checked non-background', () => (
        <ToggleLoyout>{buttonsWithBackground}</ToggleLoyout>
    ));
