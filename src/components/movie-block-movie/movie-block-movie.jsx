import React from 'react';
import PropTypes from 'prop-types';
import './movie-block-movie.scss';

export const MovieBlockMovie = ({ movie }) => {
    return (
        <div className="movie-block-movie movie-block__movie">
            <img
                src="https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg"
                alt="movieimage"
                className="movie-block-movie__image"
            />
            <div className="movie-block-movie__info">
                <h2 className="movie-block-movie__title">{movie.title}</h2>
                <p className="movie-block-movie__genres">{movie.genres}</p>
                <p className="movie-block-movie__date">{movie.releaseDate}</p>
                <p className="movie-block-movie__duration">{movie.runtime}m</p>
                <p className="movie-block-movie__description">
                    {movie.overview}
                </p>
            </div>
        </div>
    );
};
MovieBlockMovie.propTypes = {
    movie: PropTypes.objectOf(PropTypes.object)
};
