import React from 'react';
import PropTypes from 'prop-types';
import './movie.scss';

export const Movie = ({ movie }) => {
    const formattedGenres = movie.genres.join(', ');
    return (
        <div className="movie movie__movie">
            <img
                src={movie.poster_path}
                alt="movieimage"
                className="movie__image"
            />
            <div className="movie__info">
                <h2 className="movie__title">{movie.title}</h2>
                <p className="movie__genres">{formattedGenres}</p>
                <p className="movie__date">{movie.releaseDate}</p>
                <p className="movie__duration">{movie.runtime}m</p>
                <p className="movie__description">{movie.overview}</p>
            </div>
        </div>
    );
};
Movie.propTypes = {
    movie: PropTypes.objectOf(PropTypes.object)
};
