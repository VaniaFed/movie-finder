import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { MovieInfo } from 'Components/movie-info';

import './movie.scss';

export const Movie = memo(({ movie, className }) => {
    const resultClass = classNames('movie', className);
    return (
        <div className={resultClass}>
            <img
                className="movie__image"
                src={movie.posterPath}
                alt={movie.title}
            />
            <MovieInfo movie={movie} className="movie__info" />
        </div>
    );
});

Movie.propTypes = {
    movie: PropTypes.object.isRequired,
    className: PropTypes.string
};
