import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './movieItem.sass';

export const MovieItem = ({ movie, className }) => {
    const resultClass = classNames('movie', className);
    return (
        <div className={resultClass}>
            <img src={movie.posterPath} alt={movie.title} />
            <h2 className="movie__title">{movie.title}</h2>
            <p>{movie.genres}</p>
            <p>{movie.releaseDate}</p>
        </div>
    );
};

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired,
    className: PropTypes.string
};
