import React, { Fragment } from 'react';
import { MoviesList } from 'Components/ui/MoviesList';
import { v4 } from 'uuid';
import { SearchBlock } from 'Components/ui/SearchBlock';

export const MovieSearch = () => {
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
    return (
        <Fragment>
            <SearchBlock />
            <MoviesList movies={movies} />
        </Fragment>
    );
};
