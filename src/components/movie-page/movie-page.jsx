import React, { Fragment } from 'react';
import { MovieBlock } from 'Components/movie-block/';
import { MovieLoyout } from 'Components/movie-loyout/';
import { MoviePageInfo } from 'Components/movie-page--info';

export const MoviePage = ({ movies }) => {
    return (
        <Fragment>
            <MovieBlock />
            <MoviePageInfo genre="Drama" />
            <MovieLoyout movies={movies} />
        </Fragment>
    );
};
