import React, { Fragment } from 'react';
import { MovieBlock } from 'Components/ui/movie-block/';
import { Movies } from 'Components/ui/movies/';
import { MoviePageInfo } from 'Components/ui/movie-page--info';

export const MoviePage = ({ movies }) => {
    return (
        <Fragment>
            <MovieBlock />
            <MoviePageInfo genre="Drama" />
            <Movies movies={movies} />
        </Fragment>
    );
};
