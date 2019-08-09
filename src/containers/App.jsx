import React from 'react';
import { SearchPageSmart } from 'containers/search-page-smart/';
import { MoviePageSmart } from 'containers/movie-page-smart';
import { ErrorBoundary } from 'containers/error-boundary';
import { Footer } from 'components/footer';

export const App = () => {
    return (
        <ErrorBoundary>
            <SearchPageSmart />
            {/* <MoviePageSmart /> */}
            <Footer />
        </ErrorBoundary>
    );
};
