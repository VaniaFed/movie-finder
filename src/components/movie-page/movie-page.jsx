import React from 'react';
import PropTypes from 'prop-types';
import { MovieBlock } from 'components/movie-block/';
import { MoviePageInfo } from 'components/movie-page-info';

export const MoviePage = ({ movie }) => {
    return (
        <>
            <MovieBlock movie={movie} />
            <MoviePageInfo genres={movie.genres} />
        </>
    );
};

MoviePage.propTypes = {
    movie: PropTypes.object
};
