import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SearchPageSmart } from 'containers/search-page-smart/';
import { MoviePageSmart } from 'containers/movie-page-smart';
import { ErrorBoundary } from 'containers/error-boundary';
import { Footer } from 'components/footer';
import { FourOfFourPage } from 'components/four-oh-four-page';

export const App = () => {
    return (
        <ErrorBoundary>
            <Switch>
                <Route path="/" exact component={SearchPageSmart} />
                <Route path="/search" component={SearchPageSmart} />
                <Route path="/movies/:id" component={MoviePageSmart} />
                <Route component={FourOfFourPage} />
            </Switch>
            <Footer />
        </ErrorBoundary>
    );
};
