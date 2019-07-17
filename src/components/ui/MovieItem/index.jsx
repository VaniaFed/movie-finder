import React from 'react';
import PropTypes from 'prop-types';

// here will be get external class name as element
export const MovieItem = ({ movie, className }) => {
    return (
        <li key={movie.id} className="">
            {/* here will be static block class name */}
            {movie.label}
        </li>
    );
};

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired
};
