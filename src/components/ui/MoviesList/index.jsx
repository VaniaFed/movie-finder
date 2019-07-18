import React from 'react';
import PropTypes from 'prop-types';
import { NotFound } from 'Components/ui/NotFound';
import { MovieItem } from 'Components/ui/MovieItem';

export const MoviesList = ({ movies }) => {
    if (movies.length > 0) {
        return (
            <ul className="movies">
                {movies.map(movie => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </ul>
        );
    }
    return <NotFound caption="Not films found" />;
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
};
