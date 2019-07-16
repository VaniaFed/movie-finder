import React from 'react';
import { MovieSearch } from 'Components/ui/MovieSearch/';

export const App = () => {
    return (
        <div className="container">
            <header>netfixroulette</header>
            <MovieSearch />
            {/* <MoviePage /> */}
            <footer>netfixroulette</footer>
        </div>
    );
};
