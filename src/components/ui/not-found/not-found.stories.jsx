import React from 'react';
import { storiesOf } from '@storybook/react';

import { NotFound } from './index';

storiesOf('not-found', module).add('regular', () => (
    <NotFound caption="Not found!" />
));
