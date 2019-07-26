import React from 'react';
import { SearchPage } from 'components/search-page/';
import { MoviePageSmart } from 'containers/movie-page-smart';
import { Logo } from 'components/logo';
import { ErrorBoundary } from 'containers/error-boundary';

export const App = () => {
    return (
        <ErrorBoundary>
            <div className="container">
                <SearchPage />
                <MoviePageSmart />
                <footer>
                    <Logo>netfixroulette</Logo>
                </footer>
            </div>
        </ErrorBoundary>
    );
};
