import React from 'react';
import { storiesOf } from '@storybook/react';
import { v4 } from 'uuid';

import { MovieLoyout } from './index';

const threeMovies = [
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

const fiveMovies = [
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
storiesOf('MovieLoyout', module)
    .add('three ones', () => <MovieLoyout movies={threeMovies} />)
    .add('five ones', () => <MovieLoyout movies={fiveMovies} />);
