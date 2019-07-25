import React, { Fragment } from 'react';
import { MovieBlock } from 'Components/movie-block/';
import { MovieLoyout } from 'Components/movie-loyout/';
import { MoviePageInfo } from 'Components/movie-page--info';

export const MoviePage = ({ movie, moviesWithTheSameGenre }) => {
    return (
        <Fragment>
            <MovieBlock movie={movie} />
            <MoviePageInfo genre="Drama" />
            <MovieLoyout movies={moviesWithTheSameGenre} />
        </Fragment>
    );
};
