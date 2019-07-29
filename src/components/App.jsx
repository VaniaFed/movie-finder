import React from 'react';
import { SearchPageSmart } from 'containers/search-page-smart/';
import { MoviePageSmart } from 'containers/movie-page-smart';
import { Logo } from 'components/logo';
import { ErrorBoundary } from 'containers/error-boundary';

export const App = () => {
    return (
        <ErrorBoundary>
            <div className="container">
                <SearchPageSmart />
                <MoviePageSmart />
                <footer>
                    <Logo>netfixroulette</Logo>
                </footer>
            </div>
        </ErrorBoundary>
    );
};
