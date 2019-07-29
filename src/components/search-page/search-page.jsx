import React from 'react';
import { v4 } from 'uuid';
import { SearchBlock } from 'components/search-block';
import { SearchPageInfo } from 'components/search-page-info';
import { MovieLoyout } from 'components/movie-loyout';
import { NotFound } from 'components/not-found';
import { YetLoader } from 'containers/yet-loader';

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
    const Cap = () => <NotFound caption="No films found" />;
    return (
        <>
            <SearchBlock />
            <SearchPageInfo quantityMovies={movies.length} />
            <YetLoader condition={movies.length > 0} Cap={Cap}>
                <MovieLoyout movies={movies} />
            </YetLoader>
        </>
    );
};
