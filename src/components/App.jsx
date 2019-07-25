import React from 'react';
import { v4 } from 'uuid';
import { SearchPage } from 'Components/ui/search-page/';
import { MoviePage } from 'Components/ui/movie-page';
import { Logo } from 'Components/ui/logo';
import { ErrorBoundary } from 'Components/ui/error-boundary';

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
export const App = () => {
    return (
        <ErrorBoundary>
            <div className="container">
                <SearchPage />
                <MoviePage movies={movies} />
                <footer>
                    <Logo>netfixroulette</Logo>
                </footer>
            </div>
        </ErrorBoundary>
    );
};
