import React, { Fragment } from 'react';
import { MovieBlock } from 'Components/ui/movie-block/';
import { Movies } from 'Components/ui/Movies/';

import './MoviePage.scss';

export const MoviePage = ({ movies }) => {
    return (
        <Fragment>
            <MovieBlock />
            <div className="moviePage-info">
                <span className="moviePage-info__text">Films by</span>
                <span className="moviePage-info__genre">Drama genre</span>
            </div>
            <Movies movies={movies} />
        </Fragment>
    );
};
