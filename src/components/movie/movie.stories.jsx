import React from 'react';
import { storiesOf } from '@storybook/react';
import { v4 } from 'uuid';

import { Movie } from './index';

const movie = {
    title: 'Some actually very interesting movie',
    genres: 'action, drama and so on',
    tagline: 'some tagline',
    runtime: 160,
    releaseDate: '2014',
    overview:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ipsam voluptas magnam totam! Veritatis rerum et dolorum unde porro assumenda dicta hic! Odio eaque dolore quos vitae ea quia consequatur.',
    id: v4()
};
storiesOf('Movie', module).add('regular', () => <Movie movie={movie} />);
