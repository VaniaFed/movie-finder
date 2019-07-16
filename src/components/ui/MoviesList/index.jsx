import React from 'react';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
    return (
        <ul className="movie-list">
            {movies.map((movie, i) => (
                <li key={i} className="movie-item">
                    {movie.label}
                </li>
            ))}
        </ul>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
};
