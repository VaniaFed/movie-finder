import React from 'react';
import { storiesOf } from '@storybook/react';

import { ToggleButton } from 'components/toggle-button';
import { ToggleLayout } from './index';

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

storiesOf('ToggleLayout', module)
    .add('Not checked background', () => <ToggleLayout>{buttons}</ToggleLayout>)
    .add('Not checked non-background', () => (
        <ToggleLayout>{buttonsWithBackground}</ToggleLayout>
    ));
