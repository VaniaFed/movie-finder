import React from 'react';
import { v4 } from 'uuid';
import { SearchPage } from 'components/search-page/';
import { MoviePage } from 'components/movie-page';
import { Logo } from 'components/logo';
import { ErrorBoundary } from 'components/error-boundary';

const movies = [
    {
        title: 'movei1',
        genres: 'action',
        tagline: 'some tagline',
        releaseDate: '2014',
        runtime: 160,
        overview:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quidem non id numquam nulla, porro itaque laborum ut, minima illum quaerat, iusto dignissimos harum quae? Corrupti sit laboriosam optio magnam!',
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
export const App = () => {
    return (
        <ErrorBoundary>
            <div className="container">
                <SearchPage />
                <MoviePage movie={movies[0]} moviesWithTheSameGenre={movies} />
                <footer>
                    <Logo>netfixroulette</Logo>
                </footer>
            </div>
        </ErrorBoundary>
    );
};
