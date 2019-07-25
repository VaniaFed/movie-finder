import React, { Fragment } from 'react';
import { v4 } from 'uuid';
import { SearchBlock } from 'Components/search-block';
import { SearchPageInfo } from 'Components/search-page--info';
import { MovieLoyout } from 'Components/movie-loyout';

export const SearchPage = () => {
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
            <SearchPageInfo quantityMovies={movies.length} />
            <MovieLoyout movies={movies} />
        </Fragment>
    );
};
