import React from 'react';
import PropTypes from 'prop-types';
import { MovieBlock } from 'components/movie-block/';
import { MovieLoyout } from 'components/movie-loyout/';
import { MoviePageInfo } from 'components/movie-page-info';

export const MoviePage = ({ movie, moviesWithTheSameGenre }) => {
    return (
        <>
            <MovieBlock movie={movie} />
            <MoviePageInfo genre="Drama" />
            <MovieLoyout movies={moviesWithTheSameGenre} />
        </>
    );
};

MoviePage.propTypes = {
    movie: PropTypes.object,
    moviesWithTheSameGenre: PropTypes.objectOf(PropTypes.object)
};
