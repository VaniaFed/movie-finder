import React from 'react';
import { storiesOf } from '@storybook/react';

import { NotFound } from './index';

storiesOf('NotFound', module).add('regular', () => (
    <NotFound caption="Not found!" />
));
