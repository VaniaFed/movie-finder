import React from 'react';
import { storiesOf } from '@storybook/react';

import { Logo } from './index';

storiesOf('Logo', module).add('regular', () => (
    <Logo text="Your amazing logo" />
));
