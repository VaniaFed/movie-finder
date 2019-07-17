import React from 'react';
import { storiesOf } from '@storybook/react';

import { MovieItem } from './index';

const movie = {
    label: 'label',
    id: 1
};
storiesOf('MovieItem', module).add('regular', () => (
    <MovieItem movie={movie} />
));
