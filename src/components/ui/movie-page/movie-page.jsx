import React, { Fragment } from 'react';
import { MovieBlock } from 'Components/ui/movie-block/';
import { Movies } from 'Components/ui/Movies/';

import './movie-page.scss';

export const MoviePage = ({ movies }) => {
    return (
        <Fragment>
            <MovieBlock />
            <div className="movie-page-info">
                <span className="movie-page-info__text">Films by</span>
                <span className="movie-page-info__genre">Drama genre</span>
            </div>
            <Movies movies={movies} />
        </Fragment>
    );
};
