import React, { Fragment } from 'react';
import { MovieBlock } from 'Components/ui/movie-block/';
import { MovieLoyout } from 'Components/ui/movie-loyout/';
import { MoviePageInfo } from 'Components/ui/movie-page--info';

export const MoviePage = ({ movies }) => {
    return (
        <Fragment>
            <MovieBlock />
            <MoviePageInfo genre="Drama" />
            <MovieLoyout movies={movies} />
        </Fragment>
    );
};
