import React from 'react';
import { storiesOf } from '@storybook/react';
import { v4 } from 'uuid';

import { Movies } from './index';

const movies = [
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
storiesOf('Movies', module).add('regular', () => <Movies movies={movies} />);
