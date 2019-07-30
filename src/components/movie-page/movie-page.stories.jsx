import React from 'react';
import { storiesOf } from '@storybook/react';

import { v4 } from 'uuid';
import { MoviePage } from './index';

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
const moviesWithTheSameGenre = [
    {
        title: 'movei1',
        genres: 'action',
        tagline: 'some tagline',
        releaseDate: '2014',
        posterPath:
            'https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg',
        id: v4()
    },
    {
        title: 'movei1',
        genres: 'action',
        tagline: 'some tagline',
        releaseDate: '2014',
        posterPath:
            'https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg',
        id: v4()
    },
    {
        title: 'movei1',
        genres: 'action',
        tagline: 'some tagline',
        releaseDate: '2014',
        posterPath:
            'https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg',
        id: v4()
    }
];
storiesOf('MoviePage', module).add('regular', () => (
    <MoviePage movie={movie} moviesWithTheSameGenre={moviesWithTheSameGenre} />
));
