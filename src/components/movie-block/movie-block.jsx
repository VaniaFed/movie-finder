import React from 'react';
import PropTypes from 'prop-types';
import { MovieHeader } from 'components/movie-header/';
import { Movie } from 'components/movie';
import './movie-block.scss';

export const MovieBlock = ({ movie }) => {
    return (
        <div className="movie-block">
            <MovieHeader />
            <Movie movie={movie} className="movie-block__movie" />
        </div>
    );
};
MovieBlock.propTypes = {
    movie: PropTypes.objectOf(PropTypes.object)
};
