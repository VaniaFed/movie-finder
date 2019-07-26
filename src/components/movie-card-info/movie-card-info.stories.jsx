import React from 'react';
import { storiesOf } from '@storybook/react';
import { v4 } from 'uuid';

import { MovieCardInfo } from './index';

const movie = {
    title: 'movei1',
    genres: 'action',
    tagline: 'some tagline',
    releaseDate: '2014',
    posterPath:
        'https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg',
    id: v4()
};
storiesOf('MovieInfo', module).add('regular', () => (
    <MovieInfo movie={movie} />
));
