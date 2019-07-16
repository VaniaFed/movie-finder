import React from 'react';
import PropTypes from 'prop-types';

export const MovieItem = ({ movie }) => {
    return (
        <li key={movie.id} className="movies__item">
            {movie.label}
        </li>
    );
};

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired
};
